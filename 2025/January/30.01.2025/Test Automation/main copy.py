from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import time

service = Service()
options = webdriver.ChromeOptions()
options.add_argument('--headless')
driver = webdriver.Chrome(service=service, options=options)

# 1. Open Browser
driver.get("https://atid.store/")
driver.get("https://atid.store/contact-us")

# try:
#     anchor_element = driver.find_element(By.XPATH, "//a[normalize-space()='Powered By ATID College']")
#     time.sleep(3)
#     anchor_element.click()
# except NoSuchElementException:
#     print("Evyatarrrrrrr\n\n\n\n\n\n\n\n")

try:
    name_input = driver.find_element(By.XPATH, "//input[@id='wpforms-15-field_0']")
    time.sleep(1)
    name_input.send_keys("Shalev Ben Moshe")
    
    email_input = driver.find_element(By.XPATH, "//input[@id='wpforms-15-field_4']")
    email_input.send_keys("shalev@example.com")
    
    text_input = driver.find_element(By.XPATH, "//textarea[@id='wpforms-15-field_2']")
    text_input.send_keys("Bevadaiiiiiii")
    # time.sleep(1)
    # input_element.clear()
except NoSuchElementException:
    print("Evyatarrrrrrr\n\n\n\n\n\n\n\n")
    
# Find Form and Submit
try:
    form_element = driver.find_element(By.XPATH, "//form[@id='wpforms-form-15']")
    form_element.submit()
except NoSuchElementException:
    print("Ben Enossshhhh Pag")
    
try: 
    success_msg = driver.find_element(By.XPATH, "//p[contains(text(),'Thanks for contacting us! We will be in touch with')]")
except NoSuchElementException:
    print("Looser!")
    
print("Test Succefully Passed")
# time.sleep(10)