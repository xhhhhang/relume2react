import json
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from tqdm import tqdm
import re
import os
from bs4 import BeautifulSoup
import argparse
import concurrent.futures
import urllib.parse

def extract_code_snippet(url):
    # Set up Firefox options for headless mode
    firefox_options = Options()
    firefox_options.add_argument("--headless")

    # Initialize the WebDriver
    driver = webdriver.Firefox(options=firefox_options)

    try:
        driver.get(url)
        code_element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//code[contains(@class, 'language-typescript')]"))
        )
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
    finally:
        driver.quit()

def get_filename_from_url(url):
    path = urllib.parse.urlparse(url).path
    component_name = path.split('/')[-1]
    return f"{component_name}.tsx"

def process_component(component):
    code = extract_code_snippet(component['href'])
    if code:
        filename = get_filename_from_url(component['href'])
        with open(os.path.join('code_snippets', filename), 'w', encoding='utf-8') as f:
            f.write(code)
    return component['href']

def main():
    # Set up argument parser
    parser = argparse.ArgumentParser(description="Extract code snippets from component links.")
    parser.add_argument("-n", "--num_links", type=int, default=0, 
                        help="Number of links to process (0 for all)")
    parser.add_argument("-w", "--workers", type=int, default=4,
                        help="Number of parallel workers (default: 4)")
    args = parser.parse_args()

    # Load component links from JSON file
    with open('element_data.json', 'r') as f:
        components = json.load(f)

    # Use the command-line argument for num_links
    num_links = args.num_links if args.num_links > 0 else len(components)
    num_links = min(num_links, len(components))

    # Create a directory to store code snippets
    os.makedirs('code_snippets', exist_ok=True)

    # Process links and extract code snippets in parallel
    with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as executor:
        futures = [executor.submit(process_component, component) for component in components[:num_links]]
        for future in tqdm(concurrent.futures.as_completed(futures), total=num_links, desc="Processing components"):
            future.result()

    print(f"Processed {num_links} components. Code snippets saved in 'code_snippets' directory.")

if __name__ == "__main__":
    main()