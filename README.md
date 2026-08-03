# Abhiraj Portfolio

A responsive, single-page developer portfolio website designed to showcase professional experience, projects, skills, education, and technical blogs. Built using clean semantic HTML5, modular CSS3 layouts, and dynamic vanilla JavaScript modules, this project functions as a lightweight and performant web platform for recruiters, hiring managers, and other developers.

The site is built entirely with vanilla frontend technologies to maintain high rendering performance, minimize bundle sizes, and demonstrate foundational JavaScript and CSS architecture principles.

---

## Features

- **Responsive Architecture**: Fluid grid layouts and CSS media queries ensure the application renders cleanly across desktop, tablet, and mobile displays.
- **Glassmorphism Design**: Modern, high-contrast dark theme user interface leveraging CSS backdrop filters and smooth gradient shadows.
- **Dynamic Content Injection**: UI components such as projects, skills, educational milestones, and blog posts are loaded asynchronously from local JSON data files.
- **Hero Animation**: Interactive background canvas overlay powered by Particles.js with synchronized typing carousels using Typed.js.
- **Scroll & Hover Effects**: Hardware-accelerated 3D tilt effects on featured cards via VanillaTilt.js, combined with scroll-triggered content entry transitions using ScrollReveal.
- **Direct Mail Integration**: Secure form submission to send messages directly from the frontend to a personal mailbox using the EmailJS API.
- **Resume Download**: Direct access to a locally hosted PDF resume from the header navigation and hero CTA button.
- **Scroll Utilities**: Dedicated custom cursor design, asynchronous page loaders, and a smooth scroll-to-top feature.

---

## Tech Stack

- **Core**: HTML5, CSS3, JavaScript (ES6 Modules)
- **Data Representation**: JSON schemas
- **Integrations**: EmailJS API (for backend-less form submission)
- **UI Libraries**: Particles.js, Typed.js, ScrollReveal, VanillaTilt.js, Font Awesome (for icons)
- **Structural Philosophy**: Built without heavy UI frameworks or utility packages (No React, No Bootstrap, No Tailwind CSS, and No jQuery for core UI manipulation).

---

## Folder Structure

Below is the directory structure detailing the modular layout of styles, scripts, and data sources:

```text
portfolio_main/
├── index.html                  # Main landing page entry point
├── 404.html                    # Fallback page for unmatched routing
├── skills.json                 # Core local data mapping technical skill badges
├── data/                       # Configured JSON schemas for dynamic content
│   ├── blog.json               # Blog posts configuration data
│   ├── education.json          # Academic achievements metadata
│   ├── experience.json         # Corporate/professional work log data
│   └── projects.json           # Catalog of featured project showcase cards
├── assets/                     # Visual and logical assets
│   ├── css/                    # Modular stylesheets
│   │   ├── style.css           # Core stylesheet orchestrating all sub-imports
│   │   ├── base/               # Global setup and design tokens (variables, resets, typography)
│   │   ├── components/         # Reusable component-specific stylings (buttons, loader, cursor)
│   │   └── layout/             # Section-specific styles (hero, navbar, projects, contact)
│   ├── images/                 # Image directories and graphics
│   │   ├── blog/               # Featured blog banner assets
│   │   ├── education/          # Academic branding graphics
│   │   ├── experience/         # PDF resume file and workspace imagery
│   │   ├── projects/           # Screenshots of portfolio projects
│   │   └── skills/             # Vector icons for technology stacks
│   └── js/                     # Application logic scripts
│       ├── core/               # Critical runtime configuration and bootstrappers
│       │   ├── api.js          # Unified service class managing JSON database fetches
│       │   ├── app.js          # Initialization pipeline running on page load
│       │   └── common.js       # Window event listeners, navigation states, and ScrollReveal configs
│       ├── modules/            # UI components and layout renderer files
│       │   ├── blog.js         # Parses blog.json and builds sliders
│       │   ├── contact.js      # Handles EmailJS hooks and form validation
│       │   ├── cursor.js       # Controls custom cursor trail tracker
│       │   ├── education.js    # Renders academic credentials
│       │   ├── experience.js   # Builds the interactive resume timeline
│       │   ├── home.js         # Sets up Particles.js and Typed.js arrays
│       │   ├── loader.js       # Manages screen preloader transitions
│       │   ├── projects.js     # Dynamically builds and filters project catalog
│       │   └── skills.js       # Pulls and displays tech stack badges
│       └── vendor/             # Static copies of third-party runtime files
│           └── particles.min.js
└── experience/                 # Subdirectory containing standalone profile pages
    ├── index.html              # Standalone resume subpage
    ├── script.js               # Subpage execution controller
    └── style.css               # Isolated subpage presentation styles
```

