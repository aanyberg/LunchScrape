from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Union
import json

from app.dependencies import readMellbygatans


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/api/mellbygatans")
async def root():
    mellbygatans = readMellbygatans()

    restaurant_menus = {"restaurants": {"mellbygatans": mellbygatans}}

    return json.dumps(restaurant_menus, ensure_ascii=False, indent=2)

