# Next.js Better Auth

A full-stack authentication application built with Next.js, Better Auth, and MongoDB. This project demonstrates how to implement user authentication and account recovery with a modern web development stack.

## 📸 Project Screenshot

<!-- Add a screenshot to the public folder and update the path below. -->

![Next.js Better Auth Preview](./public/images/project-preview.png)

## 🔗 Live Demo

- **Live Application:** Add your deployed application URL here.
- **GitHub Repository:** https://github.com/nabin-90/nextjs-better-auth

## ✨ Features

- **User Registration:** Create a new account.
- **User Sign In:** Authenticate with an existing account.
- **Session Management:** Manage the authenticated user's session.
- **Forgot Password:** Request a password-reset email.
- **Password Reset:** Set a new password using the reset link.
- **Email Integration:** Support for sending password-reset emails, depending on the configured email service.
- **Database Integration:** Store authentication data using MongoDB.
- **Responsive UI:** Build authentication interfaces using HeroUI and Tailwind CSS.
- **Modern Framework:** Use Next.js App Router and React to build the application.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | Full-stack React framework |
| React 19 | User interface |
| Better Auth | Authentication and session management |
| MongoDB | Database |
| MongoDB Adapter | Connect Better Auth to MongoDB |
| HeroUI | UI components |
| Tailwind CSS 4 | Styling |
| JavaScript | Application development |
| ESLint | Code linting |

## 📦 Dependencies

The project uses the following main dependencies:

### Production Dependencies

- `next` — React framework.
- `react` — UI library.
- `react-dom` — React DOM rendering.
- `better-auth` — Authentication framework.
- `@better-auth/mongo-adapter` — MongoDB integration for Better Auth.
- `mongodb` — MongoDB database driver.
- `@heroui/react` — UI components.
- `@heroui/styles` — HeroUI styles.

### Development Dependencies

- `@gravity-ui/icons` — Icon library.
- `@tailwindcss/postcss` — Tailwind CSS PostCSS integration.
- `tailwindcss` — Utility-first CSS framework.
- `eslint` — Code linting.
- `eslint-config-next` — Next.js ESLint configuration.
- `babel-plugin-react-compiler` — React Compiler integration.

See [`package.json`](./package.json) for the complete dependency list and version information.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account or another accessible MongoDB instance.

### 1. Clone the Repository

```bash
git clone https://github.com/nabin-90/nextjs-better-auth.git
```

### 2. Navigate to the Project Folder

```bash
cd nextjs-better-auth
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root.

Add the environment variables required by your Better Auth and MongoDB configuration. For example:

```env
BETTER_AUTH_SECRET=your_secure_secret
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_MONGODB_URL=your_mongodb_connection_string
```

Replace the example values with your actual configuration. Check your authentication configuration files to confirm the exact variable names used by your project.

**Security:** Never commit your `.env` file, database credentials, or authentication secrets to GitHub.

### 5. Start the Development Server

```bash
npm run dev
```

### 6. Open the Application

Visit:

[http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

The project uses the Next.js App Router structure.

```text
nextjs-better-auth/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...all]/
│   │   ├── sign-in/
│   │   ├── sign-up/
│   │   └── ...
│   └── ...
├── .gitignore
├── next.config.mjs
├── package.json
├── package-lock.json
└── README.md
```

*Note: This is a simplified overview. Refer to the repository for the complete and current folder structure.*

## 📚 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Better Auth Documentation](https://www.better-auth.com/docs)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [HeroUI Documentation](https://www.heroui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 👨‍💻 Author

**Mahmudun Nabin**

- GitHub: [@nabin-90](https://github.com/nabin-90)
- Repository: [Next.js Better Auth](https://github.com/nabin-90/nextjs-better-auth)

---

Built as a learning project to practice full-stack web development and authentication with Next.js.