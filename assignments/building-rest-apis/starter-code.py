# Starter Code for Building REST APIs with FastAPI

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="Item API", version="1.0.0")

# In-memory data store
# TODO: Initialize an empty dictionary to store items
# items_db = {}


class Item(BaseModel):
    id: int
    name: str
    price: float
    in_stock: bool


class ItemUpdate(BaseModel):
    name: str | None = None
    price: float | None = None
    in_stock: bool | None = None


# ── Basic Endpoints ──────────────────────────────────────────────

# TODO: Define GET / that returns a welcome message
# @app.get("/")
# async def root():
#     return {"message": "Welcome to the Item API"}

# TODO: Define GET /health that returns {"status": "ok"}


# ── Query and Path Parameters ────────────────────────────────────

# TODO: Define GET /items/{item_id} that returns item details
# TODO: Define GET /search that accepts ?q= and ?max_results= query params


# ── CRUD Endpoints ───────────────────────────────────────────────

# TODO: Implement GET /items to return a list of all items

# TODO: Implement POST /items to create a new item (return 201)

# TODO: Implement GET /items/{item_id} to return a single item (return 404 if not found)

# TODO: Implement PUT /items/{item_id} to update an existing item

# TODO: Implement DELETE /items/{item_id} to remove an item
