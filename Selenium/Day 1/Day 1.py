from selenium import webdriver

driver = webdriver.Chrome(executable_path="path/to/chromedriver")
driver.get("https://www.google.com")


# ----------------------------

from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://www.google.com")
print(driver.title)
driver.quit()

# ----------------------------

driver = webdriver.Chrome()
driver.get("https://www.python.org")
print("Title:", driver.title)
driver.maximize_window()

# ----------------------------

driver = webdriver.Chrome()
driver.get("https://atid.store")
driver.back()
driver.forward()
driver.refresh()
driver.quit()

# ----------------------------

from selenium.webdriver.common.by import By

element = driver.find_element(By.ID, "element-id")




# ----------------------------

driver.execute_script("window.open('https://www.google.com');")

active_tabs = driver.window_handles
driver.switch_to.window(active_tabs[1])


driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")


