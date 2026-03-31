# 🛒 E-Commerce Web App

A simple and scalable e-commerce web application built using **HTML, CSS, and JavaScript**.  
This project demonstrates core online shopping features like product listing, cart management, and admin control.

---

## 📁 Project Structure

```
ecommerce/
│
├── index.html
├── shop.html
├── cart.html
├── checkout.html
│
├── admin/
│   ├── dashboard.html
│   ├── products.html
│   ├── orders.html
│   └── users.html
│
└── assets/
    ├── css/
    │   └── styles.css
    │
    ├── js/
    │   ├── customer/
    │   │   ├── cart.js
    │   │   ├── shop.js
    │   │   └── checkout.js
    │   │
    │   ├── admin/
    │   │   ├── dashboard.js
    │   │   ├── products.js
    │   │   └── orders.js
    │   │
    │   └── shared/
    │       ├── auth.js
    │       ├── api.js
    │       └── utils.js
    │
    ├── data/
    │   └── products.json
    │
    ├── images/
    └── icons/
```

---

## 🚀 Features

### 👤 Customer Features
- View products
- Add products to cart
- Update cart quantity
- Checkout system
- Responsive UI

### 🛠️ Admin Features
- Admin dashboard
- Manage products
- View orders
- Manage users

### 🔄 Shared Features
- Authentication system
- API handling (future-ready)
- Utility functions

---

## 🧠 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## ⚙️ How to Run the Project

1. Clone or download the project
2. Open the folder in VS Code
3. Use Live Server Extension or any local server
4. Open `index.html` in your browser

---

## 📦 Data Handling

- Product data is stored in:
  ```
  assets/data/products.json
  ```
- Data is fetched using:
  ```javascript
  fetch('assets/data/products.json')
  ```

---

## 🔐 User Roles

### Customer
- Browse and purchase products

### Admin
- Manage products, users, and orders

---

## 🔮 Future Improvements

- Backend integration (Node.js / Express)
- Payment gateway (Paystack / Flutterwave)
- User authentication with database
- Order tracking system
- Vendor (multi-seller) support

---

## 💡 Notes

- Ensure you run the project on a local server (not `file://`)
- Keep assets organized inside the `assets/` folder
- Separate admin and customer logic for scalability

---

## 👨‍💻 Author

Built as a learning project for understanding e-commerce systems and frontend architecture.

---

## 📄 License

This project is open-source and free to use for learning purposes.