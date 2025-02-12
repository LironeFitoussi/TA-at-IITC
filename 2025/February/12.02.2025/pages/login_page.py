from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class LoginPage:
    def __init__(self, driver):
        self.driver = driver
        self.username_input = (By.ID, "username")
        self.password_input = (By.NAME, "password")
        self.submit_button = (By.XPATH, "//button[normalize-space()='Login']")
        self.wait = WebDriverWait(driver, 10)

    def access_page(self):
        self.driver.get("http://127.0.0.1:5500/client")
        
    def enter_username(self, username):
        self.wait.until(EC.presence_of_element_located(self.username_input)).send_keys(
            username
        )

    def enter_password(self, password):
        self.wait.until(EC.presence_of_element_located(self.password_input)).send_keys(
            password
        )

    def submit_login(self):
        self.wait.until(EC.presence_of_element_located(self.submit_button)).click()