from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import logging
from datetime import datetime
now_time = datetime.now().strftime("%H-%M-%S")
logging.basicConfig(
    filename=f"app_test_{now_time}.log", 
    filemode="w", 
    level=logging.INFO, 
    format="%(asctime)s - %(levelname)s - %(message)s",
)
logging.info("starting automation test")
service = Service()
options = webdriver.ChromeOptions()
options.add_argument("--window-size=2560,1440")
driver = webdriver.Chrome(service=service, options=options)
driver.get("https://the-internet.herokuapp.com/javascript_alerts")
txt = "ori"
btns = ["Alert", "Confirm", "prompt"]
for i in range(len(btns)):
    try:
        js_alert_btn = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, f'//ul/li[{i+1}]/button'))
        )
        assert js_alert_btn.is_displayed(), f"{btns[i]} button not found"
        logging.info(f"found {btns[i]} button")
        js_alert_btn.click()
        logging.info(f"clicked {btns[i]} button")
        alert = driver.switch_to.alert
        assert f"I am a JS {btns[i]}" in alert.text, f"alert text mismatch"
        logging.info(f"alert text matches")
        if btns[i] == "prompt":
            alert.send_keys(txt)
            logging.info("input entered")
        alert.accept()
        logging.info(f"accepted {btns[i]} alert")
        driver.switch_to.window
        if btns[i] == "prompt":
            res = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.XPATH, "//p[@id='result']"))
            )
            assert res.text == txt, f"result text mismatch"
            logging.info("result text matched")
    except TimeoutException:
        logging.error(f"{btns[i]} button not found in time")
    except AssertionError as e:
        logging.error(e)
logging.info("automation test done")