---

## How to Run Locally

Because the application fetches localized data (such as JSON arrays in `data/` and `skills.json`) using JavaScript `fetch()` API, running files directly using the `file://` protocol in the browser will result in CORS (Cross-Origin Resource Sharing) blockages. To view the website locally, run it using a local HTTP server.

### 1. Clone the repository
```bash
git clone https://github.com/abhirajkr16/Abhiraj_portfolio.git
cd Abhiraj_portfolio
```

### 2. Launch a Local Development Server
Use one of the following methods to start the server:

* **VS Code Live Server (Recommended)**:
  Open the project directory in Visual Studio Code, then click the **Go Live** button in the status bar at the bottom right.

* **Python 3**:
  ```bash
  python -m http.server 8000
  ```
  Open `http://localhost:8000` in your browser.

* **Node.js (Using http-server package)**:
  ```bash
  npx http-server -p 8000
  ```
  Open `http://localhost:8000` in your browser.

---

## Project Structure & Data Flow

The project is structured around decoupled layers of concern: presentation elements (HTML/CSS), data models (JSON), and controller modules (JavaScript).

1. **Routing and Bootstrapping**: `index.html` loads the visual frame and references `assets/css/style.css` alongside `assets/js/core/app.js` at the bottom of the body.
2. **API Layer**: On page load, `assets/js/core/app.js` executes and references functions from `assets/js/core/api.js`. This component makes asynchronous HTTP calls (`fetch`) to fetch resources from `skills.json` and the JSON files in `data/`.
3. **UI Modules**: The fetched data array is fed into the respective modules located inside `assets/js/modules/`. These scripts parse the JSON properties, write HTML templates dynamically, and inject them into their specific DOM targets.
4. **Behavior Hooks**: Libraries are loaded from high-speed CDNs. Global interactive triggers, scroll behaviors, and responsive navigation toggles are managed centrally within `assets/js/core/common.js`.

---

## Deployment

This website is compiled as a static frontend bundle. It can be easily deployed to any static host by pointing the configuration root to the repository directory.

* **GitHub Pages**: Configure your repository settings under the Pages tab to build from the `main` branch.
* **Netlify**: Connect your GitHub repository, set the build command to empty, and designate the publish directory as `.` (root).
* **Vercel**: Select the static HTML template project configuration with the workspace root.

---

## Future Improvements

- **Light/Dark Theme Switcher**: Add a configuration toggle to allow theme selection and persist choices via `localStorage`.
- **Internationalization (i18n)**: Implement translations for descriptions and portfolio cards based on browser language settings.
- **Search & Filter Operations**: Add a quick-search search bar to filter projects dynamically by tags, names, or languages.
- **Headless CMS Integration**: Migrate local JSON files to a decoupled CMS endpoint to write articles and projects without commit pushes.
- **Performance Optimizations**: Compress static visual assets to webp formats to improve cumulative layout shifts and page load speed.
- **WCAG AA Compliance**: Enhance accessibility features by implementing custom keyboard focus boundaries and aria-landmarks.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Author

- **Name**: Abhiraj Kumar
- **GitHub**: [github.com/abhirajkr16](https://github.com/abhirajkr16)
- **LinkedIn**: [linkedin.com/in/abhirajkr16](https://www.linkedin.com/in/abhirajkr16)
- **Portfolio**: [abhirajkr16.github.io](https://github.com/abhirajkr16)
- **Email**: abhirajmait16@gmail.com
