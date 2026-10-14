# 🌟 Ravi Sharma — Personal Portfolio & Showcase

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.1-black?style=for-the-badge&logo=framer&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern, high-performance personal portfolio web application built with **Next.js 16**, **React 19**, **Tailwind CSS**, and **Framer Motion**. Designed with fluid micro-interactions, dark/light theme switching, smooth momentum scrolling, and full-stack backend integrations for contact management and visitor analytics.

[Explore Demo](https://github.com/raviii26) • [Report Bug](https://github.com/raviii26/portfolio/issues) • [Request Feature](https://github.com/raviii26/portfolio/issues)

</div>

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
  - [Running the App](#running-the-app)
- [Admin Dashboards](#-admin-dashboards)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Scripts](#-scripts)
- [Contributing](#-contributing)
- [Author & Connect](#-author--connect)

---

## ✨ Features

- **🎨 Modern Aesthetic & Dark Mode**: Seamless toggle between light and dark themes with system preference detection and localStorage persistence.
- **⚡ Next.js 16 App Router & Turbopack**: Blazing fast server-rendered and statically optimized pages.
- **🌊 Lenis Smooth Scrolling**: Luxury momentum-based scroll experience with synchronized header navigation.
- **🎭 Rich Animations**: Interactive role-typing hero, page reveal transitions, floating tech badges, and hover micro-interactions powered by Framer Motion.
- **💼 Comprehensive Sections**:
  - **Hero**: Dynamic animated roles with status indicator.
  - **About**: Journey, engineering mindset, and tech toolkit.
  - **Skills**: Categorized frontend, backend, database, and devops stack.
  - **Education & Experience**: Structured career progression and academic milestones.
  - **Featured Projects**: Interactive showcases with direct source code and live links.
  - **Services**: Full-stack web engineering, UI/UX architecture, and cloud deployment.
  - **Contact**: Interactive contact form with validation, confetti celebration, and email dispatch.
- **📊 Visitor Analytics & Contact Backend**:
  - MySQL database persistence for contact form queries and page visits.
  - Automated email dispatches via Nodemailer.
  - Built-in administration views at `/admin/contacts` and `/admin/logs`.

---

## 🛠 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Frontend Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/), CSS Modules, PostCSS |
| **Animations** | [Framer Motion](https://www.framer.com/motion/), [Lenis](https://lenis.darkroom.engineering/), [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) |
| **Database** | [MySQL](https://www.mysql.com/) via `mysql2/promise` |
| **Email Service** | [Nodemailer](https://nodemailer.com/) |
| **CI / CD** | GitHub Actions |

---

## 📂 Project Architecture

```plaintext
nextjs/
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions CI pipeline
├── app/
│   ├── admin/
│   │   ├── contacts/          # Admin view for contact submissions
│   │   └── logs/              # Admin view for visitor analytics
│   ├── api/
│   │   ├── contact/           # Contact form POST handler
│   │   ├── contacts/          # Contact submissions GET handler
│   │   ├── log-visit/         # Visitor logging POST endpoint
│   │   └── visitor-logs/      # Visitor logs retrieval API
│   ├── globals.css            # Global CSS styles & Tailwind directives
│   ├── layout.js              # Root layout & font configuration
│   └── page.js                # Main portfolio page entry
├── components/
│   ├── animations/            # Lenis scroll, Preloader, Page reveal
│   ├── layout/                # EstateNavbar, Header, Footer
│   ├── sections/              # About, Skills, Education, Experience, Projects, Services, Contact
│   └── shared/                # VisitorTracker & shared widgets
├── public/
│   └── assets/                # Logos, tech icons, profile graphics
├── .env.example               # Template environment configuration
├── eslint.config.mjs          # Flat ESLint configuration
├── next.config.mjs            # Next.js build and image optimization settings
├── package.json               # Dependencies and build scripts
└── tailwind.config.js         # Tailwind theme & design tokens
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v20.x` or higher
- **npm**: `v10.x` or higher
- **MySQL**: `v8.x` or equivalent cloud instance

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/raviii26/portfolio.git
   cd portfolio/nextjs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Environment Variables

Copy the example configuration to `.env.local`:

```bash
cp .env.example .env.local
```

Open `.env.local` and customize the variables:

```env
# Database Credentials
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_database_password
DB_NAME=portfolio_db

# Email Notification Service (Gmail App Password)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-google-app-password
```

### Database Setup

Run the following SQL script in your MySQL instance to initialize the required tables:

```sql
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Contacts Table
CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Visitor Logs Table
CREATE TABLE IF NOT EXISTS visitor_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ip_address VARCHAR(100),
  user_agent TEXT,
  visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Running the App

Start the development server with Turbopack:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔒 Admin Dashboards

The repository includes protected administration routes:

- **Contact Inquiries**: `/admin/contacts` — View received messages, timestamps, and sender details.
- **Visitor Logs**: `/admin/logs` — Monitor website traffic and client user-agents.

---

## 🔄 CI/CD Pipeline

A continuous integration workflow is configured via [GitHub Actions](.github/workflows/ci.yml). Every push or pull request to `main` executes:

1. Environment checkout (`ubuntu-latest`, Node.js 20)
2. Clean dependency installation (`npm ci`)
3. Code linting (`npm run lint`)
4. Production compilation test (`npm run build`)

---

## 📜 Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches development server with Turbopack on `http://localhost:3000` |
| `npm run build` | Builds optimized production bundle |
| `npm run start` | Starts production server |
| `npm run lint` | Runs ESLint analysis |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/raviii26/portfolio/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author & Connect

**Ravi Sharma** — *Full-Stack Software Developer*

- **GitHub**: [@raviii26](https://github.com/raviii26)
- **LinkedIn**: [Ravi Sharma](https://linkedin.com/in/ravisharma2610)
- **X (Twitter)**: [@Ravii2610](https://x.com/Ravii2610)

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
