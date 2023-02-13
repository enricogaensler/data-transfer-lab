from selenium import webdriver
from tempfile import mkdtemp
from selenium.webdriver.common.by import By


def handler(event=None, context=None):
    options = webdriver.ChromeOptions()
    options.binary_location = '/opt/chrome/chrome'
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument("--disable-gpu")
    options.add_argument("--window-size=1280x1696")
    options.add_argument("--single-process")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-dev-tools")
    options.add_argument("--no-zygote")
    options.add_argument(f"--user-data-dir={mkdtemp()}")
    options.add_argument(f"--data-path={mkdtemp()}")
    options.add_argument(f"--disk-cache-dir={mkdtemp()}")
    options.add_argument("--remote-debugging-port=9222")
    chrome = webdriver.Chrome("/opt/chromedriver", options=options)

    EB_HOST_ADDRESS = "REPLACE_WITH_EB_HOST_ADDRESS"

    for i in range(10):
        chrome.get(EB_HOST_ADDRESS)
        chrome.implicitly_wait(2)
        chrome.get(EB_HOST_ADDRESS + "/dogs")
        chrome.implicitly_wait(10)
        chrome.get(EB_HOST_ADDRESS + "/investors")
        chrome.implicitly_wait(2)
        chrome.get(EB_HOST_ADDRESS + "/faq")
        chrome.implicitly_wait(2)
        chrome.get(EB_HOST_ADDRESS + "/apply")
        chrome.implicitly_wait(2)
    return 
