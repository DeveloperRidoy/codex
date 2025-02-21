# Codex

A **browser-based code editor** for HTML, CSS, and JavaScript, built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Inspired by CodePen, Codex provides collapsible and resizable editor panels, real-time previews, and the ability to download your complete code as an HTML file.

## Table of Contents
1. [Features](#features)  
2. [Live Demo](#live-demo)  
3. [Getting Started](#getting-started)  
   - [1. Clone the Repository](#1-clone-the-repository)  
   - [2. Install Dependencies](#2-install-dependencies)  
   - [3. Run the Development Server](#3-run-the-development-server)  
   - [4. Create a Production Build](#4-create-a-production-build)  
4. [Usage](#usage)  
5. [Issue Tracking](#issue-tracking)  
6. [Wiki](#wiki)  
7. [License](#license)  
8. [Contributing](#contributing)  
9. [Author](#author)

---

## Features
- **Collapsible & Resizable Panels** for HTML, CSS, and JavaScript.  
- **Live Preview** of your code as you type.  
- **Download** the entire project as a self-contained `.html` file.  
- **Customizable Head Tags**: Easily add `<title>`, meta tags, or external libraries (CSS/JS).  
- **Fullscreen Mode** for an immersive coding experience.  
- **Fully Responsive**, built with Tailwind CSS.  
- **Type-Safe** development environment using TypeScript.

---

## Live Demo
A live version of Codex is hosted at:  
[**codex-1.vercel.app**](https://codex-1.vercel.app)

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/DeveloperRidoy/codex.git
cd codex
2. Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Run the Development Server
bash
Copy
Edit
npm run dev
# or
yarn dev
Then open http://localhost:3000 in your browser to view Codex.

4. Create a Production Build
bash
Copy
Edit
npm run build
npm run start
This will optimize Codex for production, typically served at http://localhost:3000.

Usage
Write Code: Type or paste your HTML, CSS, and JavaScript into the respective editor panels.
Live Preview: See immediate updates in the preview panel on the right side.
Custom Head Tags: Click on Settings to update <title>, add meta tags, or link external CSS/JS libraries.
Download: Use the Download button to export your code into a single .html file.
Fullscreen Mode: Expand any editor panel for a more focused coding experience.
Issue Tracking
Found a bug, want a new feature, or have a question?
Please open an issue in our Issue Tracker.

Feel free to submit a pull request if you have a fix or enhancement in mind!

Wiki
Check out our Wiki for deeper insights into:

Project architecture
Source control choice and reasoning
Additional usage and developer tips
License
This project is licensed under the MIT License.

Why MIT?
We chose the MIT License because it’s short, permissive, and allows for broad usage. Anyone can freely use, modify, distribute, and contribute to this project under very minimal restrictions.

Contributing
Fork this repository.
Create a new branch:
bash
Copy
Edit
git checkout -b feature/my-new-feature
Commit your changes:
bash
Copy
Edit
git commit -m 'Add a feature'
Push to the branch:
bash
Copy
Edit
git push origin feature/my-new-feature
Open a Pull Request describing the changes.
Contributions, suggestions, and feedback are all welcome!

Author
DeveloperRidoy

Feel free to reach out if you have any questions or suggestions for improving Codex!
