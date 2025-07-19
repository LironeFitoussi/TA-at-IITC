// src/data/quizData.js

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question:
      "Which method is used to find an element by its ID in Selenium (Python)?",
    options: [
      "A. driver.find_element('id', 'example-id')",
      "B. driver.find_element_by_xpath('example-id')",
      "C. driver.switch_to.frame('example-id')",
      "D. driver.wait_for('id', 'example-id')",
    ],
    answer: "A",
  },
  {
    id: 2,
    question:
      "Which exception typically indicates that an element no longer exists in the DOM (e.g., after a page refresh)?",
    options: [
      "A. NoSuchElementException",
      "B. StaleElementReferenceException",
      "C. ElementNotVisibleException",
      "D. TimeoutException",
    ],
    answer: "B",
  },
  {
    id: 3,
    question:
      "In Selenium, which of the following is a valid locator strategy (in Python)?",
    options: [
      "A. driver.find_element_by_css_selector('div#main')",
      "B. driver.identify_element_css('div#main')",
      "C. driver.select_element('div#main')",
      "D. driver.locate_element_css('div#main')",
    ],
    answer: "A",
  },
  {
    id: 4,
    question: "Which WebDriver method is used to navigate to a new webpage?",
    options: [
      "A. driver.goto('http://example.com')",
      "B. driver.open('http://example.com')",
      "C. driver.start('http://example.com')",
      "D. driver.get('http://example.com')",
    ],
    answer: "D",
  },
  {
    id: 5,
    question:
      "Which import statement is needed to use explicit waits in Selenium (Python)?",
    options: [
      "A. from selenium.webdriver.common.by import By",
      "B. import time",
      "C. from selenium.webdriver.support.ui import WebDriverWait",
      "D. from selenium.webdriver.common.keys import Keys",
    ],
    answer: "C",
  },
  {
    id: 6,
    question:
      "Which is NOT a recommended best practice for handling dynamic elements?",
    options: [
      "A. Using explicit waits before interacting with the element.",
      "B. Using time.sleep(10) for every single step.",
      "C. Checking for element visibility instead of just presence.",
      "D. Using a robust locator that’s less likely to change.",
    ],
    answer: "B",
  },
  {
    id: 7,
    question: "Which command is used to switch control to an alert popup?",
    options: [
      "A. driver.switch_to.alert",
      "B. driver.switch_alert()",
      "C. driver.handle_alert()",
      "D. driver.select_alert()",
    ],
    answer: "A",
  },
  {
    id: 8,
    question:
      "When dealing with file uploads in Selenium (Python), which approach is most common?",
    options: [
      "A. Sending the file path to an <input type='file'> element.",
      "B. Using driver.clipboard_upload(file_path).",
      "C. Right-clicking and selecting 'Upload' in the context menu.",
      "D. Dragging the file from your desktop into the browser window.",
    ],
    answer: "A",
  },
  {
    id: 9,
    question:
      "Which Selenium method captures the screenshot of the current page?",
    options: [
      "A. driver.get_screenshot_as_file('screenshot.png')",
      "B. driver.save_screenshot('screenshot.png')",
      "C. driver.capture_screenshot('screenshot.png')",
      "D. driver.take_screenshot('screenshot.png')",
    ],
    answer: "B",
  },
  {
    id: 10,
    question: "What method is commonly used to switch into an <iframe>?",
    options: [
      "A. driver.switch_to.default_content()",
      "B. driver.switch_to.active_element",
      "C. driver.switch_to.frame(<iframe_element_or_name>)",
      "D. driver.select_iframe(<iframe_id>)",
    ],
    answer: "C",
  },
  {
    id: 11,
    question:
      "Which of the following is the correct sequence to handle an alert after it appears?",
    options: [
      "A. driver.switch_to.alert, then .dismiss() or .accept()",
      "B. driver.dismiss_alert(), then .switch_to.alert",
      "C. driver.find_element_by_alert(), then .click()",
      "D. driver.wait_for_alert(), then .accept()",
    ],
    answer: "A",
  },
  {
    id: 12,
    question: "A NoSuchElementException usually indicates:",
    options: [
      "A. The webpage is still loading.",
      "B. The locator used does not match any element on the page.",
      "C. The test environment is offline.",
      "D. The user has insufficient permissions.",
    ],
    answer: "B",
  },
  {
    id: 13,
    question:
      "Which Python module is typically used for structured logging in test scripts?",
    options: ["A. datetime", "B. logwriter", "C. logging", "D. os"],
    answer: "C",
  },
  {
    id: 14,
    question:
      "The best way to handle intermittent or slow-loading elements is:",
    options: [
      "A. Use a large time.sleep(60) for safety.",
      "B. Use explicit waits like WebDriverWait with expected conditions.",
      "C. Continuously refresh the browser until the element appears.",
      "D. Disable all animations in the browser.",
    ],
    answer: "B",
  },
  {
    id: 15,
    question: "Which statement is true about the Page Object Model (POM)?",
    options: [
      "A. It requires no classes or methods—just a single script.",
      "B. It places selectors and page-specific actions in dedicated classes, separate from test logic.",
      "C. It's only helpful for small projects.",
      "D. It's obsolete in modern test frameworks.",
    ],
    answer: "B",
  },
  {
    id: 16,
    question:
      "What Python command ensures a test fails if a condition is false?",
    options: [
      'A. raise "Error"',
      'B. print("Test Failed!")',
      "C. assert condition",
      "D. stop test if not condition",
    ],
    answer: "C",
  },
  {
    id: 17,
    question:
      "Which approach is recommended when an element’s ID changes upon each page load?",
    options: [
      "A. Update the ID in your script manually every time you refresh.",
      "B. Use a robust locator (CSS or XPATH) relying on stable attributes.",
      "C. Stop testing that element altogether.",
      "D. Wrap the ID in a try-except block to ignore changes.",
    ],
    answer: "B",
  },
  {
    id: 18,
    question: "StaleElementReferenceException can often be fixed by:",
    options: [
      "A. Refinding the element after a page update or using an explicit wait.",
      "B. Immediately calling driver.refresh() each time it appears.",
      "C. Increasing your machine’s RAM.",
      "D. Using only the class_name locator.",
    ],
    answer: "A",
  },
  {
    id: 19,
    question:
      "Which is the correct syntax for finding multiple elements in Selenium (Python)?",
    options: [
      "A. driver.find_elements('css_selector', '.item')",
      "B. driver.find_element('css_selector', '.item')",
      "C. driver.list_elements('css_selector', '.item')",
      "D. driver.get_elements_by_css('.item')",
    ],
    answer: "A",
  },
  {
    id: 20,
    question:
      "Which annotation or naming convention is used to mark a test function in Pytest?",
    options: [
      "A. @unittest.test",
      "B. @pytest.mark.testcase",
      "C. @pytest.mark.test",
      "D. No special decorator required—just name the function test_...",
    ],
    answer: "D",
  },
  {
    id: 21,
    question:
      "What’s a key advantage of using WebDriverWait over time.sleep()?",
    options: [
      "A. It forces the script to wait a fixed amount of time.",
      "B. It waits only until the condition is met (or times out).",
      "C. It doesn’t require any imports.",
      "D. It can be used only for iFrames.",
    ],
    answer: "B",
  },
  {
    id: 22,
    question:
      "Which Selenium method simulates pressing keys like Enter or Tab?",
    options: [
      'A. driver.type_keys("ENTER")',
      "B. element.send_keys(Keys.ENTER)",
      "C. driver.trigger_keys(Keys.ENTER)",
      "D. element.enter_key()",
    ],
    answer: "B",
  },
  {
    id: 23,
    question:
      "Which Python code block correctly logs and handles an exception?",
    options: [
      `A. 
  try:
      # code
  except Exception:
      logging.error("An error occurred", exc_info=True)
  `,
      `B. 
  if error:
      logging.error(error)
  `,
      `C. 
  handle Exception:
      pass
  `,
      `D. 
  print("We caught an error")
  `,
    ],
    answer: "A",
  },
  {
    id: 24,
    question:
      "Which method is used to close the current browser window in Selenium?",
    options: [
      "A. driver.quit()",
      "B. driver.close()",
      "C. driver.stop()",
      "D. driver.end()",
    ],
    answer: "B",
  },
  {
    id: 25,
    question: "A key benefit of the Page Object Model is:",
    options: [
      "A. All code is in one giant file, so it’s easy to find.",
      "B. Locators and test logic are written together in a single method.",
      "C. It separates page-specific code from test logic, improving maintainability.",
      "D. It eliminates the need for waits altogether.",
    ],
    answer: "C",
  },
  {
    id: 26,
    question:
      "Which log level indicates a critical failure that may halt the program?",
    options: [
      "A. logging.INFO",
      "B. logging.DEBUG",
      "C. logging.ERROR",
      "D. logging.CRITICAL",
    ],
    answer: "D",
  },
  {
    id: 27,
    question:
      "What is an effective way to handle multiple browser tabs in Selenium?",
    options: [
      "A. driver.switch_to.window(<handle>)",
      "B. driver.switch_to.new_tab()",
      "C. driver.change_tab(<handle>)",
      "D. driver.select_tab('tab_name')",
    ],
    answer: "A",
  },
  {
    id: 28,
    question:
      "Which code snippet waits until a button is clickable before clicking it?",
    options: [
      `A. 
  button = driver.find_element("id", "login")
  button.click()
  `,
      `B. 
  WebDriverWait(driver, 10).until(
      EC.element_to_be_clickable((By.ID, "login"))
  ).click()
  `,
      `C. 
  time.sleep(3)
  driver.find_element("id", "login").click()
  `,
      `D. 
  driver.click_element_if_exists("login")
  `,
    ],
    answer: "B",
  },
  {
    id: 29,
    question:
      "Which of the following is a recommended strategy to reduce flaky tests?",
    options: [
      "A. Hardcode time.sleep(10) for every action.",
      "B. Use dynamic waits and robust locators.",
      "C. Randomize test order on every run.",
      "D. Test only in Chrome.",
    ],
    answer: "B",
  },
  {
    id: 30,
    question: "Which Selenium command is used to maximize the browser window?",
    options: [
      "A. driver.maximize_window()",
      'B. driver.set_window_size("max")',
      "C. driver.window_fullscreen()",
      "D. driver.expand_window()",
    ],
    answer: "A",
  },
  {
    id: 31,
    question:
      "When selecting an option from a <select> dropdown, which class is typically used?",
    options: [
      "A. Select from selenium.webdriver.support.ui",
      "B. DropdownSelect from selenium.webdriver.dropdown",
      "C. SelectElement from selenium.support",
      'D. driver.dropdown("select_id")',
    ],
    answer: "A",
  },
  {
    id: 32,
    question:
      "Which code snippet returns focus back to the main page after switching to an iframe?",
    options: [
      "A. driver.refresh()",
      "B. driver.switch_to.default_content()",
      "C. driver.go_to.main_content()",
      "D. driver.switch_to.parent_frame()",
    ],
    answer: "B",
  },
  {
    id: 33,
    question:
      "Which Python data structure is ideal for storing multiple WebElements for iteration?",
    options: ["A. list", "B. dict", "C. set", "D. string"],
    answer: "A",
  },
  {
    id: 34,
    question: "In Selenium, driver.quit() will:",
    options: [
      "A. Close the current browser tab only.",
      "B. Close all browser windows and end the WebDriver session.",
      "C. Minimize the browser window.",
      "D. Reload the current page.",
    ],
    answer: "B",
  },
  {
    id: 35,
    question:
      "Which Pytest plugin/feature allows running multiple tests in parallel?",
    options: [
      "A. pytest --multi",
      "B. pytest-xdist (e.g. pytest -n 4)",
      "C. pytest-parallel by default",
      "D. Pytest does not support parallel tests.",
    ],
    answer: "B",
  },
  {
    id: 36,
    question:
      'What is the recommended syntax for checking that an element’s text contains "Hello"?',
    options: [
      `A. 
  text = element.get_text()
  assert text = "Hello"
  `,
      `B. 
  text = element.text
  assert "Hello" in text
  `,
      `C. 
  text = element.value
  assert text == "Hello"
  `,
      `D. 
  element.text_contains("Hello")
  `,
    ],
    answer: "B",
  },
  {
    id: 37,
    question:
      "When uploading files, which element type typically handles the file path input?",
    options: [
      "A. <input type='text'>",
      "B. <input type='file'>",
      "C. <button class='upload'>",
      "D. <form enctype='multipart/form-data'>",
    ],
    answer: "B",
  },
  {
    id: 38,
    question:
      "Which locator strategy is typically the fastest to execute if it’s unique?",
    options: ["A. ID", "B. XPATH", "C. CSS Selector", "D. Class Name"],
    answer: "A",
  },
  {
    id: 39,
    question:
      "If your script needs to verify the title of a new browser tab, you must first:",
    options: [
      "A. Use driver.switch_to.alert",
      "B. Use driver.switch_to.window(new_tab_handle)",
      "C. Use driver.find_element('title', 'New Tab')",
      'D. Use driver.click("tab_title")',
    ],
    answer: "B",
  },
  {
    id: 40,
    question: "Which of these is NOT part of debugging a failing test?",
    options: [
      "A. Adding logs at key steps.",
      "B. Checking if locators are still valid.",
      "C. Immediately deleting the entire test code.",
      "D. Using screenshots to see the page state at failure.",
    ],
    answer: "C",
  },
  {
    id: 41,
    question:
      "Which snippet waits for an element (like a loader) to disappear from the DOM?",
    options: [
      `A. 
  WebDriverWait(driver, 10).until(
      EC.invisibility_of_element_located((By.ID, "loader"))
  )
  `,
      `B. 
  WebDriverWait(driver, 10).until_not(
      EC.presence_of_element_located((By.ID, "loader"))
  )
  `,
      `C. 
  driver.find_element("id", "loader").is_not_displayed()
  `,
      `D. 
  time.sleep(10)
  `,
    ],
    answer: "A",
  },
  {
    id: 42,
    question: "Which action does driver.refresh() perform?",
    options: [
      "A. Closes the current tab.",
      "B. Clears all cookies.",
      "C. Reloads the current page.",
      "D. Navigates to the homepage.",
    ],
    answer: "C",
  },
  {
    id: 43,
    question: "Which solution helps reduce code duplication in test scripts?",
    options: [
      "A. Writing everything inside a single test_main() function.",
      "B. Using helper functions and the Page Object Model (POM).",
      "C. Copying and pasting the same code block into each test.",
      "D. Hardcoding all values in a single file.",
    ],
    answer: "B",
  },
  {
    id: 44,
    question:
      "How should you handle sensitive credentials (e.g., passwords) in your test scripts?",
    options: [
      "A. Hardcode them in the script for convenience.",
      "B. Store them in a secure place like environment variables or a vault.",
      "C. Place them in a public repository as plain text.",
      "D. Encode them in Base64 directly in the script.",
    ],
    answer: "B",
  },
  {
    id: 45,
    question:
      "Which is a valid example of a CSS selector for an element with ID login-button?",
    options: [
      "A. #login-button",
      ".login-button",
      "C. button#login",
      "D. @id='login-button'",
    ],
    answer: "A",
  },
  {
    id: 46,
    question: "Which statement about assert in Python is true?",
    options: [
      "A. It only logs a message without stopping execution.",
      "B. It raises an AssertionError if the condition is false.",
      "C. It cannot be used in test scripts.",
      "D. It only works in Python 2.",
    ],
    answer: "B",
  },
  {
    id: 47,
    question:
      "When should you consider wrapping Selenium actions in a try-except block?",
    options: [
      "A. When you want to ignore all errors silently.",
      "B. Only if you have an alternate strategy or want to log the exception.",
      "C. It’s never recommended to use try-except.",
      "D. To skip any failing steps automatically.",
    ],
    answer: "B",
  },
  {
    id: 48,
    question:
      "Which function is used to retrieve the value of an attribute from a WebElement?",
    options: [
      'A. element.get_property("attribute")',
      'B. element.attribute("attribute")',
      'C. element.get_attribute("attribute")',
      'D. element.property("attribute")',
    ],
    answer: "C",
  },
  {
    id: 49,
    question:
      "Which code snippet takes a screenshot of a specific button element?",
    options: [
      `A. 
  button = driver.find_element("id", "login")
  button.screenshot("button.png")
  `,
      `B. 
  driver.save_screenshot("button.png")
  `,
      `C. 
  driver.take_element_screenshot("login", "button.png")
  `,
      `D. 
  button = driver.find_element("id", "login")
  driver.element_screenshot(button, "button.png")
  `,
    ],
    answer: "A",
  },
  {
    id: 50,
    question:
      "How should you handle an element that appears only after a spinner disappears?",
    options: [
      "A. Click immediately, expecting it will be ready eventually.",
      "B. Use WebDriverWait with invisibility_of_element_located for the spinner, then find the new element.",
      "C. Increase the default wait time to 60 seconds.",
      "D. Switch to a different browser that loads elements faster.",
    ],
    answer: "B",
  },
  {
    id: 51,
    question:
      "Which statement is true about running Selenium tests in headless browser mode?",
    options: [
      "A. Headless mode displays the browser UI for faster debugging.",
      "B. Headless mode allows the browser to run without a UI, often speeding up tests.",
      "C. Headless mode is only supported on mobile devices.",
      "D. Headless mode requires a special WebDriver fork that isn't publicly available.",
    ],
    answer: "B",
  },
  {
    id: 52,
    question:
      "Which of the following is NOT a recommended practice for parallel testing with Selenium (Python)?",
    options: [
      "A. Running tests across multiple browsers or environments simultaneously.",
      "B. Using a unique WebDriver instance per test thread.",
      "C. Sharing the same WebDriver instance across all parallel tests.",
      "D. Utilizing CI/CD tools like Jenkins or GitHub Actions for parallelization.",
    ],
    answer: "C",
  },
  {
    id: 53,
    question:
      "What is the main difference between using WebDriverWait and FluentWait in Selenium?",
    options: [
      "A. FluentWait can define a polling interval and ignore specific exceptions, while WebDriverWait is a simplified version.",
      "B. They are the same; there's no functional difference.",
      "C. FluentWait works only in Safari, while WebDriverWait works everywhere else.",
      "D. WebDriverWait must always poll every 5 seconds, while FluentWait can’t change polling intervals.",
    ],
    answer: "A",
  },
  {
    id: 54,
    question:
      "Which approach is recommended for significantly reducing test run times across multiple browsers?",
    options: [
      "A. Run each test sequentially in the same browser and repeat for each browser type.",
      "B. Utilize a Selenium Grid or cloud-based platform to run tests in parallel across different browsers.",
      "C. Limit testing to only the Chrome browser for speed.",
      "D. Disable all tests except for the login test.",
    ],
    answer: "B",
  },
  {
    id: 55,
    question:
      "Which method is used to open a new browser window or tab in Selenium (Python)?",
    options: [
      "A. driver.execute_script('window.open(...)')",
      "B. driver.new_window('tab')",
      "C. driver.open_new_tab()",
      "D. driver.switch_to.new_tab()",
    ],
    answer: "A",
  },
  {
    id: 56,
    question:
      "When automating file downloads with Selenium, which statement is generally correct?",
    options: [
      "A. Selenium offers a built-in API to select the local download folder in all browsers.",
      "B. You typically configure browser preferences (e.g., via ChromeOptions or FirefoxProfile) to control the download location.",
      "C. You must manually accept download dialogs by screenshot-based automation only.",
      "D. File downloads are unsupported in headless mode across all browsers.",
    ],
    answer: "B",
  },
  {
    id: 57,
    question:
      "Which command changes the size of the browser window to a specific width and height in Selenium (Python)?",
    options: [
      "A. driver.set_window_size(width, height)",
      "B. driver.window_resize(width, height)",
      "C. driver.window_dimensions(width, height)",
      "D. driver.custom_size(width, height)",
    ],
    answer: "A",
  },
  {
    id: 58,
    question:
      "Which approach is recommended to handle data-driven tests for large sets of input data?",
    options: [
      "A. Hardcode all test data directly inside each test method.",
      "B. Store test data in external files (CSV, JSON, or databases) and iterate through them in the tests.",
      "C. Only test a single data point to keep scripts short and simple.",
      "D. Use environment variables to hold large data sets.",
    ],
    answer: "B",
  },
  {
    id: 59,
    question:
      "Which is NOT a typical advantage of using a cloud-based Selenium Grid solution?",
    options: [
      "A. Quick scalability to run tests in parallel across many environments.",
      "B. Seamless integration with CI/CD pipelines.",
      "C. Zero costs at any usage level, as all cloud-based solutions are free.",
      "D. Ability to test on a wide range of OS/browser combinations.",
    ],
    answer: "C",
  },
  {
    id: 60,
    question:
      "Which statement about implementing waits is FALSE when dealing with dynamic content?",
    options: [
      "A. Implicit waits can automatically retry finding elements up to a certain time.",
      "B. Explicit waits (WebDriverWait) give more fine-grained control than implicit waits.",
      "C. FluentWait can ignore specific exceptions and adjust polling intervals.",
      "D. Using only time.sleep is the best approach for any dynamic loading element.",
    ],
    answer: "D",
  },
];
