# Assert page title
assert "My Website" in driver.title

# Assert a button is displayed
button = driver.find_element("id", "submit-btn")
assert button.is_displayed()

# ----------------------------

# Assert placeholder text
search_box = driver.find_element("name", "search")
assert search_box.get_attribute("placeholder") == "Search here..."

# ----------------------------

# Capture full webpage screenshot
driver.save_screenshot("page.png")

# Capture element screenshot
button = driver.find_element("id", "submit-btn")
button.screenshot("button.png")

# ----------------------------

import logging

logging.basicConfig(level=logging.INFO)

# Log a message
logging.info("Starting the test...")

try:
    assert driver.title == "Expected Title"
except AssertionError:
    logging.error("Title assertion failed.")
    
# ----------------------------

try:
    assert "Welcome" in driver.title
except AssertionError:
    driver.save_screenshot("error.png")
    logging.error("Assertion failed. Screenshot saved.")

# ----------------------------

try:
    # Validate page title
    assert "Dashboard" in driver.title

    # Validate a button is displayed
    button = driver.find_element("id", "submit")
    assert button.is_displayed()
except AssertionError as e:
    logging.error("Validation failed.")
    driver.save_screenshot("error.png")

