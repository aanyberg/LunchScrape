import httpx
from bs4 import BeautifulSoup
import json
import re
import os

JSON_PATH = "./backend/app/json/"

def text_filter(text):
    # Splitting the text by \n and \r
    segments = re.split(r'[\n\r]+', text)

    # Filtering out blank or whitespace-only strings and stripping whitespace
    filtered_segments = [segment.strip() for segment in segments if segment.strip()]

    return filtered_segments

def getPinchos():
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

    if not os.path.exists(f'{JSON_PATH}'):
        os.mkdir(f'{JSON_PATH}')

    with open(f'{JSON_PATH}pinchos.json', 'w', encoding="utf-8") as f:
        json.dump(lunches, f, indent=4)


def getSkafferiet():
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

    if not os.path.exists(f'{JSON_PATH}'):
        os.mkdir(f'{JSON_PATH}')

    with open(f'{JSON_PATH}skafferiet.json', 'w', encoding="utf-8") as f:
        json.dump(lunches, f, indent=4)


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
        print('Getting: ', meal.text)
    
    sorted_lunches = text_filter(lunches[0]) # Text had to be filtered to get rid of unncesseray text that couldn't be avoided.

    if not os.path.exists(f'{JSON_PATH}'):
        os.mkdir(f'{JSON_PATH}')
    
    with open(f'{JSON_PATH}mellbygatans.json', 'w', encoding="utf-8") as f:
        json.dump(sorted_lunches[4:], f, indent=4)


def getVilla():
    lunches = []
    url = "https://nittontrettiofyra.se/lunch/"
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
    meal_titles = soup.find('div', {"class": "lunch"}).find_all("h4")
    meals = soup.find_all("div", {"class": "text-[14px]"})
    
    print('VILLA RESTAURANGEN')
    for title, meal in zip(meal_titles, meals):
        lunches.append(f"{title.text}: {meal.text}")
        print(f"Getting: {title.text}: {meal.text}")

    if not os.path.exists(f'{JSON_PATH}'):
        os.mkdir(f'{JSON_PATH}')
    
    with open(f'{JSON_PATH}villa-restaurangen.json', 'w', encoding="utf-8") as f:
        json.dump(lunches, f, indent=4)


def main():
    getPinchos()
    getSkafferiet()
    getMellbyGatans()
    getVilla()


if __name__ == "__main__":
    main()