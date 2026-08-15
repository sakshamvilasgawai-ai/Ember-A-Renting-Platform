# 🔥 Ember – Renting Platform

**Ember** is a web-based renting platform that allows users to rent items for a specific period of time instead of purchasing them. The platform is designed to make renting simple, convenient, and accessible.

Users can explore available items, view their details, and rent them according to their requirements.

## 🚀 Features

* 🏠 Browse available rental items
* 🔍 View detailed information about items
* 📦 Add and manage rental listings
* 👤 User-friendly interface
* ⏱️ Hourly-based renting system
* 📝 Create, update, and delete rental listings
* 📱 Responsive design for different screen sizes
* 🔐 User authentication and authorization
* 🗄️ Database integration using MongoDB

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* Bootstrap
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Tools

* Git & GitHub
* VS Code

## 📂 Project Structure

```text
Ember/
│
├── models/          # MongoDB models
├── routes/          # Application routes
├── controllers/     # Business logic
├── views/           # EJS templates
├── public/          # CSS, JavaScript and static files
├── middleware/      # Authentication and custom middleware
├── utils/           # Utility functions
├── app.js           # Main application file
├── package.json     # Project dependencies
└── README.md        # Project documentation
```

> The exact folder structure may vary depending on the current implementation.

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project directory

```bash
cd Ember
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

Add any other environment variables required by your implementation.

### 5. Start the application

For development:

```bash
npm run dev
```

Or:

```bash
node app.js
```

The application will run locally at:

```text
http://localhost:3000
```

## 🔄 How Ember Works

1. Users visit the Ember platform.
2. They browse available rental items.
3. Users select an item to view its details.
4. The rental duration is selected.
5. The user can proceed with the rental.
6. Rental and listing information is stored in MongoDB.

## 🎯 Project Objective

The main objective of Ember is to provide a convenient platform for **short-term renting**, allowing people to access products without having to purchase them permanently.

The platform can be useful for businesses or individuals who want to rent items on an hourly or temporary basis.

## 🔮 Future Enhancements

* Online payment integration
* Real-time item availability
* Booking and reservation system
* Rental history
* Reviews and ratings
* Location-based rental search
* Notifications and reminders
* Admin dashboard
* Image upload and cloud storage
* Advanced search and filtering

## 👩‍💻 Developer

**Nidhi Palandurkar**

B.Tech – Computer Science & Engineering (Cyber Security)

## 📄 License

This project is developed for educational and project purposes.
