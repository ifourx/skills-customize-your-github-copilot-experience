# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Learn how to build a REST API using the FastAPI framework, including route definitions, request handling, and CRUD operations with Pydantic models.

## 📝 Tasks

### 🛠️ Set Up FastAPI and Create Basic Endpoints

#### Description
Install FastAPI and Uvicorn, create a FastAPI application instance, and define basic GET endpoints that return simple messages.

#### Requirements
Completed program should:

- Install `fastapi` and `uvicorn` using pip
- Create a FastAPI app instance in a file named `main.py`
- Define a GET endpoint at `/` that returns a welcome message
- Define a GET endpoint at `/health` that returns `{"status": "ok"}`
- Run the application with `uvicorn main:app --reload` and verify both endpoints respond correctly

### 🛠️ Use Path Parameters, Query Parameters, and Request Bodies

#### Description
Add endpoints that accept dynamic input through path parameters, query parameters, and JSON request bodies using Pydantic models.

#### Requirements
Completed program should:

- Define a GET endpoint `/items/{item_id}` that accepts a path parameter and returns item details
- Define a GET endpoint `/search` that accepts query parameters (e.g., `q`, `max_results`) and returns filtered results
- Create a Pydantic model `Item` with fields: `id: int`, `name: str`, `price: float`, `in_stock: bool`
- Define a POST endpoint `/items` that accepts an `Item` JSON body and returns the created item
- Example request:
  ```json
  POST /items
  {"id": 1, "name": "Laptop", "price": 999.99, "in_stock": true}
  ```

### 🛠️ Implement In-Memory CRUD Operations

#### Description
Build a complete set of CRUD (Create, Read, Update, Delete) endpoints that store items in an in-memory dictionary.

#### Requirements
Completed program should:

- Use a Python dictionary as an in-memory data store for items
- Implement `GET /items` to return a list of all items
- Implement `GET /items/{item_id}` to return a single item by ID (return 404 if not found)
- Implement `POST /items` to create a new item and add it to the store
- Implement `PUT /items/{item_id}` to update an existing item's fields
- Implement `DELETE /items/{item_id}` to remove an item and return a confirmation message
- Return appropriate HTTP status codes for each operation (201 for create, 200 for success, 404 for not found)
- Use your `Item` Pydantic model with an additional `ItemUpdate` model for partial updates
