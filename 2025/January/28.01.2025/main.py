from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

service = Service(executable_path="./chromedriver")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)

# 1. Open Browser
driver.get("https://atid.store/")

data = "Lirone"

# Find the Button
shop_button = driver.find_element(
    By.XPATH,
    "(//span[@class='elementor-button-text'][normalize-space()='Shop Now'])[1]",
)

shop_button.click()
time.sleep(10)
