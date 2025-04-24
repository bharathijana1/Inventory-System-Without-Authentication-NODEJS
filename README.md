# 📦 Inventory Management System API

A RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage an inventory of products.

---

## 🚀 Features
- Add new products
- Update existing products
- Retrieve all products
- Delete products
- Sell products (decrease quantity)

---

## 🔧 Technologies Used
- Node.js
- Express
- MongoDB (via Mongoose)
- Postman (for API testing)

---

## 📁 Endpoints

### 1. Add a New Product
```
POST /products
```
**Request Body:**
```json
{
  "name": "Product Name",
  "description": "Product Description",
  "category": "Category",
  "price": 100,
  "quantity": 10
}
```

### 2. Update a Product
```
PUT /products/:id
```
**Request Body:** (same as POST)

### 3. Get All Products
```
GET /products
```

### 4. Delete a Product
```
DELETE /products/:id
```

### 5. Sell a Product
```
POST /products/:id/sell
```
**Note:** This will reduce the product quantity by 1.

---

## 🛠️ Installation & Running

```bash
git clone https://github.com/your-username/Inventory-System-Without-Authentication-NODEJS.git
cd Inventory-System-Without-Authentication-NODEJS
code .
cd backend
npm install
npm run dev
```

Ensure MongoDB is running locally or update the connection string in `.env`.

---

## 📫 API Testing with Postman

A Postman collection is included to test all the API endpoints easily.

### ➤ Steps:
1. Open Postman.
2. Run each endpoint by selecting the appropriate request.

The collection contains:
- `POST /products` - Add a product
- `PUT /products/:id` - Update a product
- `GET /products` - Get all products
- `DELETE /products/:id` - Delete a product
- `POST /products/:id/sell` - Sell a product

---
🧪 Testing CRUD in Postman – With Examples
🔹 1. Add a Product
Method: POST
URL: http://localhost:5000/products
Body: raw → JSON
{
  "name": "Laptop",
  "description": "High-performance laptop",
  "category": "Electronics",
  "price": 1200,
  "quantity": 5
}
🔹 2. Get All Products
Method: GET
URL: http://localhost:5000/products

Response Example:
[
  {
    "_id": "661f1b4c3f276cd1e09361d2",
    "name": "Laptop",
    "description": "High-performance laptop",
    "category": "Electronics",
    "price": 1200,
    "quantity": 5
  },
  {
    "_id": "661f1b963f276cd1e09361d4",
    "name": "Phone",
    "description": "Smartphone",
    "category": "Electronics",
    "price": 800,
    "quantity": 10
  }
]
🔹 3. Update a Product
Method: PUT
URL: http://localhost:5000/products/661f1b4c3f276cd1e09361d2
(Replace with your actual product ID)

Body:
{
  "name": "Laptop Pro",
  "description": "Upgraded model",
  "category": "Electronics",
  "price": 1400,
  "quantity": 3
}
🔹 4. Delete a Product
Method: DELETE
URL: http://localhost:5000/products/661f1b4c3f276cd1e09361d2

Response Example:
{
  "message": "Product deleted successfully"
}
🔹 5. Sell a Product
Method: POST
URL: http://localhost:5000/products/661f1b963f276cd1e09361d4/sell

Response Example:
{
  "message": "Product sold successfully",
  "remainingQuantity": 9
}



## 📌 Notes
- Input validation and error handling is implemented.
- Appropriate HTTP status codes are returned.


