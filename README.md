# Arun Vemula — Professional Portfolio

A responsive, dark-themed portfolio built with plain HTML, CSS, and JavaScript. No framework build step or package installation is required. The design is intended to work for general visitors: recruiters, interviewers, friends, reviewers, and professors. The page gives visual priority to three AI projects—Reality AI, AirTutor, and HORA—while keeping additional coded software/data builds in a separate section.

## Run locally

1. Extract the portfolio folder.
2. Open `index.html` in a modern browser. A local static server is optional.
3. Open a project card's **Explore case study** action to view its detailed notes, implementation summary, validation context, and known limitations.

For best testing before publishing, run a simple local server from this folder, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Files

```text
arun-portfolio/
├── index.html                 # Page content and editable education / experience fields
├── styles.css                 # Responsive dark visual system
├── script.js                  # Project case studies, modal, contact and certificate configuration
├── README.md                  # This guide
├── CONTENT_CHECKLIST.md       # Pre-publication checklist
├── PROJECT_CASE_STUDIES.md    # Text inventory / evidence checklist for project detail
└── assets/
    ├── favicon.svg
    ├── certifications/
    │   ├── computer-vision-101.pdf
    │   ├── computer-vision-101-preview.png
    │   ├── deep-learning-for-developers.pdf
    │   ├── deep-learning-for-developers-preview.png
    │   ├── artificial-intelligence-primer.pdf
    │   ├── artificial-intelligence-primer-preview.png
    │   ├── ai-data-scientist-appc-certificate.pdf # Public-safe, redacted PDF copy
    │   ├── ai-data-scientist-appc-preview.jpg
    │   └── README.md          # Certificate file notes
    └── images/
        └── README.md          # Exact image names to add
```

## Add your profile photo

Copy your preferred portrait image to:

`assets/images/profile.jpg`

The image is automatically shown in the hero. If the file is absent, the designed initials placeholder is shown. Use a high-resolution JPG cropped roughly 4:5 or 3:4, with a clean background and enough space around your head and shoulders. The page does not upload or store any image; it displays files you place in this folder.

## Add screenshots / outputs

Only the three project galleries requested have image slots: **Reality AI, AirTutor, and HORA**. Put your own outputs in `assets/images/` using these exact filenames:

| Project | Screenshot file names | Suggested content |
|---|---|---|
| Reality AI | `reality-ai-01.png`, `reality-ai-02.png`, `reality-ai-03.png` | Project overview; imagery / segmentation; analysis or model output |
| AirTutor | `airtutor-01.png`, `airtutor-02.png`, `airtutor-03.png` | Streamlit demo; action/policy inspection; benchmark or ablation result |
| HORA | `hora-01.png`, `hora-02.png`, `hora-03.png` | Detection/tracking; shelf-zone dwell; trajectory or action-pattern output |

Open the project's case study after adding the images; the corresponding gallery slots will display them automatically. If a file is missing, the site keeps a designed placeholder showing the expected filename. The site has no other project screenshot gallery, per the current request. Do not use generated mock outputs as if they were real evaluation results; use screenshots from your own project runs.

## Education details included

The public education section now shows:

- **Bachelor of Science (Data Science)** — Sri Chaitanya Degree College, Jagtial, Telangana, India; affiliated university: Satavahana University; 2021–2025; CGPA 6.9/10.
- **Relevant coursework** — Data Science, Machine Learning, SQL, Big Data, and Linear Algebra.
- **Higher Secondary School** — Trinity Junior College, Karimnagar, Telangana, India; Mathematics, Physics, Chemistry; 74.2%.

No higher-secondary year has been added because it was not supplied.

## Add experience dates and contribution

In `index.html`, search for `id="experience"`. Add your actual internship start and end dates, location if appropriate, and a short factual account of your responsibilities. The current copy intentionally avoids guessing your exact responsibilities.

## Contact links and résumé

The supplied email, GitHub profile, and LinkedIn profile are configured in `script.js` and shown in the Contact section. To update them later, edit the `CONTACT` object near the top of `script.js`. The résumé download button remains hidden until a résumé PDF is supplied and `RESUME_FILE` is set to its path.

## Certificates included

Four certificate entries are displayed directly on the website. The first three use the supplied Infosys Springboard PDFs and rendered previews. The fourth is the APPC / TBOCWWB AI - Data Scientist Skill Upgradation Training certificate.

| Certificate title | Course / training date in document | Certificate issue date | Website assets |
|---|---|---|---|
| Computer Vision 101 | June 9, 2025 | June 29, 2025 | `assets/certifications/computer-vision-101-preview.png` and `computer-vision-101.pdf` |
| Deep Learning for Developers | June 29, 2025 | June 29, 2025 | `assets/certifications/deep-learning-for-developers-preview.png` and `deep-learning-for-developers.pdf` |
| Artificial Intelligence Primer Certification | June 30, 2025 | June 30, 2025 | `assets/certifications/artificial-intelligence-primer-preview.png` and `artificial-intelligence-primer.pdf` |
| AI - Data Scientist Skill Upgradation Training | Conducted online during 2023–2024; six months | 28 March 2024 | `assets/certifications/ai-data-scientist-appc-preview.jpg` and `ai-data-scientist-appc-certificate.pdf` |

The APPC certificate identifies the course as AI - Data Scientist and states that the six-month skill-upgradation training was conducted online during 2023–2024. It names the Andhra Pradesh Productivity Council (APPC), displays the Telangana Building and Other Construction Workers Welfare Board (TBOCWWB), and gives the issue date as 28 March 2024. This document does not display NVIDIA branding, so it is not labelled as an NVIDIA certificate on the site.

For privacy, the portfolio uses a public-safe copy of the APPC certificate with the family-member name, registration/credential identifiers, QR code and certificate number hidden. The unredacted uploaded source is not copied into the public website assets. The other three previews were rendered from their supplied PDFs without recreating the certificate designs.

To replace a certificate later, replace both its PDF and matching preview image, retaining the filenames used in `index.html`. The APPC certificate is a redacted public copy; do not substitute the unredacted source into a publicly hosted assets folder unless you consciously choose to publish the identifiers.

## Add project code or demo links

Each case study is defined in the `PROJECTS` object inside `script.js`. A project can include a `links` array. Add real public links only when ready:

```js
links: [
  { label: "GitHub repository", url: "https://github.com/your-username/repository" },
  { label: "Live demo", url: "https://your-live-demo.example" }
]
```

Do not add a placeholder URL as if it were a real repository or deployed demo.

## Accuracy notes

The project case studies use the README information supplied for this portfolio. The primary AI project cards use a first-person narrative to describe the documented work; the secondary projects remain visible as software/data builds created through coding. No underlying repository audit or live deployment test was run while designing this website. In particular:

- AirTutor results are from the supplied simulated learner benchmark, not human-student trials.
- HORA's reported perfect scores are on idealized synthetic trajectories, not real-world retail videos.
- FIXT is described as a locally validated MVP, not a launched production service.
- Kerala Ayurvedh is labelled pre-launch because its README lists outstanding security, privacy, operational, and release checks.
- Reality AI's model and dataset details need to be cross-checked against its current repository and experiment artifacts before claims about final status or metrics are added.
- The Voters Dashboard README supplied limited information; the visual library, automated testing, deployment, and data provenance are not guessed.
