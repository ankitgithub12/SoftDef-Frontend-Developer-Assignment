# FloraVision — Earth's Exhale 🌿

FloraVision is a premium, modern, and visually stunning web application for showcasing indoor plants and desk decorations. Designed with a dark, immersive aesthetic (`#0f1f10` dark forest theme) and smooth user experiences, this application presents an elegant curated catalog of plants, from trendy office greenery to high-oxygen-releasing plants.

### 🔗 Live Demo
Check out the live application here: **[https://softdef-frontend-developer-assignment.onrender.com](https://softdef-frontend-developer-assignment.onrender.com)**

---

## 🌟 Key Features

- **Immersive Design System:** Sleek dark-mode aesthetic with vibrant green accents, glassmorphic UI elements, custom animations, and responsive layouts.
- **Hero & Search Experience:** A prominent greeting area featuring a search bar to explore custom plant categories.
- **Trendy Plants Section:** A high-quality showcase of currently popular house plants, complete with interactive cards, tag indicators, and hover effects.
- **Top Selling Plants:** Spotlight on the best-selling indoor plants with detailed specifications (light, size, water needs).
- **Clean Air / Best O₂ Plants:** A specialized section highlighting oxygen-boosting plants that promote wellness and cleaner indoor air.
- **Customer Reviews:** Dynamic testimonial cards showcasing user ratings, reviews, and community feedback.

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/) (Functional components with hooks)
- **Bundler & Build Tool:** [Vite 8](https://vite.dev/) (Fast development server and optimized build pipeline)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Using the next-generation CSS-first compiler for speed and style token efficiency)
- **Icons:** [Lucide React](https://lucide.dev/) (Clean, modern vector icon set)
- **Linting:** [Oxlint](https://github.com/oxc-project/oxc) (Ultra-fast JavaScript/JSX linter)

---

## 📂 Project Structure

```text
SoftDef  Frontend Developer Assignment/
├── client/                     # Frontend Vite + React project
│   ├── src/
│   │   ├── assets/             # Images and local static assets
│   │   ├── components/         # Reusable UI components
│   │   │   ├── BestO2.jsx             # Oxygen plants feature section
│   │   │   ├── Button.jsx             # Reusable styled action button
│   │   │   ├── CustomerReview.jsx     # Customer feedback section
│   │   │   ├── Footer.jsx             # Footer with newsletter and links
│   │   │   ├── Hero.jsx               # Hero landing section
│   │   │   ├── HeroBanner.jsx         # Contextual banner for plants
│   │   │   ├── Navbar.jsx             # Interactive sticky navigation bar
│   │   │   ├── O2Plants.jsx           # Clean-air details
│   │   │   ├── PlantCard.jsx          # Reusable item card component
│   │   │   ├── SectionTitle.jsx       # Standardized section headings
│   │   │   ├── TestimonialCard.jsx    # Styled customer review card
│   │   │   ├── TopSellingPlants.jsx   # Top sellers product listing
│   │   │   └── TrendyPlants.jsx       # Trendy plants product listing
│   │   ├── App.jsx             # Main Application layout container
│   │   ├── index.css           # Global Tailwind CSS imports & styles
│   │   └── main.jsx            # Application mount and entrypoint
│   ├── index.html              # Main HTML template and metadata
│   ├── vite.config.js          # Vite configurations
│   ├── package.json            # Client-specific package & dependency manifest
│   └── .oxlintrc.json          # Oxlint linter configurations
├── package.json                # Root package for workspace command delegation
└── README.md                   # Project documentation (this file)
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

### Installation

1. Clone or download the repository to your local machine.
2. Open your terminal in the project root directory.
3. Install the dependencies for both the root helper scripts and the client application:
   ```bash
   npm install
   ```
   *(This will resolve all dependencies required by the React/Vite front-end, including Tailwind CSS and Lucide React)*

---

## 💻 Available Scripts

You can run the following NPM scripts from the **project root directory** (they are configured to delegate automatically to the `client` directory):

### Start Development Server
Runs the interactive development environment with Hot Module Replacement (HMR).
```bash
npm run dev
```
By default, the server will open the app locally. Check the terminal output (e.g., `http://localhost:5173`) to view the application.

### Build for Production
Compiles and optimizes the React application for production deployment into the `client/dist` directory.
```bash
npm run build
```

### Run Linter
Executes Oxlint on the codebase to check for lint errors and maintain code quality.
```bash
npm run lint
```

### Preview Production Build
Locally boots up the built assets from the `client/dist` directory to test production builds before deploying them.
```bash
npm run preview
```

---

## 🎨 Theme & Customization

The project uses a custom color palette defined in [index.css](file:///d:/SoftDef%20%20Frontend%20Developer%20Assignment/client/src/index.css) and Tailwind. Key themes include:
- **Primary Background:** `#0f1f10` (Dark Forest Green)
- **Secondary Background:** `#1b2e1d` / `#162a18` (Deep Greens)
- **Accents:** `#4ade80` (Mint / Emerald) and `#adfa1d` (Lime green highlights)
- **Font Family:** `Poppins` (Google Font loaded via HTML)
