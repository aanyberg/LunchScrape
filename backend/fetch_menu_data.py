import httpx
from bs4 import BeautifulSoup
import json
import re
import os

JSON_PATH = "./backend/app/json/"

def text_filter(text):
    pattern = r'[\r\n]+'

    # Split the text into segments
    split_texts = [[segment for segment in re.split(pattern, text)] for text in text]

    # Flatten the list of lists into a single list
    flattened_texts = [item for sublist in split_texts for item in sublist]

    return flattened_texts


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

    print('PINCHOS:')
    for meal in meals[:6]:
        lunches.append(meal.text)
        print(f"Getting: {meal.text}")

    if not len(lunches) > 0:
        error = "Couldn't fetch the menu for Pinchos"
        print(error)
        return error

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
    
    print('SKAFFERIET:')
    for meal in meals[1:]:
       lunches.append(meal.text)
       print(f"Getting: {meal.text}")
    
    if not len(lunches) > 0:
        error = "Couldn't fetch the menu for Skafferiet"
        print(error)
        return error

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

    print('MELLBYGATANS:')
    for meal in meals:
        lunches.append(meal.text)
        print(f"Getting: {meal.text}")
    
    sorted_lunches = text_filter(lunches) # Text had to be filtered to get rid of unncesseray text that couldn't be avoided.

    if not len(sorted_lunches) > 0:
        error = "Couldn't fetch the menu for Mellbygatans."
        print(error)
        return error

    if not os.path.exists(f'{JSON_PATH}'):
        os.mkdir(f'{JSON_PATH}')
    
    with open(f'{JSON_PATH}mellbygatans.json', 'w', encoding="utf-8") as f:
        json.dump(sorted_lunches, f, indent=4)


def getVilla():
    lunches = []
    url = "https://nittontrettiofyra.se/"
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
    
    print('VILLA RESTAURANGEN:')
    for title, meal in zip(meal_titles, meals):
        lunches.append(f"{title.text}: {meal.text}")
        print(f"Getting: {title.text}: {meal.text}")

    if not len(lunches) > 0:
        error = "Couldn't fetch the menu for Villa Restaurangen."
        print(error)
        return error
    
    if not os.path.exists(f'{JSON_PATH}'):
        os.mkdir(f'{JSON_PATH}')
    
    with open(f'{JSON_PATH}villa-restaurangen.json', 'w', encoding="utf-8") as f:
        json.dump(lunches, f, indent=4)


def main():
    getMellbyGatans()
    getPinchos()
    getSkafferiet()
    getVilla()


if __name__ == "__main__":
    main()