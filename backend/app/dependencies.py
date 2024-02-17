import json

MELLBYGATANS_JSON = 'app/json/mellbygatans.json'
SKAFFERIET_JSON = 'app/json/skafferiet.json'
PINCHOS_JSON = 'app/json/pinchos.json'
VILLARESTAURANGEN_JSON = 'app/json/villa-restaurangen.json'

    
def readMellbygatans():
    with open(MELLBYGATANS_JSON, 'r', encoding='utf-8') as file:
        menu_data = json.load(file)
    
    menu_items = []
    for item in menu_data:
        menu_items.append(item)

    return menu_items

def readSkafferiet():
    with open(SKAFFERIET_JSON, 'r', encoding='utf-8') as file:
        menu_data = json.load(file)
    
    menu_items = []
    for item in menu_data:
        menu_items.append(item)

    return menu_items

def readPinchos():
    with open(PINCHOS_JSON, 'r', encoding='utf-8') as file:
        menu_data = json.load(file)
    
    menu_items = []
    for item in menu_data:
        menu_items.append(item)

    return menu_items

def readVillaRestaurangen():
    with open(VILLARESTAURANGEN_JSON, 'r', encoding='utf-8') as file:
        menu_data = json.load(file)
    
    menu_items = []
    for item in menu_data:
        menu_items.append(item)

    return menu_items
