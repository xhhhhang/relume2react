import json
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from tqdm import tqdm
import os
from bs4 import BeautifulSoup
import argparse
import concurrent.futures
import urllib.parse
from pathlib import Path

from config import DATA_DIR

def extract_code_snippet(driver, url):
    try:
        driver.get(url)
        code_element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//code[contains(@class, 'language-typescript')]")))
        html_content = code_element.get_attribute('outerHTML')
        
        # Use BeautifulSoup to parse the HTML and extract the text content
        soup = BeautifulSoup(html_content, 'html.parser')
        code_text = soup.get_text()
        
        # Preserve original formatting
        lines = code_text.split('\n')
        formatted_lines = [line.rstrip() for line in lines if line.strip()]
        formatted_code = '\n'.join(formatted_lines)
        
        return formatted_code
    except Exception as e:
        print(f"Error processing {url}: {str(e)}")
        return None

def get_filename_from_url(url):
    path = urllib.parse.urlparse(url).path
    component_name = path.split('/')[-1]
    return f"{component_name}.tsx"

def file_exists(output_dir, filename):
    return (output_dir / filename).is_file()

def count_existing_files(output_dir):
    return len([f for f in os.listdir(output_dir) if f.endswith('.tsx')])

def process_component(component, output_dir):
    driver = create_driver()
    try:
        filename = get_filename_from_url(component['href'])
        if file_exists(output_dir, filename):
            return {'status': 'skipped', 'component': component, 'reason': 'File already exists'}
        
        code = extract_code_snippet(driver, component['href'])
        if code:
            with open(output_dir / filename, 'w', encoding='utf-8') as f:
                f.write(code)
            return {'status': 'success', 'component': component}
        else:
            return {'status': 'failed', 'component': component, 'reason': 'Failed to extract code snippet'}
    except Exception as e:
        return {'status': 'failed', 'component': component, 'reason': str(e)}
    finally:
        driver.quit()

def create_driver():
    firefox_options = Options()
    firefox_options.add_argument("--headless")
    return webdriver.Firefox(options=firefox_options)

def process_components(components, num_workers):
    output_dir = DATA_DIR / 'code_snippets'
    existing_files = set(f for f in os.listdir(output_dir) if f.endswith('.tsx'))
    print(f"Found {len(existing_files)} existing files.")

    new_components = []
    for component in components:
        filename = get_filename_from_url(component['href'])
        if filename not in existing_files:
            new_components.append(component)
        else:
            existing_files.remove(filename)

    print(f"Attempting to download {len(new_components)} new components.")
    if existing_files:
        print(f"Warning: {len(existing_files)} files in the output directory are not in the component list:")
        for file in existing_files:
            print(f"  - {file}")

    results = {'success': [], 'failed': [], 'skipped': []}
    with concurrent.futures.ThreadPoolExecutor(max_workers=num_workers) as executor:
        futures = {executor.submit(process_component, component, output_dir): component for component in new_components}
        for future in tqdm(concurrent.futures.as_completed(futures), total=len(new_components), desc="Processing components"):
            result = future.result()
            results[result['status']].append(result)
            if result['status'] == 'failed':
                component = result['component']
                print(f"\nFailed to process: {component['text']} (URL: {component['href']})")
                print(f"Reason: {result['reason']}")

    print("\nProcessing Results:")
    print(f"Successfully processed: {len(results['success'])}")
    print(f"Failed to process: {len(results['failed'])}")
    print(f"Skipped: {len(results['skipped'])}")

    if results['failed']:
        print("\nSummary of failed components:")
        for result in results['failed']:
            component = result['component']
            print(f"  - {component['text']} (URL: {component['href']})")
            print(f"    Reason: {result['reason']}")

    if results['skipped']:
        print("\nThe following components were skipped:")
        for result in results['skipped']:
            component = result['component']
            print(f"  - {component['text']} (URL: {component['href']})")
            print(f"    Reason: {result['reason']}")

    total_files = count_existing_files(output_dir)
    print(f"\nTotal files after processing: {total_files}")

def main():
    # Set up argument parser
    parser = argparse.ArgumentParser(description="Extract code snippets from component links.")
    parser.add_argument("-n", "--num_links", type=int, default=0, 
                        help="Number of links to process (0 for all)")
    parser.add_argument("-w", "--workers", type=int, default=4,
                        help="Number of parallel workers (default: 4)")
    args = parser.parse_args()

    # Load component links from JSON file
    with open(DATA_DIR / 'element_data.json', 'r') as f:
        components = json.load(f)

    # Use the command-line argument for num_links
    num_links = args.num_links if args.num_links > 0 else len(components)
    num_links = min(num_links, len(components))

    # Slice the components list based on num_links
    components_to_process = components[:num_links]

    # Create a directory to store code snippets
    os.makedirs(DATA_DIR / 'code_snippets', exist_ok=True)

    # Call the updated function
    process_components(components_to_process, args.workers)

    print(f"Processed {len(components_to_process)} components. Code snippets saved in 'code_snippets' directory.")

if __name__ == "__main__":
    main()