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

logging.info("Navigating to the URL... ✅")
driver.get("https://the-internet.herokuapp.com/javascript_alerts")

logging.info("Automation Test Done! ✅")
