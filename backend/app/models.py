import json

MELLBYGATANS_JSON = './json/mellbygatans.json'
SKAFFERIET_JSON = './json/skafferiet.json'
PINCHOS_JSON = './json/pinchos.json'
VILLARESTAURANGEN_JSON = './json/villa-restaurangen.json'


def readMellbygatans():
    with open(MELLBYGATANS_JSON, 'r', encoding='utf-8') as file:
        menu_data = json.load(file)
    for item in menu_data:
        print(item)

