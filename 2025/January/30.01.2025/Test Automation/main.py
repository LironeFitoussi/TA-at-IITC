from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC

import time

service = Service()
options = webdriver.ChromeOptions()
# options.add_argument('--headless')
driver = webdriver.Chrome(service=service, options=options)

# 1. Open Browser
# driver.get("http://localhost:5173/dropdowns")

# try:
#     countries_dropdown = Select(driver.find_element(By.XPATH, "//select[@id='country-dropdown']"))
#     countries_dropdown.select_by_visible_text("United States")
# except NoSuchElementException:
#     print("Element not Found!")
    
# 2. Load Wait
driver.get("http://localhost:5173/delays")

try:
    msg = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//p[normalize-space()='Dynamic Content Loaded!']"))
    )
    print(msg.text)
    print("Loaded")
    
except TimeoutException:
    print("Element not Found! in Time")