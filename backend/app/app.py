from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
import json

from app.dependencies import readMellbygatans, readSkafferiet, readPinchos, readVillaRestaurangen


app = FastAPI()
handler = Mangum(app)

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/api/menus")
async def menus():
    mellbygatans = readMellbygatans()
    skafferiet = readSkafferiet()
    pinchos = readPinchos()
    villa_restaurangen = readVillaRestaurangen()
    restaurant_menus = {"mellbygatans": mellbygatans, "skafferiet": skafferiet, "pinchos": pinchos, "villa_restaurangen": villa_restaurangen}

    return json.dumps(restaurant_menus, ensure_ascii=False, indent=2)

