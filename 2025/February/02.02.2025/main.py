from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
import logging

now_time = datetime.now().strftime("%H:%M:%S")

logging.basicConfig(
    filename=f"app_test_{now_time}.log",  # Log messages will be written to 'app.log'
    filemode="w",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)

logging.info("Starting Automation Test... ✅")
service = Service()
options = webdriver.ChromeOptions()
options.add_argument("--window-size=2560,1440")
# options.add_argument('--headless')
driver = webdriver.Chrome(service=service, options=options)

driver.get("http://localhost:5173")

now_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
driver.save_screenshot(f"./screenshots/page_full_screen_{now_time}.png")

# Assert page title
logging.info("Checking the page title...")
assert "Vite + React" in driver.title, "The title doesn't match the expected value"
logging.info("The page title is correct! ✅")

try:
    logging.info("Checking the button...")
    mail_input = WebDriverWait(driver, 3).until(
        EC.presence_of_element_located((By.XPATH, "//input[@id=':3:']"))
    )

    logging.debug("Button found!")

    mail_input.screenshot("./test.png")

    assert mail_input.is_displayed(), "The Button disn't displayed"
    logging.info("The button is displayed! ✅")
except AssertionError as e:
    logging.error("Button NOT FOUND!🆘")
except TimeoutException:
    logging.error("Button NOT FOUND!🆘")

# Assert a button is displayed
# button = driver.find_element("id", "submit-btn")
# assert button.is_displayed()

logging.info("Done Automation Test... ✅")
