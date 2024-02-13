import json

MELLBYGATANS_JSON = 'backend/app/json/mellbygatans.json'
SKAFFERIET_JSON = 'backend/app/json/skafferiet.json'
PINCHOS_JSON = 'backend/app/json/pinchos.json'
VILLARESTAURANGEN_JSON = 'backend/app/json/villa-restaurangen.json'

    
def readMellbygatans():
    with open(MELLBYGATANS_JSON, 'r', encoding='utf-8') as file:
        menu_data = json.load(file)
    
    menu_items = []
    for item in menu_data:
        menu_items.append(item)
    
    return {"mellbygatans": menu_items}


readMellbygatans()

