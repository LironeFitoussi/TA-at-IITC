# Assert page title
assert "My Website" in driver.title

# Assert a button is displayed
button = driver.find_element("id", "submit-btn")
assert button.is_displayed()

# ----------------------------------------------

# Assert placeholder text
search_box = driver.find_element("name", "search")
assert search_box.get_attribute("placeholder") == "Search here..."

# ----------------------------------------------

import logging

logging.basicConfig(level=logging.INFO)

# Log a message
logging.info("Starting the test...")

try:
    assert driver.title == "Expected Title"
except AssertionError:
    logging.error("Title assertion failed.")
