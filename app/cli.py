import os
import subprocess
import json
from pathlib import Path
import re
from typing import List, Dict
import openai
import argparse
import shutil

from config import DATA_DIR

def create_nextjs_project(project_name: str, force_create: bool) -> Path:
    project_dir = Path.cwd() / project_name
    if project_dir.exists():
        if force_create:
            print(f"Project '{project_name}' already exists. Removing and recreating...")
            shutil.rmtree(project_dir)
        else:
            use_existing = input(f"Project '{project_name}' already exists. Use existing project? (y/n) [n]: ").lower().strip()
            use_existing = use_existing == 'y' if use_existing else False
            if not use_existing:
                print("Exiting...")
                exit(1)
            return project_dir
    
    subprocess.run(["npx", "create-next-app@latest", str(project_dir), "--typescript", "--eslint", "--tailwind", "--app", "--src-dir", "--import-alias", "@/*"], check=True)
    
    # Install necessary Relume modules
    print("Installing necessary Relume modules...")
    subprocess.run(["npm", "install", "@relume_io/relume-ui", "@relume_io/relume-tailwind", "tailwindcss-animate", "@tailwindcss/typography"], cwd=project_dir, check=True)
    
    # Add Relume Tailwind configuration
    tailwind_config_path = project_dir / "tailwind.config.ts"
    relume_config = """
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@relume_io/relume-ui/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
"""
    
    with open(tailwind_config_path, "w") as f:
        f.write(relume_config)
    
    print("Added Relume Tailwind configuration.")
    
    return project_dir

def get_user_sections() -> List[str]:
    sections = []
    while True:
        section = input("Enter a section name (or press Enter to finish): ")
        if not section:
            break
        sections.append(section)
    return sections

def get_official_section_names(sections: List[str]) -> List[Dict[str, str]]:
    openai.api_key = os.getenv("OPENAI_API_KEY")
    official_sections = []
    
    for section in sections:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant that provides official names for Relume components."},
                {"role": "user", "content": f"Convert '{section}' to: 1) file name (kebab-case), 2) component name (PascalCase), 3) props name (PascalCase + 'Props'), 4) default props name (PascalCase + 'Defaults')"}
            ]
        )
        
        result = response.choices[0].message.content
        file_name, component_name, props_name, defaults_name = re.findall(r'\d\)\s*([\w-]+)', result)
        
        official_sections.append({
            "user_input": section,
            "file_name": file_name,
            "component_name": component_name,
            "props_name": props_name,
            "defaults_name": defaults_name
        })
    
    return official_sections

def integrate_sections(project_dir: Path, sections: List[Dict[str, str]]):
    components_dir = project_dir / "src" / "components"
    components_dir.mkdir(exist_ok=True)
    
    index_content = "import React from 'react';\n\n"
    
    for section in sections:
        source_file = DATA_DIR / "code_snippets" / f"{section['file_name']}.tsx"
        if source_file.exists():
            # Read the content of the source file
            with open(source_file, 'r') as f:
                content = f.read()
            
            # Check if 'use client' is present, if not, add it
            if not content.strip().startswith('"use client"') and not content.strip().startswith("'use client'"):
                content = "'use client';\n\n" + content
            
            # Write the modified content to the target file
            target_file = components_dir / f"{section['file_name']}.tsx"
            with open(target_file, 'w') as f:
                f.write(content)
            
            # Add import statement
            index_content += f"import {{ {section['component_name']} }} from '@/components/{section['file_name']}';\n"
        else:
            print(f"\033[91mWarning: Source file for '{section['file_name']}' not found. Component will not be added.\033[0m")
    
    index_content += "\nexport default function Home() {\n  return (\n    <main className=\"flex min-h-screen flex-col items-center justify-between p-24\">\n"
    for section in sections:
        index_content += f"      <{section['component_name']} />\n"
    index_content += "    </main>\n  );\n}\n"
    
    with open(project_dir / "src" / "app" / "page.tsx", "w") as f:
        f.write(index_content)

def run_project(project_dir: Path):
    subprocess.run(["npm", "run", "dev"], cwd=project_dir)

def deploy_to_vercel(project_dir: Path):
    subprocess.run(["vercel", "--yes"], cwd=project_dir)

def get_user_sections_simple() -> List[str]:
    sections = []
    print("Enter the names of the Relume sections you want to include, followed by their number (e.g., 'header 32').")
    print("Press Enter on an empty line when you're done.")
    while True:
        section = input("Section name and number: ").strip()
        if not section:
            break
        sections.append(section)
    return sections

def get_official_section_names_simple(user_sections, element_data):
    official_sections = []
    for user_section in user_sections:
        section_name, section_number = user_section.split()
        matched_section = next((item for item in element_data if section_name.lower() in item['text'].lower() and section_number in item['text']), None)
        if matched_section:
            official_sections.append({
                'user_input': user_section,
                'file_name': Path(matched_section['href']).name,
                'component_name': matched_section['text'].replace(' ', '')
            })
        else:
            print(f"Warning: No match found for '{user_section}'. Skipping.")
    return official_sections

def main():
    parser = argparse.ArgumentParser(description="Generate a Next.js project with Relume components")
    parser.add_argument("project_name", help="Name of the project to create")
    parser.add_argument("--simple", action="store_true", help="Use simplified input mode")
    parser.add_argument("--force-create", action="store_true", help="Force create a new project even if it already exists")
    args = parser.parse_args()

    project_dir = create_nextjs_project(args.project_name, args.force_create)
    
    if args.simple:
        user_sections = get_user_sections_simple()
    else:
        user_sections = get_user_sections()
    
    with open(DATA_DIR / 'element_data.json', 'r') as f:
        element_data = json.load(f)
    
    if args.simple:
        official_sections = get_official_section_names_simple(user_sections, element_data)
    else:
        official_sections = get_official_section_names(user_sections, element_data)
    
    integrate_sections(project_dir, official_sections)
    
    if input("Do you want to run the project? (y/n): ").lower() == 'y':
        run_project(project_dir)
    
    if input("Do you want to deploy the project to Vercel? (y/n): ").lower() == 'y':
        deploy_to_vercel(project_dir)

if __name__ == "__main__":
    main()