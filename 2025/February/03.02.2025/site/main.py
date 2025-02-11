import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.alert import Alert
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import NoAlertPresentException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import logging
from datetime import datetime

# -------------------------------------------------------------------
#  Buggy Python Script for Debugging Exercise
# -------------------------------------------------------------------
#  This script has the following issues:
#    1) Fails to wait for the modal to be visible before interacting.
#    2) Tries to switch to the iframe content without using switch_to.frame().
#    3) Attempts to dismiss an alert even if none is present at the time.
# -------------------------------------------------------------------
now_time = datetime.now().strftime("%H-%M-%S")
logging.basicConfig(
    filename=f"app_test_{now_time}.log", 
    filemode="w", 
    level=logging.INFO, 
    format="%(asctime)s - %(levelname)s - %(message)s",
)
logging.info("starting automation test")

def is_alert_present(driver):
    try:
        alert = driver.switch_to.alert
        alert.dismiss()
        return True
    except NoAlertPresentException:
        return False

def run_buggy_script():
    # Setup Chrome WebDriver (adjust path to chromedriver as needed)
    chrome_options = Options()
    chrome_options.add_argument("--start-maximized")
    service = Service()
    driver = webdriver.Chrome(service=service, options=chrome_options)

    wait = WebDriverWait(driver, 10)
    try:
        # Load the test page
        driver.get("http://127.0.0.1:5500/site/index.html")

        # Step 1: Find and Click Button
        logging.info("Seaching Button")
        alert_btn = wait.until(
            EC.presence_of_element_located((By.ID, "alertBtn"))
        )
        
        logging.info("Valudating Button")
        assert alert_btn, "Alert Button Not Found"
        
        logging.info("Clicking Button")
        alert_btn.click()
        
        assert is_alert_present(driver) == True, "ERROR: No Alert Called"
            
        # -------------------------------------------------------------------
        # 2) Not waiting for the modal to appear before interacting
        # -------------------------------------------------------------------
        modal_btn = wait.until(
            EC.presence_of_element_located((By.ID, "modalBtn"))
        )
        
        assert modal_btn, "Modal Button Not Found"
        
        modal_btn.click()
        logging.info("Clicked on 'Show Modal' button.")
        
        close_btn = driver.find_element(By.ID, "closeBtn")
        close_btn.click()
        logging.info("Clicked on 'Close' button in modal (no wait applied).")

        # -------------------------------------------------------------------
        # 3) Attempt to interact with iframe content
        #    (BUG: Not switching to the iframe before searching for elements!)
        # -------------------------------------------------------------------
        logging.info("Attempting to interact with iframe content without switching frames...")
        
        logging.info("Looking Fot iFrame")
        iframe_container = wait.until(
            EC.presence_of_element_located((By.ID, "testFrame"))
        )
        driver.switch_to.frame(iframe_container)
        
        iframe_content = driver.find_element(By.XPATH, "//h3[text()='iFrame Content']")
        
        assert iframe_content.text == 'iFrame Content', "Wrong Text Content"
        logging.info("Found text in iframe")
    except AssertionError as e:
        logging.error(f"Assertion Error: {e}")
        
    except Exception as e:
        logging.error(f"\n[ERROR] An exception occurred: {e}\n")
    finally:
        # Close the browser
        time.sleep(2)  # Just to observe the final state before closing
        driver.quit()


if __name__ == "__main__":
    run_buggy_script()