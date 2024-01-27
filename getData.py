import httpx
from bs4 import BeautifulSoup
import json


def getPinchosLunches():
    lunches = []
    url = "https://rskrapan.se/"
    headers = {"User-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" }
    
    try:
        r = httpx.get(url, headers=headers)
        r.raise_for_status()
    except httpx.HTTPStatusError as e:
        print(f"HTTP error occurred: {e}")
        return
    except httpx.RequestError as e:
        print(f"An error occurred while requesting {e.request.url!r}.")
        return
    
    soup = BeautifulSoup(r.text, 'html.parser')
    meals = soup.find('div', {"class": "main-page"}).find_all('h3')

    print('PINCHOS')
    for meal in meals[:6]:
        lunches.append(meal.text)
        print('Getting:',meal.text)

    with open('pinchos-lunches.json', 'w') as f:
        json.dump(lunches, f)


def getSkafferietLunches():
    lunches = []
    url = "https://www.skafferietlidkoping.se/"
    headers = {"User-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" }
    
    try:
        r = httpx.get(url, headers=headers)
        r.raise_for_status()
    except httpx.HTTPStatusError as e:
        print(f"HTTP error occurred: {e}")
        return
    except httpx.RequestError as e:
        print(f"An error occurred while requesting {e.request.url!r}.")
        return
    
    soup = BeautifulSoup(r, 'html.parser')
    meals = soup.find('div', {"class": "postdiv"}).find_all('h6')
    
    print('SKAFFERIET')
    for meal in meals[3:]:
       lunches.append(meal.text)
       print("Getting:", meal.text)

    with open('skafferiet-lunches.json', 'w') as f:
        json.dump(lunches, f)


def getMellbyGatans():
    lunches = []
    url = "https://www.mellbygatans.se/sv/default"
    headers = {"User-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" }

    try:
        r = httpx.get(url, headers=headers)
        r.raise_for_status()
    except httpx.HTTPStatusError as e:
        print(f"HTTP error occurred: {e}")
        return
    except httpx.RequestError as e:
        print(f"An error occurred while requesting {e.request.url!r}.")
        return
        
    soup = BeautifulSoup(r, 'html.parser')
    meals = soup.find('div', {"class": "week-menu"}).find_all("p")
    
    print('MELLBYGATANS')
    for meal in meals:
       lunches.append(meal.text)
       print("Getting:", meal.text)

    with open('mellbygatans-lunches.json', 'w', encoding="utf-8") as f:
        json.dump(lunches, f,indent=4)

def main():
    getMellbyGatans()

if __name__ == "__main__":
    main()