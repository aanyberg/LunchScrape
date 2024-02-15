from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Union
import json

from dependencies import readMellbygatans


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

@app.get("/api")
async def root():
    mellbygatans = readMellbygatans()
    skafferiet = "./json/skafferiet.json"
    pinchos = "./json/pinchos.json"
    villa_restaurangen = "./json/villa-restaurangen.json"

    return {"restaurants": {
        "mellbygatans": mellbygatans
    }}

