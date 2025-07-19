import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.alert import Alert
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

# -------------------------------------------------------------------
#  Buggy Python Script for Debugging Exercise
# -------------------------------------------------------------------
#  This script has the following issues:
#    1) Fails to wait for the modal to be visible before interacting.
#    2) Tries to switch to the iframe content without using switch_to.frame().
#    3) Attempts to dismiss an alert even if none is present at the time.
# -------------------------------------------------------------------

def run_buggy_script():
    # Setup Chrome WebDriver (adjust path to chromedriver as needed)
    chrome_options = Options()
    chrome_options.add_argument("--start-maximized")
    service = Service("path/to/chromedriver")
    driver = webdriver.Chrome(service=service, options=chrome_options)

    try:
        # Load the test page
        driver.get("file:///path/to/DebuggingExercise.html")

        # -------------------------------------------------------------------
        # 1) Try to dismiss an alert that does not exist yet
        #    (BUG: This will fail if alert is not present.)
        # -------------------------------------------------------------------
        print("Attempting to dismiss an alert even though it doesn't exist...")
        Alert(driver).dismiss()  # <-- This line will throw an exception if no alert is there

        # -------------------------------------------------------------------
        # 2) Not waiting for the modal to appear before interacting
        # -------------------------------------------------------------------
        modal_btn = driver.find_element(By.ID, "modalBtn")
        modal_btn.click()
        print("Clicked on 'Show Modal' button.")

        # Immediately try to find and click the close button in the modal
        # (BUG: The modal might not be fully displayed yet.)
        close_btn = driver.find_element(By.ID, "closeBtn")
        close_btn.click()
        print("Clicked on 'Close' button in modal (no wait applied).")

        # -------------------------------------------------------------------
        # 3) Attempt to interact with iframe content
        #    (BUG: Not switching to the iframe before searching for elements!)
        # -------------------------------------------------------------------
        print("Attempting to interact with iframe content without switching frames...")
        iframe_content = driver.find_element(By.XPATH, "//h3[text()='iFrame Content']")
        print("Found text in iframe (not really, this line should fail).")

        # -------------------------------------------------------------------
        # 4) Actually show an alert and attempt to dismiss it incorrectly
        # -------------------------------------------------------------------
        alert_btn = driver.find_element(By.ID, "alertBtn")
        alert_btn.click()
        print("Clicked on 'Show Alert' button.")

        # Not giving time for alert to pop up before dismissing
        # (BUG: Even though the alert is triggered, we don't wait or handle properly)
        Alert(driver).dismiss()
        print("Dismissed the alert without waiting.")

    except Exception as e:
        print(f"\n[ERROR] An exception occurred: {e}\n")

    finally:
        # Close the browser
        time.sleep(2)  # Just to observe the final state before closing
        driver.quit()


if __name__ == "__main__":
    run_buggy_script()
