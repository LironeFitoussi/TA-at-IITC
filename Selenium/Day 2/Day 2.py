element = driver.find_element("id", "submit-button")


# ----


elements = driver.find_elements("class_name", "nav-item")

#-----------------------------------------------

from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://atid.store/")

# Locate a button by ID
button = driver.find_element("id", "submit-button")
print("Button Text:", button.text)

# Locate a link by link text
link = driver.find_element("link_text", "Home")
print("Link Href:", link.get_attribute("href"))

# Locate a text input by name
input_field = driver.find_element("name", "search")
print("Input Placeholder:", input_field.get_attribute("placeholder"))

driver.quit()

# -----------------------------------------------

# Locate a navigation link using CSS Selector
nav_link = driver.find_element("css_selector", "nav > ul > li.active > a")

# Locate an input field by attribute
search_input = driver.find_element("css_selector", "input[name='search']")

# -----------------------------------------------

# Click on the 'Shop' link in the navigation bar
shop_link = driver.find_element("css_selector", "nav .nav-item a[href='/shop']")
shop_link.click()

# Extract and print all items in the menu
menu_items = driver.find_elements("css_selector", "ul.menu > li")
for item in menu_items:
    print(item.text)
    
# -----------------------------------------------
# Using contains() in XPath
dynamic_button = driver.find_element("xpath", "//button[contains(@id, 'submit')]")

# Using starts-with() in XPath
dynamic_input = driver.find_element("xpath", "//input[starts-with(@name, 'user_')]")

# -----------------------------------------------

from selenium.common.exceptions import NoSuchElementException, TimeoutException

try:
    element = driver.find_element("id", "non-existent-id")
except NoSuchElementException:
    print("Element not found.")

try:
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "submit-button"))
    )
except TimeoutException:
    print("Element not found within the given time.")

# -----------------------------------------------

# Original fragile locator
try:
    submit_btn = driver.find_element("xpath", "/html/body/div[2]/button")
except NoSuchElementException:
    print("Original locator failed.")

# Improved robust locator
try:
    submit_btn = driver.find_element("xpath", "//button[contains(@id, 'submit')]")
    submit_btn.click()
except NoSuchElementException:
    print("Improved locator failed.")


# -----------------------------------------------