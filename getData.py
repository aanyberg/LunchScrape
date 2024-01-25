import httpx
from bs4 import BeautifulSoup
import json


def getPinchosLunches():
    lunches = []
    url = "https://rskrapan.se/"
    headers = {"User-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" }
    r = httpx.get(url, headers=headers)
    
    soup = BeautifulSoup(r.text, 'html.parser')
    meals = soup.find('div', {"class": "main-page"}).find_all('h3')

    for meal in meals:
        lunches.append(meal.text)
        print('Getting:',meal.text)

    with open('pinchos-lunches.json', 'w') as f:
        json.dump(lunches, f)


def main():
    url = "https://www.skafferietlidkoping.se/"
    headers = {"User-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" }
    

if __name__ == "__main__":
    main()