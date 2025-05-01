
# 🌍 Wanderlust - Travel Destination Listing & Review Platform

**Wanderlust** is a full-stack MERN (MongoDB, Express.js, React, Node.js) web application that allows users to discover, list, and review travel destinations. It serves as a community-driven platform to help travelers find amazing places and read honest user feedback.

---

## ✨ Features

- 🌐 Browse and search travel destinations  
- 🗺️ View each destination on an interactive map (auto-imported using location data)  
- ➕ Add new locations with images, descriptions, travel tips, and geolocation  
- ✏️ Edit and delete your own posts and reviews  
- ⭐ Review and rate places  
- 👤 User registration and login (JWT-based authentication)  
- 🔐 Sign in with Google using GoogleOAuth
- 🛡️ Protected routes and role-based access (admin/user)  
- 📸 Optional image uploads with Cloudinary  
  

---

## 🛠️ Tech Stack

- **Frontend:** ejs, Axios, React Router, Html, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Authentication:** JWT,GoogleOAuth, bcrypt  
- **Other:** dotenv, Cloudinary (optional), Multer  

---
 

---

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/Brijesh80/Wanderlust.git
cd wanderlust
```

2. Setup the Backend
```bash
npm i
```
3. Create a .env file:
```env
CLOUD_NAME="place your value"
CLOUD_API_KEY="place your value"
CLOUD_API_SECRET="place your value"
MAP_TOKEN="place your value"
GOOGLE_CLIENT_ID="place your value"
GOOGLE_CLIENT_SECRET="place your value"
GOOGLE_CALLBACK_URL=http://localhost:3003/auth/google/callback
MONGO="place your value"
```
4. Start the backend server:
```
nodemon app.js
```
Visit [http://localhost:3003](http://localhost:3003) in your browser to view the application.


## Screenshots

![Screenshot 2025-04-30 194749](https://github.com/user-attachments/assets/8b1e0cfa-13ec-4d20-846e-c43d8080f8f7)
![Screenshot 2025-04-30 194817](https://github.com/user-attachments/assets/d717f0bd-51c2-4c49-bca1-16ffd9965494)
![Screenshot 2025-04-30 194844](https://github.com/user-attachments/assets/4058b157-0a04-425a-b080-998c304edbe1)
![Screenshot 2025-04-30 195406](https://github.com/user-attachments/assets/581a2e54-29b3-4e94-97a0-4a60317827b1)
![Screenshot 2025-04-30 195451](https://github.com/user-attachments/assets/787d5823-e9b3-4274-b0de-1753820dea76)
![Screenshot 2025-04-30 195520](https://github.com/user-attachments/assets/c5d69127-f8c1-41b6-b5bc-281b60dc6419)

## 📄 License

MIT License — feel free to use, fork, and contribute!

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---







