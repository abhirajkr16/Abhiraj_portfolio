# Portfolio Website

A modular, single-page personal portfolio application designed to showcase professional experience, education, projects, and technical skills. Built with modern semantic HTML5, clean CSS3 layouts, and dynamic vanilla JavaScript modules, it serves as a lightweight, performant frontend template for software engineers, designers, and multidisciplinary practitioners.

## Introduction

This personal portfolio website was built to address the need for a cohesive, fast-loading, and interactive showcase of an engineer's technical profile. Combining elements of mechanical engineering, CAD modeling, and frontend web development, the project acts as a live curriculum vitae. It provides prospective clients and employers with direct access to projects, employment history, academic background, and social presence, while demonstrating solid software engineering principles in vanilla web technologies.

## Features

- **Responsive Design**: Designed with fluid layouts and CSS media queries to ensure full compatibility across desktop, tablet, and mobile displays.
- **Modern UI**: Clean layout built on consistent typography hierarchies, professional color palettes, and container grids.
- **Typing Animation**: Typist component on the landing section powered by Typed.js to rotate between multiple technical specialties.
- **Smooth Scroll**: Native browser behavior and custom jQuery-based linear animations for navigating anchor hashes.
- **Particles Background**: Interactive canvas overlay built with Particles.js serving as a network node visual indicator.
- **Scroll Reveal Animations**: Dynamic scroll-triggered transitions utilizing the ScrollReveal library to improve entry pacing.
- **Tilt Effects**: 3D parallax hover mechanics applied to featured layouts and card components using Vanilla Tilt.
- **Project Showcase**: Client-side parsing of a central JSON configuration to render active project blocks dynamically.
- **Skills Section**: Automated rendering of technology skills and corresponding graphic assets from a root-level JSON schema.
- **Experience Timeline**: Structured vertical layout detailing professional milestones and key technical positions.
- **Contact Form**: Direct email transmission via client-side integration with the EmailJS API.
- **Dark/Light Theme**: Architectural preparation in stylesheets (under the CSS variables folder) to support color scheme switching.
- **Reusable Components**: Separated card layouts, custom buttons, social icon bars, custom cursor trails, loaders, and scroll indicators.
- **SEO Friendly Structure**: Explicit indexing metadata (keywords, tags, descriptions), optimized titles, single h1 usage, and clean semantic structures.
- **Accessibility Considerations**: Logical DOM navigation order, alternate descriptions on images, high-contrast text, and explicit aria-labels.

## Project Structure

```text
portfolio_main/
├── .gitattributes             # Git path-specific configurations
├── .vscode/                   # Workspace-specific editor settings
├── 404.html                   # Customized 404 error page
├── index.html                 # Core landing page index entry point
├── skills.json                # Primary data source mapping technical skills
├── assets/                    # Primary UI resources and logical layers
│   ├── css/                   # Stylesheets categorized by role
│   │   ├── style.css          # Main entry stylesheet that orchestrates imports
│   │   ├── 404.css            # Styles specific to the error layout
│   │   ├── base/              # Base configurations
│   │   │   ├── animations.css # Component-level keyframe definitions
│   │   │   ├── reset.css      # CSS reset rules for browser normalization
│   │   │   ├── typography.css # Font mappings and text hierarchy definitions
│   │   │   └── variables.css  # Placeholder design tokens and variables
│   │   ├── components/        # Reusable component-specific styles
│   │   │   ├── buttons.css
│   │   │   ├── cards.css
│   │   │   ├── cursor.css
│   │   │   ├── loader.css
│   │   │   ├── particles.css
│   │   │   ├── scroll-indicator.css
│   │   │   └── social-icons.css
│   │   └── layout/            # Layout-specific segment definitions
│   │       ├── about.css
│   │       ├── contact.css
│   │       ├── education.css
│   │       ├── experience.css
│   │       ├── footer.css
│   │       ├── hero.css
│   │       ├── navbar.css
│   │       ├── projects.css
│   │       ├── responsive.css
│   │       └── skills.css
│   ├── images/                # Asset storage for static mockups and imagery
│   │   ├── educat/            # Educational institution branding assets
│   │   ├── projects/          # Screenshots of compiled applications
│   │   └── skills/            # Icon sets representing developer skills
│   └── js/                    # Client logic and vendors
│       ├── 404.js             # Error page layout script
│       ├── app.js             # Legacy application logic wrapper
│       ├── script.js          # Shared utility hooks
│       ├── core/              # System-critical client modules
│       │   ├── api.js         # Interface for dynamic JSON database fetches
│       │   ├── app.js         # DOMContentLoaded bootstrapper
│       │   └── common.js      # Global utility triggers (navbar state, ScrollReveal)
│       ├── modules/           # Section-specific display layers
│       │   ├── home.js        # Core animations (Tilt, Particles, Typed configurations)
│       │   ├── projects.js    # Project array parser and grid builder
│       │   └── skills.js      # Skills array parser and skill badge builder
│       └── vendor/            # Statically hosted third-party scripts
│           └── particles.min.js
├── experience/                # Extended timeline interface
│   ├── index.html             # Standalone historical resume page
│   ├── script.js              # Support script for the experience view
│   └── style.css              # Custom layout style sheet for the timeline
└── projects/                  # Comprehensive project portfolio archive
    ├── index.html             # Gallery page showing filterable categories
    ├── projects.json          # Complete JSON database for project assets
    ├── script.js              # Filter engine and Isotope interface
    └── style.css              # Style configurations for projects layout
```

