import json

MELLBYGATANS_JSON = 'backend/app/json/mellbygatans.json'
SKAFFERIET_JSON = 'backend/app/json/skafferiet.json'
PINCHOS_JSON = 'backend/app/json/pinchos.json'
VILLARESTAURANGEN_JSON = 'backend/app/json/villa-restaurangen.json'


class LunchMenu():
    def __init__(self) -> None:
        pass

    
def readMellbygatans():
    with open(MELLBYGATANS_JSON, 'r', encoding='utf-8') as file:
        menu_data = json.load(file)
    for item in menu_data:
        print(item)


