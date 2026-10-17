# Nafisa Tasneem Esha — Academic Research Portfolio

A responsive, single-page academic portfolio prepared for GitHub Pages.

## Included sections

- Home / Hero
- About & Education
- Current Roles
- Research Interests
- Featured Research
- Publications & Manuscripts
- Selected Projects
- Leadership & Academic Engagement
- Honors & Awards
- CV & Contact

## Files

```text
Nafisa-Esha-Research-Portfolio/
├── assets/
│   ├── profile.jpg
│   └── Nafisa_Tasneem_Esha_CV.pdf
├── favicon.svg
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Publish with GitHub Pages

1. Create a new public GitHub repository, for example:
   `nafisa-esha-portfolio`
2. Upload the **contents** of this folder, not the ZIP file itself.
3. Open the repository:
   **Settings → Pages**
4. Under **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**.
6. GitHub will show the published site URL after deployment.

Typical URL:

```text
https://esha2310.github.io/nafisa-esha-portfolio/
```

## Important before publishing

Some project buttons already point to intended repository URLs:

- `https://github.com/esha2310/CampusLab`
- `https://github.com/esha2310/Airline-Management-System`
- `https://github.com/esha2310/2D-Simulation-of-DIU-Football-Match`
- `https://github.com/esha2310/Best-Shortest-Route`

If a repository has not been created yet, upload it using the same repository name or update the corresponding URL in `index.html`.

## Updating the CV

Replace:

```text
assets/Nafisa_Tasneem_Esha_CV.pdf
```

with the newest PDF, keeping the same filename. No HTML change is needed.

## Updating the profile photo

Replace:

```text
assets/profile.jpg
```

with a new image using the same filename.

## Editing content

Open `index.html` in VS Code or any text editor and search for the section heading or project/publication title you want to change.

## Preview locally

Double-click `index.html`, or run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```


## LinkedIn

The portfolio uses this LinkedIn profile:

```text
https://www.linkedin.com/in/nafisa-tasneem-esha-b988692b2?utm_source=share_via&utm_content=profile&utm_medium=member_android
```

## Adding gallery photos

1. Copy your images into:
   `assets/gallery/`
2. Recommended names:
   - `research-presentation.jpg`
   - `seminar-session.jpg`
   - `award-event.jpg`
3. Open `index.html`.
4. Find:

```html
<div class="gallery-grid hidden-gallery">
```

5. Change it to:

```html
<div class="gallery-grid">
```

6. If your filenames are different, update the corresponding `src="assets/gallery/..."` paths.
7. Edit the captions inside each `<figcaption>` block.
8. Commit the new images and edited `index.html` to GitHub. GitHub Pages will update automatically after deployment.

Recommended image size: around 1200×900 px (4:3), JPG or WebP, preferably under 1 MB each.


## Final gallery content

The final portfolio includes all supplied images, grouped into:
- DIU Research Society roles
- Research Foundations 101 grooming session
- 1st Conference on Innovation in Food, Health & Nutrition / 2nd Runner-Up poster recognition
- Club Enrolment student engagement
- Club Enrolment highest member collection / 1st place
- Meet the Researcher / Best Research Proposal Presenter

Gallery images are optimized as WebP and open in a full-screen preview when clicked.


## Achievement photo correction

Achievement images are now explicitly mapped as follows:
- 2nd Runner-Up Poster Presentation Competition → conference/poster award photo
- Best Research Proposal Presenter Award → newly supplied research proposal recognition photo
- Outstanding Performance — Research Project Showcasing / Patent Idea Competition → newly supplied Patent Idea Competition photo

The same corrected images are also used in the Gallery.

## Final project hierarchy

### Featured Research & AI Projects
- BanglaVariant-Explain
- AI Research Paper Recommender & RAG Assistant
- ModelMismatch Bio
- GenoPlate AI
- AgroPrice-AI

### Applied Machine Learning & Intelligent Systems
- Credit Card Fraud Detection with Imbalanced Learning
- NLP Spam & Fake News Classification
- SkinMatch
- AI-Powered Customer Support Ticket Review System
- ScentMuse-AI

### AI Products & Web Applications
- KrishiBloom-AI
- Notice to Action
- CampusLab

### Algorithms & Academic Software
- Airline Management System
- 2D Simulation of DIU Football Match
- Best Shortest Route

### Learning / Coursework
- Machine Learning Roadmap
- Machine Learning Roadmap — Lesson 02

The original portfolio stylesheet, colour system, JavaScript, Gallery, achievements,
leadership content, images, and CV are preserved. Project cards use the same existing
`card`, `project-card`, `project-icon`, `stack`, and `text-link` components.