### Directory Details

- **assets/css/**: Built upon a modular layout separating base rules (reset, typographies), reusable components (buttons, badges), and structural sections (navbar, footer, hero). This layout makes the codebase scalable and clean, ensuring edits to individual layouts do not cascade unexpectedly.
- **assets/js/core/**: Houses crucial framework code, including `api.js` (handles serverless asynchronous requests to configuration JSON files) and `common.js` (controls general UI behavior, key blockages, and window events).
- **assets/js/modules/**: Contains self-contained UI modules. Each module targets a single DOM element or section (e.g., rendering skills, projects, or initializing animations).
- **experience/**: Contains a detailed sub-page focusing on professional highlights, providing structural separation from the minimal landing page layout.
- **projects/**: Embeds an Isotope-filtered grid system to sort portfolio items by technical category (e.g., frontend engineering, mechanical design).

## Technologies Used

- **HTML5**: Leveraged for building semantic document structures, facilitating accessibility parsing, and forming SEO-compliant layouts.
- **CSS3 (Custom Stylesheets)**: Deployed to maintain control over visual layouts through a components/layout structure without relying on external Tailwind/Bootstrap constraints.
- **JavaScript (ES Modules)**: Chosen to establish a clean modular script pipeline, decoupling application loading from data fetching and DOM construction.
- **Font Awesome**: Standardized icon representation for UI links and descriptive buttons.
- **Typed.js**: Provides typed string arrays in the hero section to keep users engaged without adding render blocking.
- **Particles.js**: Renders responsive floating canvas particles to elevate visual interest on loading.
- **ScrollReveal**: Handles light scroll-driven content entry dynamically.
- **Vanilla Tilt**: Adds lightweight, hardware-accelerated 3D tilt adjustments to featured cards.
- **EmailJS**: Integrates form capture directly with backend mail delivery, eliminating the need for a custom Node.js/PHP proxy server.

## Installation

### Prerequisites

You need a standard code editor (e.g., Visual Studio Code) and a local development server utility to test the dynamic fetching (JSON parsing requires a secure origins/local server environment).

### Step-by-Step Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/decode16/Abhiraj-portfolio.git
   cd Abhiraj-portfolio
   ```

2. **Open the Project Directory**
   Open the root project folder in your preferred text editor:
   ```bash
   code .
   ```

3. **Launch a Local Server**
   Since the app uses dynamic fetch commands to load skills and projects JSON data, opening the `index.html` file directly via the file protocol (`file://`) will trigger CORS limitations. Start a local server:
   - **Using VS Code Live Server Extension**: Click the "Go Live" button in the status bar.
   - **Using Python**:
     ```bash
     python -m http.server 8000
     ```
     Then open `http://localhost:8000` in your web browser.
   - **Using Node.js static server**:
     ```bash
     npm install -g local-server
     local-server
     ```

## Development Workflow

The codebase separates presentation (HTML5/CSS3) from dynamic configurations (JSON). 

1. **Global Entrypoint**: `index.html` calls `assets/css/style.css` which acts as the styling import manager.
2. **Dynamic Bootstrapping**: `assets/js/core/app.js` runs on `document.ready`. It queries `fetchData()` from `assets/js/core/api.js` to gather data from `skills.json` and `projects/projects.json`.
3. **Template Compilation**: Resolved records are forwarded to UI rendering modules (`assets/js/modules/skills.js` and `assets/js/modules/projects.js`), which compile string templates and insert them into the DOM.
4. **Behavior Hooks**: `assets/js/core/common.js` hooks ScrollReveal configs and window scroll events, while `assets/js/modules/home.js` handles typing routines and particles canvas initialization.

## Customization

### Profile Image

- Hero Section: Replace the graphic target at `assets/images/get_in_touch.jpg`.
- About Section: Replace the graphic target at `assets/images/change_2nd.jpg`.
- Alternatively, modify the image references in the `img` tags directly within `index.html`.

### Projects

All projects rendered dynamically on the landing page and subpages are defined in `projects/projects.json`. Update the array with objects conforming to this layout:
```json
{
  "name": "Project Display Name",
  "desc": "Short project description detail.",
  "image": "project_image_filename",
  "category": "basicweb",
  "links": {
    "view": "https://deployment-url.com",
    "code": "https://github.com/repository-link"
  }
}
```
*Note: Project images must be uploaded to `assets/images/projects/` as `.png` files.*

### Skills

Skills displayed in the capabilities grid are defined in `skills.json`. Add or edit items using the format:
```json
{
  "name": "Skill Name",
  "icon": "https://img.icons8.com/color/48/000000/icon-name.png"
}
```

### Education

Education milestones are hardcoded directly in `index.html`. 
1. Open `index.html` and search for the `<!-- Education -->` section.
2. Update the `.box` containers with the appropriate degree name, school or university info, and calendar dates.

### Experience

Experience milestones are located in two places:
1. Landing Page timeline: Open `index.html`, search for `<!-- Experience -->`, and update the `.container` divs.
2. Comprehensive Experience page: Open `experience/index.html` and update the timeline elements.

### Resume

Update the download hyperlink within the `.resumebtn` container in `index.html`:
```html
<div class="resumebtn">
  <a href="YOUR_GOOGLE_DRIVE_OR_HOSTED_PDF_LINK" target="_blank" class="btn">
    <span>Resume</span>
    <i class="fas fa-chevron-right"></i>
  </a>
</div>
```

### Social Links

Social interaction icons are present in the hero block and the footer:
- Hero: Edit URLs under `<div class="socials">` inside `index.html`.
- Footer: Edit URLs under `<div class="share">` inside `index.html`.
- Detailed Subpages: Edit social elements in `projects/index.html` and `experience/index.html` to reflect your custom targets.

### Theme Colors

Design variables are initialized inside `assets/css/base/variables.css`. Update the root selectors to adjust colors across components:
```css
:root {
  --primary-color: #YOUR_PRIMARY_HEX;
  --secondary-color: #YOUR_SECONDARY_HEX;
}
```
Update color schemes in layout/component files (like `navbar.css`, `hero.css`) to bind styles directly to variables.

### Animations

- **Typing Strings**: Customize the string arrays and speed configurations inside the `Typed` instantiator in `assets/js/modules/home.js`.
- **Particles**: Adjust physics properties, colors, or node density configurations inside `particlesJS` configuration parameters in `assets/js/modules/home.js`.
- **ScrollReveal**: Adjust entry vectors, durations, and interval delays inside `assets/js/core/common.js`.

## Performance

The application implements optimization strategies to ensure high PageSpeed scores:
- **Asynchronous Execution**: Scripts are organized as modules or non-blocking files, loaded at the end of the DOM parse stage.
- **Data Splitting**: Loading data asynchronously via localized configuration files (`skills.json` and `projects.json`) reduces the initial markup size.
- **Dependency Caching**: Third-party scripts are loaded from high-speed Content Delivery Networks (CDNs), encouraging client-side browser caching.
- **Resource Deferral**: Sub-page scripts and library dependencies are isolated to their respective subfolders (`projects/` and `experience/`), minimizing unnecessary client downloads on the landing page.

## Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Microsoft Edge (Latest)
- Opera (Latest)

*Note: Visual experiences utilizing CSS Grid, Flexbox, and ES Module imports will not load correctly on legacy layouts like Internet Explorer 11.*

## Future Improvements

- **Global Variable Consolidation**: Fully refactor CSS files to bind typography sizes and spacing variables to a unified stylesheet system.
- **Theme Switcher**: Implement an interactive toggle utilizing CSS custom variables and `localStorage` to persist theme preference.
- **API Cache Handler**: Integrate a Service Worker client to cache JSON responses, enabling offline support.
- **Automated Validation**: Set up GitHub Action pipelines to run Lighthouse CLI tests on deployment.
- **Enhanced Keyboard Navigation**: Incorporate visible focus rings and skip-to-content links to satisfy WCAG AA accessibility standards.

## Learning Objectives

This portfolio codebase demonstrates competency in key web engineering concepts:
- **Modular Asset Design**: Applying clear visual separations by splitting logic into independent layouts, utilities, and components.
- **Data-Driven UI Rendering**: Practicing separating database configuration files (JSON) from presentation templates, replicating a decoupled frontend client structure.
- **Client-Side API Integrations**: Establishing custom integrations with serverless tools (EmailJS) and third-party UI engines (Isotope, Typed, Particles).
- **Asynchronous Flow Control**: Working with asynchronous fetch protocols, JavaScript Promises, and DOM compilation events.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

- **Name**: Abhiraj Kumar

