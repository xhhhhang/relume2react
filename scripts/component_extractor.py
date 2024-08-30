from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
import json

def extract_component_links(url, file_path):
    # Set up Firefox options for headless mode
    firefox_options = Options()
    firefox_options.add_argument("--headless")

    # Initialize the WebDriver
    driver = webdriver.Firefox(options=firefox_options)

    # Open the specified URL
    driver.get(url)

    # Find all elements with the specified structure
    elements = driver.find_elements(By.XPATH, "//li/a[starts-with(@href, 'https://relume.io/react-components/')]")

    # Create a list to store element data
    element_data = []

    # Extract data from elements and add to the list
    for element in elements:
        href = element.get_attribute("href")
        text = element.text
        element_data.append({"href": href, "text": text})

    # Save data to a JSON file
    with open(file_path, "w") as json_file:
        json.dump(element_data, json_file, indent=2)

    # Count the number of elements
    count = len(elements)

    print(f"Number of elements found: {count}")

    # Close the browser
    driver.quit()

    return count