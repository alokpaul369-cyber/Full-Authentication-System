# 🔐 Full Authentication System

A production-style authentication API built with **Node.js, Express and MongoDB**, structured with controllers, services, middleware and models.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)

> 🚧 **Work in progress.** User registration is implemented. Login, JWT access/refresh tokens, email verification, password reset, roles and audit logging are being built (their models and modules are already scaffolded).

## ✨ Features

- [x] User registration with input validation
- [x] Password hashing with bcrypt
- [x] Centralised error handling (`AppError` + async handler)
- [ ] Login with JWT access & refresh tokens
- [ ] Email verification & password reset
- [ ] Role-based access control & rate limiting
- [ ] Audit logs

## 📡 API

| Method | Endpoint | Description |
|:--|:--|:--|
| `GET` | `/` | Health check |
| `POST` | `/api/auth/register` | Register a new user (`name`, `email`, `password`) |

## 📁 Project Structure

```
src/
├── config/        # database & environment config
├── controllers/   # request handlers
├── middleware/    # auth, roles, rate limit, errors
├── models/        # User, tokens, audit log
├── routes/        # auth, user, admin routes
├── services/      # business logic
└── utils/         # jwt, password, crypto helpers
```

## 🚀 Getting Started

```bash
git clone https://github.com/alokpaul369-cyber/Full-Authentication-System.git
cd Full-Authentication-System
npm install
```

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
```

Then start the server:

```bash
npm run dev
```

The server runs at **http://localhost:5000**.

---

<p align="center">Made with ❤️ by <a href="https://github.com/alokpaul369-cyber">Alok Paul</a></p>
