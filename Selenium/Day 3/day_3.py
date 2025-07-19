# Locate and click a button by ID
button = driver.find_element("id", "submit-btn")
button.click()

# Locate and click a link by its text
link = driver.find_element("link_text", "Learn More")
link.click()

# ------------------------------

# Fill out a text field
name_field = driver.find_element("name", "username")
name_field.send_keys("John Doe")

# Clear a pre-filled field
name_field.clear()

# Submit a form
form = driver.find_element("id", "login-form")
form.submit()

# ------------------------------

from selenium.webdriver.support.ui import Select

# Locate the dropdown
dropdown = Select(driver.find_element("id", "country"))

# Select options
dropdown.select_by_index(1)
dropdown.select_by_value("US")
dropdown.select_by_visible_text("United States")

# ------------------------------

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Wait for a button to become clickable
button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.ID, "submit-btn"))
)
button.click()

# ------------------------------