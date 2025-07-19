from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC

service = Service()
options = webdriver.ChromeOptions()
# options.add_argument('--headless')
driver = webdriver.Chrome(service=service, options=options)

driver.get("http://localhost:5173")

# Assert page title
assert "Vite + React" in driver.title, "The title doesn't match the expected value"

try:
    button = WebDriverWait(driver, 3).until(
        EC.presence_of_element_located((By.XPATH, "//button[@class='bg-red-500 text-white px-4 py-2']"))
    )
    
    button.screenshot("./test.png")
    assert button.is_displayed(), "The Button disn't displayed"
except AssertionError as e:
    print(e)
except TimeoutException:
    print("The button dosnt Exist")

# Assert a button is displayed
# button = driver.find_element("id", "submit-btn")
# assert button.is_displayed()