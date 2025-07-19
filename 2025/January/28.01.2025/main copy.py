from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time

service = Service(executable_path='./chromedriver')
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)

driver.get("http://www.guitarart.co.il/chords")
driver.get("http://www.google.com")
driver.back()

time.sleep(2)

driver.forward()
driver.refresh()
driver.quit()

# print(driver.title)
# driver.maximize_window()

time.sleep(10)
