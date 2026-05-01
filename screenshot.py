from playwright.sync_api import sync_playwright

def run_screenshot():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:5173/merge-tactics-vue/builds")
        page.wait_for_timeout(1000)
        page.screenshot(path="builds_page.png", full_page=True)
        browser.close()

if __name__ == "__main__":
    run_screenshot()
