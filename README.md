# 🛍️ E-Shop REST API  

## 🔧 Technologies & Tools  
- **Node.js & Express.js**
- **MongoDB & Mongoose**
- **JWT (JSON Web Token)**
- **Bcrypt.js** – Password hashing for security  

## 🚀 Features  
✅ **User Authentication:** Register, login, and secure JWT-based authentication  
✅ **Product Management:** Full **CRUD** operations (Create, Read, Update, Delete)  
✅ **Admin Panel APIs:** Manage users, products  
✅ **Filtering:** Search products by category, price, and brand  

## 🔗 API Endpoints 

### **Base URL**
- `http://localhost:5000`

### **Authentication**  
- `POST /api/auth/register` – Register a new user  
- `POST /api/auth/login` – Authenticate user

### **Users**
- `GET /api/users` – Get all users (**Admin only**)  
- `GET /api/users/find/:userID` – Get user by id (**Admin only**)  
- `DELETE /api/users/:userID` – Delete specific user  
- `PUT /api/users/:userID` – Update specific user

### **Products**  
- `GET /api/products` – Get all products  
- `GET /api/products/find/:productID` – Get product by id  
- `DELETE /api/products/:productID` – Delete specific product (**Admin only**)  
- `PUT /api/products/:productID` – Update specific product (**Admin only**)  
- `POST /api/products` – Create product (**Admin only**)  

### **Orders**  
- `GET /api/orders/income` – Get monthly income (**Admin only**)
- `GET /api/orders` – Get all orders (**Admin only**) 
- `GET /api/orders/find/:userID` – Get specific user orders
- `DELETE /api/orders/:orderID` – Delete specific order  (**Admin only**)
- `PUT /api/orders/:orderID` – Update specific order (**Admin only**)
- `POST /api/orders` – Create order

### **Cart**
- `GET /api/carts` – Get all users carts (**Admin only**)
- `GET /api/carts/find/:userID` – Get specific user cart
- `DELETE /api/carts/:cartID` – Delete cart
- `PUT /api/carts/:cartID` – Update cart
- `POST /api/carts/:cartID` – Create cart

