import sys
import re
import csv
import unicodedata
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.common.exceptions import (
    NoSuchElementException,
    TimeoutException,
    WebDriverException,
)
# from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def configure_stdout():
    """
    Configures stdout to use UTF-8 encoding to handle Hebrew characters.
    """
    if sys.version_info >= (3, 7):
        sys.stdout.reconfigure(encoding="utf-8")
        print("[INFO] stdout reconfigured to UTF-8.")
    else:
        import codecs

        sys.stdout = codecs.getwriter("utf-8")(sys.stdout.buffer)
        print("[INFO] stdout reconfigured to UTF-8 using codecs.")


def normalize_text(text):
    """
    Normalizes the text to Unicode NFC form to handle different quotation marks and similar characters.

    Args:
        text (str): The original text string.

    Returns:
        str: The normalized text string.
    """
    return unicodedata.normalize('NFC', text)


def clean_name(name):
    """
    Cleans the person's name by removing military and police ranks and specific unwanted phrases.

    Args:
        name (str): The original name string.

    Returns:
        str: The cleaned name string.
    """
    # Normalize the name to handle different quotation marks and similar characters
    name = normalize_text(name)

    # Comprehensive list of military and police ranks to remove, including all character variations
    ranks = [
        "סמל ראשון",
        "רב סמל מתקדם",
        "רב נגד",
        "פקד",
        "רב סמל ראשון"
        # Enlisted Military Ranks
        "טוראי",
        "טוראי ראשון",
        "טוראי שני",
        'רב"ט',
        'רב”ט',
        'רב״ט',
        "סמל",
        'סמ"ר',
        'סמ”ר',
        'רס"ב',
        "רס”ב",
        "סמ”ר",
        'רס"ל',
        'רס”ל',
        'רס״ל',
        'רס"ר',
        "רס”ר",
        'רס"מ',
        'רס”מ',
        'רס”ם',
        'רס"ם',

        # Non-Commissioned Officer Military Ranks
        'סג"ם',
        "סגן",
        "סגן משנה",
        "סרן",
        "סרן משנה",
        'רס"ן',
        'רס”ן',
        'רס״ן',
        'רס"ל משנה',
        'רס"ר משנה',

        # Higher Officer Military Ranks
        'סא"ל',
        'סא”ל',
        "אלוף משנה",
        "אלוף",
        'אל"ם',
        'אל”ם',

        # Police Ranks
        "סמ\"ן",
        "סמל ראשון",
        "סמל שני",
        "סגן ראשון",
        "סגן שני",
        "סרן",
        "סרנכ\"ל",
        "מפקד",
        "מפקד כיתה",
        "מפקד פלוגה",
        "מפקד מחלקה",
        "משנה מפקד",
        "אלוף",
        "אלוף משנה",
        "ראש אגף",
        "ראש יחידה",
        "ראש מחלקה",
        "ראש קטע",
        'סמ”ש',

        # Additional Identified Ranks
        'ס"ל',          # סרן אלוף
        'רס"ם',         # רס"ם
        'רס"ר',         # רס"ר
        "רס\"ן",        # רס"ן
        "רב-טוראי",     # רב"ט
    ]

    # Create regex pattern to match the ranks at the start of the string
    # Using word boundaries and ensuring ranks are followed by whitespace
    ranks_pattern = r"^(?:" + "|".join([re.escape(rank) for rank in ranks]) + r")\b\s*"

    # Remove the ranks from the start
    cleaned_name = re.sub(ranks_pattern, "", name)

    # Remove the honorific suffixes
    honorifics = [
        r'ז״ל',
        r'ז"ל',
        r'הי"ד',
    ]
    for honorific in honorifics:
        cleaned_name = re.sub(honorific, "", cleaned_name)

    # Remove the specific phrases
    specific_phrases = [
        r"\(מיל\)",  # Remove the rank in parentheses
        r"\(במיל'\)",
        r"\(במיל׳\)",
        r"\(מיל׳\)",
        r"\(מיל'\)",
        r"\(במיל\)",  # Adding without apostrophe for completeness
    ]
    for phrase in specific_phrases:
        cleaned_name = re.sub(phrase, "", cleaned_name)

    # Remove any remaining unwanted phrases or extra spaces
    cleaned_name = " ".join(cleaned_name.split())

    return cleaned_name


