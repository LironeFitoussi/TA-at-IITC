import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import logging


logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(message)s")

logging.info("This is an info message")


@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()


def test_google_title(driver):
    logging.info("Starting test_google_title")
    driver.get("https://www.google.com")
    assert "Google" in driver.title


@pytest.mark.parametrize(
    "credentials, is_valid",
    [
        ({"username": "usertest", "password": "password123"}, True)(
            {"username": "usertest", "password": "kokoloko"}, False
        )({"username": "baba", "password": "password123"}, False)(
            {"username": "baba", "password": "kokoloko"}, False
        )
    ],
)

def test_google_search(driver, search_term):
    logging.info(f"Searching for: {search_term}")
    driver.get("https://www.google.com")
    search_box = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.NAME, "q"))
    )
    search_box.send_keys(search_term)
    search_box.submit()
    WebDriverWait(driver, 10).until(EC.title_contains(search_term))
    assert search_term in driver.title
    logging.info(f"Search for {search_term} successful")


logging.info("This is the end of the test script")
