# 🧠 Personal Website Backend

This is the **backend API** for my personal website — built with **Node.js**, **Express**, **TypeScript**, **Sequelize ORM**, and **MySQL**.  
It powers my personal page and CV website, providing RESTful APIs for personal details, education, work experience, skills, projects, and authentication.

---

## 🚀 Tech Stack

- **Node.js** — JavaScript runtime environment  
- **Express.js** — Web application framework  
- **TypeScript** — Type-safe JavaScript  
- **Sequelize ORM** — MySQL ORM for easier database management  
- **MySQL** — Relational database  
- **JWT (JSON Web Token)** — Secure authentication  
- **dotenv** — Environment variable management  
- **Nodemon + ts-node** — Development tooling  

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.ts                 # Sequelize connection setup
│   ├── controllers/              # Route controllers (e.g., AuthController)
│   │   └── AuthController.ts
│   ├── models/                   # Sequelize models (User, Project, etc.)
│   ├── routes/                   # Route definitions
│   ├── services/                 # Business logic between controllers and models
│   ├── middleware/               # Authentication & validation middlewares
│   ├── utils/                    # Helper utilities (e.g., JWT functions)
│   ├── app.ts                    # Express app initialization
│   └── server.ts                 # Application entry point
│
├── package.json
├── tsconfig.json
├── .env
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/afiffakhri/personal-website-backend.git
cd personal-website-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root folder with the following content:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=personal_website
JWT_SECRET=your_jwt_secret
```

---

## 🗄️ Database Setup (MySQL)

Make sure MySQL is running locally or remotely and create a database:
```sql
CREATE DATABASE personal_website;
```

Sequelize will automatically sync models when you run the app.

You can also create a custom sync script (`npm run db:sync`) to force sync models:
```bash
npm run db:sync
```

---

## 🔐 Authentication (JWT)

This backend uses **JSON Web Tokens** for user authentication.

### Endpoints
| Method | Endpoint | Description |
|---------|-----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Authenticate and return a JWT token |

### Protected Routes
For routes that require authentication, include the token in the request header:

```
Authorization: Bearer <your_token_here>
```

---

## 🧩 Models Overview

| Table | Description | Relationship |
|--------|--------------|--------------|
| `users` | Stores user login info | One-to-Many with all other tables |
| `personal_details` | Stores profile info (name, bio, etc.) | `user_id` foreign key |
| `educations` | Education history | `user_id` foreign key |
| `works` | Work experience | `user_id` foreign key |
| `projects` | Portfolio projects | `user_id` foreign key |
| `skills` | Skill list | `user_id` foreign key |
| `languages` | Language proficiency | `user_id` foreign key |

---

## 🧠 API Example: AuthController

```typescript
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

export const register = async (req: Request, res: Response) => {
	try {
		const { username, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = await User.create({ username, email, password: hashedPassword });
		res.status(201).json({ message: 'User registered successfully', user: newUser });
	} catch (error) {
		res.status(500).json({ error: 'Registration failed' });
	}
};

export const login = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ where: { email } });

		if (!user) return res.status(404).json({ error: 'User not found' });
		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) return res.status(401).json({ error: 'Invalid password' });

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
		res.json({ message: 'Login successful', token });
	} catch (error) {
		res.status(500).json({ error: 'Login failed' });
	}
};
```

---

## 🧰 Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Run development server with `ts-node` and `nodemon` |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run the compiled app (`dist` folder) |
| `npm run lint` | Run linting |
| `npm run db:sync` | Sync Sequelize models with MySQL database |

---

## 🧪 Testing the API

You can use **Postman**, **Insomnia**, or **curl** to test the API.  
Example:
```bash
curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{"email":"test@example.com", "password":"123456"}'
```

---

## 🌍 Deployment

When deploying (e.g., to Render, Vercel, or Railway):

1. Make sure the `.env` variables are set correctly in your hosting environment.  
2. Run `npm run build` before deployment.  
3. Use `npm start` as the startup command.  

---

## 🧩 Future Enhancements

- Add file uploads (for profile or project images)
- Add contact form endpoint
- Add pagination and filtering for project list
- Integrate email notifications (Nodemailer)
- Add admin dashboard with stats
- Write unit tests with Jest

---

## 👨‍💻 Author

**Afif Fakhri**  
[GitHub](https://github.com/afiffakhri) • [LinkedIn](https://linkedin.com/in/afiffakhri) • [Twitter / X](https://x.com/afif_fakhri) • [Website (Coming Soon)](https://afiffakhri.dev)

---

## 📝 License

This project is licensed under the **MIT License** — feel free to use, modify, and build upon it.
