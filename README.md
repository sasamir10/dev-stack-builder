# Dev Stack Builder

Dev Stack Builder is a responsive React application for exploring development technologies and building a personalized technology stack. Users can browse technologies, add them to a stack, remove selections, and receive clear feedback through toast notifications.

## 🌐 Live Demo

[View the deployed project](https://dev-stack-brown-one.vercel.app/)

## 📸 Preview

![Dev Stack Builder preview](./public/project-preview.png)

## ✨ Features

- Responsive sticky navigation with a mobile menu
- Hero section with a shared cyan-to-blue-to-fuchsia brand gradient
- Technology data loaded from `public/technologies.json`
- Responsive technology grid: one column on mobile, two on tablet, and three on desktop
- Technology cards with category, difficulty, rating, badge, and icon details
- "Your Stack" panel for selected technologies
- Add, remove, and remove-all stack actions
- Duplicate-selection protection
- React-Toastify notifications with auto-close progress indicators
- Loading and error states for technology data
- Responsive footer and Vercel production deployment

## 🛠️ Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React-Toastify
- Lucide React

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js 20 or later
- npm

### 💻 Installation

```bash
git clone <your-repository-url>
cd dev-stack-builder-website
npm install
```

### ▶️ Run Locally

```bash
npm run dev
```

Open the local URL displayed by Vite, usually `http://localhost:5173`.

## 📜 Available Scripts

```bash
npm run dev       # Start the local development server
npm run build     # Type-check and build the production bundle
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## 📂 Project Structure

```text
src/
  assets/          # Brand and hero images
  components/      # Reusable UI components
  types/           # TypeScript interfaces
  App.tsx          # Application composition
  index.css        # Global styles and shared brand theme
public/
  technologies.json # Technology data loaded by the application
```

## ▲ Deployment

The project is deployed on Vercel. Push changes to the `main` branch to trigger an automatic production deployment.

## 👤 Author

Sabbir Ahmed