def scrape_kipa_persons(url):
    """
    Scrapes the person's names and details from the specified Kipa URL.

    Args:
        url (str): The URL of the Kipa page to scrape.

    Returns:
        list of dict: A list containing dictionaries with person names and details.
    """
    print(f"[INFO] Starting the scraping process for URL: {url}")

    # Configure Chrome options
    chrome_options = Options()
    # Remove headless mode to keep the browser open
    # chrome_options.add_argument("--headless")  # Uncomment if you want to run in headless mode
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--window-size=1920,1080")

    try:
        print("[INFO] Initializing the Chrome WebDriver...")
        # Initialize the WebDriver
        driver = webdriver.Chrome(
            service=ChromeService(),
            options=chrome_options,
        )
        print("[INFO] Chrome WebDriver initialized successfully.")
    except WebDriverException as e:
        print(f"[ERROR] Error initializing WebDriver: {e}")
        return []

    try:
        print(f"[INFO] Navigating to the URL: {url}")
        # Navigate to the URL
        driver.get(url)
        print("[INFO] Page loaded successfully.")

        # Implement explicit wait to ensure the container is loaded
        wait = WebDriverWait(driver, 20)  # Wait up to 20 seconds
        container = wait.until(
            EC.presence_of_element_located((By.XPATH, "//div[@class='container']"))
        )
        print("[INFO] Container located successfully.")

        # Find all person divs within the container
        persons = container.find_elements(By.CLASS_NAME, "person")
        num_persons = len(persons)
        print(f"[INFO] Found {num_persons} person entries on the page.")

        if num_persons == 0:
            print(
                "[WARNING] No person entries found. Please check the page structure or XPath."
            )

        # Lists to hold extracted data
        extracted_data = []
        cleaned_names = []

        for idx, person in enumerate(persons, start=1):
            print(f"[INFO] Processing person {idx}/{num_persons}...")
            try:
                # Extract the person's name
                name_element = person.find_element(By.CLASS_NAME, "person-name")
                person_name = name_element.text.strip()

                # Clean the person's name
                cleaned_person_name = clean_name(person_name)

                # Extract the person's details
                details_element = person.find_element(By.CLASS_NAME, "person-details")
                person_details_html = details_element.get_attribute("innerHTML").strip()

                # Replace <br> tags with newline characters for readability
                person_details = (
                    person_details_html.replace("<br>", "\n")
                    .replace("<br/>", "\n")
                    .replace("<br />", "\n")
                )

                # Append to the list as a dictionary
                extracted_data.append(
                    {
                        "name": person_name,
                        "cleaned_name": cleaned_person_name,
                        "details": person_details,
                    }
                )

                # Append the cleaned name to the cleaned_names list
                cleaned_names.append(cleaned_person_name)

                print(f"[SUCCESS] Extracted data for person {idx}:")
                print(f"  Original Name: {person_name}")
                print(f"  Cleaned Name: {cleaned_person_name}")
                print(f"  Details: {person_details}\n")

            except NoSuchElementException as e:
                print(f"[ERROR] Error extracting data for person {idx}: {e}")
                continue
            except Exception as e:
                print(f"[ERROR] Unexpected error for person {idx}: {e}")
                continue

        print("[INFO] Scraping of person entries completed.")

        print("Saving data to 'kipa_persons.csv'...")
        # Save data to CSV
        try:
            with open("kipa_persons.csv", "w", newline="", encoding="utf-8") as csvfile:
                fieldnames = ["Original Name", "Cleaned Name", "Details"]
                writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

                writer.writeheader()
                for person in extracted_data:
                    writer.writerow(
                        {
                            "Original Name": person["name"],
                            "Cleaned Name": person["cleaned_name"],
                            "Details": person["details"],
                        }
                    )

            print("[SUCCESS] Data has been saved to 'kipa_persons.csv'.")
        except Exception as e:
            print(f"[ERROR] Failed to save data to CSV: {e}")

        print("Saving cleaned names to 'cleaned_names.txt'...")
        # Save cleaned names to a text file
        try:
            with open("cleaned_names.txt", "w", encoding="utf-8") as txtfile:
                for name in cleaned_names:
                    txtfile.write(name + "\n")
            print("[SUCCESS] Cleaned names have been saved to 'cleaned_names.txt'.")
        except Exception as e:
            print(f"[ERROR] Failed to save cleaned names to text file: {e}")

        print("Scraping completed. Browser will remain open for inspection.")
        print("Press Enter in the terminal to close the browser and exit the script.")

        # Wait for user input to close the browser
        input()

        return extracted_data

    except TimeoutException:
        print("[ERROR] Loading the page took too much time!")
        return []
    except NoSuchElementException as e:
        print(f"[ERROR] Error locating elements on the page: {e}")
        return []
    except Exception as e:
        print(f"[ERROR] An unexpected error occurred: {e}")
        return []
    finally:
        print("[INFO] Closing the WebDriver...")
        # Close the WebDriver only after user presses Enter
        driver.quit()
        print("[INFO] WebDriver closed.")


if __name__ == "__main__":
    configure_stdout()

    target_url = "https://www.kipa.co.il/%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%91%D7%9E%D7%9C%D7%97%D7%9E%D7%94/%D7%A9%D7%9E%D7%95%D7%AA-%D7%94%D7%94%D7%A8%D7%95%D7%92%D7%99%D7%9D/"

    print("[INFO] Script started.")
    data = scrape_kipa_persons(target_url)
    print("[INFO] Script finished.")

    # Optionally, you can process 'data' further, such as saving to a CSV or JSON file
