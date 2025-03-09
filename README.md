# Demo-book-list

![GitHub Pages Deployment](https://img.shields.io/badge/GitHub%20Pages-Deploy-success)

A simple book list management application built with React and Vite, allowing users to view, add, edit, and delete book info using fake API. This project is deployed using GitHub Pages.

Changes are faked and aren't persisted (just like JSONPlaceholder).
Requests are cached (1 minute).
Read more: https://my-json-server.typicode.com/

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Deploying to GitHub Pages](#deploying-to-github-pages)

## Demo

Check out the live demo of the project [here](https://demo-book-list-wine.vercel.app/).

## Features

- View a list of events
- Add new events
- Edit existing events
- Delete events
- Responsive design for mobile and desktop

## Tech Stack

- **Frontend:**

  - React
  - TypeScript
  - Vite
  - React Router
  - SCSS Modules

- **Backend:**
  - fakeAPI (used for simulating API requests) https://my-json-server.typicode.com/

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

   \`\`\`bash
   git clone https://github.com/vi7ality/demo-book-list.git
   cd demo-book-list
   \`\`\`

2. **Install dependencies:**

   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server:**

   \`\`\`bash
   npm run dev
   \`\`\`

   Your app should now be running on [http://localhost:5173](http://localhost:5173).

## Scripts

- **\`npm run dev\`**: Starts the development server.
- **\`npm run build\`**: Builds the app for production.
- **\`npm run preview\`**: Previews the production build locally.
- **\`npm run deploy\`**: Deploys the build to GitHub Pages.
