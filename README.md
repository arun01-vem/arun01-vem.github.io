# Arun Vemula | AI, Machine Learning & Software Portfolio

[Live Portfolio](https://arun01-vem.github.io/) · [GitHub](https://github.com/arun01-vem) · [LinkedIn](https://www.linkedin.com/in/arun-vemula-064323340) · [Email](mailto:vemulaarun01@gmail.com)

A responsive personal portfolio built with **HTML, CSS, and JavaScript**. It highlights my work in **Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, and Reinforcement Learning**, alongside additional software and data projects that demonstrate how I turn ideas into working prototypes.

The website features a dark graphite design with lime accents, narrative project case studies, education and experience sections, certificate previews, and optional galleries for my project screenshots.

> **Deployment note:** The live link will work after GitHub Pages is enabled for this repository. If you use a different repository name or hosting provider, update the URL.

## Featured AI Projects

### 1. Reality AI — Real-Estate Insight Platform

Developed in the context of my AI internship at **Infosys**, Reality AI explores AI workflows for real-estate insights, including geospatial imagery, building segmentation, property-condition analysis, and pricing and forecasting components.

The project case study focuses on the documented implementation and its technical direction without claiming unverified model performance or production readiness.

### 2. AirTutor — Reinforcement-Learning-Based Adaptive Tutoring

AirTutor investigates whether a reinforcement-learning policy can select tutoring interventions based on a simulated learner's observable interaction history.

The system uses tabular Q-learning to choose among five interventions: `EXPLAIN`, `EXAMPLE`, `HINT`, `PRACTICE`, and `REVIEW_PREREQUISITE`. A separate LLM layer renders the selected intervention into natural-language dialogue rather than making the pedagogical decision itself.

The supplied benchmark reports **86 passing tests** and a held-out evaluation across 100 simulated learners. The RL policy's reported observable gain is **+0.115**, compared with **+0.052** for the rule-based baseline.

These are simulated results, not evidence from human learners. The documented harder-curriculum condition also shows that the RL advantage can disappear.

### 3. HORA — Retail Video and Kinematic Interaction Prototype

HORA combines YOLO11 object detection, YOLO11-Pose, ByteTrack tracking, shelf-zone dwell analytics, and a Random Forest classifier over motion features.

The prototype explores motion patterns labelled `BROWSE`, `PICK`-like, and `RETURN`-like. It also includes OpenCV visualization, a Streamlit dashboard, command-line video processing, and Parquet output.

The reported perfect classifier scores come from **synthetic trajectories**, not real-world retail accuracy. HORA does not establish physical product pickup or return, inventory changes, purchases, theft, or loss-prevention events.

## Additional Projects Built Through Coding

- **FIXT:** A hyper-local doorstep mobile-repair booking MVP for Jagtial, Telangana. It includes a Next.js booking interface, map-based location selection, a FastAPI backend, database models, order tracking, and an admin workflow. It is documented as a locally validated MVP; deployment and pilot-launch steps remain.
- **Groq Chat:** A Streamlit chat application that streams responses from supported Llama models through the Groq API. Conversation history is retained for the active session, and an API key is required.
- **Voters Dashboard:** A Python dashboard for exploring voter demographics, including age groups, gender breakdowns, data filtering, and charts. Dataset provenance, privacy, and reuse permissions should be confirmed before publishing any underlying data.
- **Kerala Ayurvedh Platform:** A public Next.js website, Android application built with Expo/React Native, and Express/TypeScript backend using Prisma and PostgreSQL. Its documented scope includes product and order workflows, member networks, manual payment handovers, commissions, and administration. Outstanding security, privacy, operational, and release tasks mean it should not be described as production-ready.

The portfolio visually prioritizes the three AI projects while presenting the other coded projects separately. Each case study covers the documented purpose, implementation, technologies, validation context where available, and known limitations.

## Research Interests

- Computer Vision
- Machine Learning
- Artificial Intelligence
- Deep Learning
- Reinforcement Learning

## Education

**Bachelor of Science (Data Science)**  
Sri Chaitanya Degree College, Jagtial, Telangana, India  
Satavahana University · **2021–2025** · **CGPA: 6.9/10**

Relevant coursework: Data Science, Machine Learning, SQL, Big Data, and Linear Algebra.

**Higher Secondary School — Mathematics, Physics, Chemistry**  
Trinity Junior College, Karimnagar, Telangana, India  
**Percentage: 74.2%**

## Certificates

- **Computer Vision 101** — completed June 9, 2025; certificate issued June 29, 2025.
- **Deep Learning for Developers** — completed and issued June 29, 2025.
- **Artificial Intelligence Primer Certification** — completed and issued June 30, 2025.
- **AI - Data Scientist Skill Upgradation Training** — APPC / TBOCWWB; six-month online training during 2023–2024; certificate issued March 28, 2024.

Certificate previews and PDFs are stored in `assets/certifications/`. The fourth entry is described according to the APPC / TBOCWWB branding and details visible on the certificate.

## Technology Used in the Portfolio

- **Frontend:** HTML5, CSS3, JavaScript
- **Presentation:** Responsive dark theme, interactive project case studies, certificate previews, and project image galleries
- **Hosting:** GitHub Pages or another static hosting service
- **Build requirements:** No build step or frontend framework required

## Run Locally

1. Clone or download this repository.
2. Open `index.html` in a modern browser, or start a local static server from the repository root:

   ```bash
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Push the website files to the repository's `main` branch.
2. Open **Settings → Pages** in GitHub.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose branch `main` and folder `/(root)`, then save.
5. Open the Pages URL displayed by GitHub after deployment completes.

For a repository named `arun01-vem.github.io`, the expected website address is:

`https://arun01-vem.github.io/`

Keep `index.html`, `styles.css`, `script.js`, and the `assets/` directory in the published root so the website can load its styles, interactions, images, and certificate PDFs.

## Add a Profile Photo and Project Screenshots

The portfolio has an optional profile-photo slot and image galleries for **Reality AI, AirTutor, and HORA**.

See `assets/images/README.md` for the exact filenames. Use genuine screenshots or outputs from your own work, and remove confidential or personal information from screenshots before publishing.

## Repository Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
├── PROJECT_CASE_STUDIES.md
├── CONTENT_CHECKLIST.md
└── assets/
    ├── favicon.svg
    ├── certifications/
    └── images/
```

## Contact

- **Email:** [vemulaarun01@gmail.com](mailto:vemulaarun01@gmail.com)
- **GitHub:** [github.com/arun01-vem](https://github.com/arun01-vem)
- **LinkedIn:** [linkedin.com/in/arun-vemula-064323340](https://www.linkedin.com/in/arun-vemula-064323340)

## Accuracy and Privacy

Project descriptions are based on the README material supplied for the portfolio. The underlying project repositories were not independently re-audited while preparing this documentation.

AirTutor's results are simulated, HORA's perfect classification scores are based on synthetic trajectories, and FIXT and Kerala Ayurvedh are not represented as production launches.

Before publishing, review project claims and external links. Do not commit API keys, credentials, private datasets, customer records, payment proofs, or unredacted certificate information. Publish only screenshots and files you have permission to share.
