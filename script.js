/*
  Portfolio content configuration
  1) CONTACT contains the email and profile links supplied by Arun.
  2) An optional portrait can be added at assets/images/profile.jpg.
  3) Add screenshots using the filenames shown in each project's media gallery.
  4) Certificate previews and PDFs are stored under assets/certifications/.
  Project descriptions are kept conservative and based on the supplied README notes.
*/
const CONTACT = {
  email: "vemulaarun01@gmail.com",
  github: "https://github.com/arun01-vem",
  linkedin: "https://www.linkedin.com/in/arun-vemula-064323340/"
};
const RESUME_FILE = ""; // Example: "assets/Arun_Vemula_CV.pdf" after adding your PDF.

const PROJECTS = {
  reality: {
    title: "Reality AI",
    type: "APPLIED AI / GEOSPATIAL & PROPERTY INSIGHTS",
    subtitle: "A real-estate insight platform",
    intro: "During my four-month AI internship at Infosys, I worked on Reality AI, a real-estate insight platform. I explored how geospatial imagery, property-condition signals and structured features could support segmentation, condition analysis and price-related modelling. I present it as documented work in progress: data provenance, model metrics and the completion status of each component still need confirmation from the project records.",
    tags: ["SpaceNet SN2", "U-Net", "ResNet-18", "Price regression", "Forecasting"],
    gallery: [
      { src: "assets/images/reality-ai-01.png", label: "Project overview", path: "reality-ai-01.png" },
      { src: "assets/images/reality-ai-02.png", label: "Imagery / segmentation output", path: "reality-ai-02.png" },
      { src: "assets/images/reality-ai-03.png", label: "Analysis / model output", path: "reality-ai-03.png" }
    ],
    sections: [
      { title: "Problem & purpose", body: `<p>Real-estate analysis can involve several different kinds of information: geographic context, satellite or aerial imagery, observed property condition, structured property features, and price trends. Reality AI is described as a real-estate insight platform that brings these strands into one project workflow.</p><p>The goal is to explore how computer vision and predictive modelling can contribute useful signals. The portfolio does not claim that the platform is a production valuation service or that any estimate is reliable for financial decisions.</p>` },
      { title: "Documented technical work areas", body: `<ul><li><strong>Geospatial imagery:</strong> project notes reference the SpaceNet 2 building dataset and the AOI_2_Vegas area. Data-path and source checks were part of the workflow.</li><li><strong>Building segmentation:</strong> a U-Net-based segmentation component is part of the documented project scope.</li><li><strong>Property-condition classification:</strong> notes reference a ResNet-18 condition classifier.</li><li><strong>Price modelling:</strong> a price-regression component and a Zillow-related forecasting component appear in the project notes.</li><li><strong>Feature/data alignment:</strong> a 27-feature pricing/contract matching requirement was recorded for the project.</li></ul><p>The list above summarizes documented work areas; exact completion status, metrics, and your individual contribution should be matched against the current repository and experiment records before being presented as finished results.</p>` },
      { title: "Data provenance & validation still to document", body: `<ul><li>Record the exact original datasets, source URLs or official dataset references, licences, download dates, and any preprocessing.</li><li>Verify the SpaceNet 2 AOI_2_Vegas files and the full path from raw imagery to model input.</li><li>Clearly separate original-source data from any synthetic or generated development data. Previous project notes identified synthetic data as something to replace or remove from the final workflow.</li><li>Add the actual train/validation/test split, training settings, evaluation metrics, example predictions, and failure cases for each model.</li><li>Confirm which components are implemented, trained, evaluated, and integrated in the final version.</li></ul>` },
      { title: "Tools & project context", body: `<p><strong>Documented components:</strong> U-Net, ResNet-18, a price regressor, a Zillow-related forecaster, and SpaceNet 2 imagery. More detailed framework versions and deployment information were not supplied with the portfolio README material.</p><p><strong>Project context:</strong> associated with the four-month AI internship at Infosys. Add your exact role, tasks, dates, and which deliverables were personally implemented before publishing.</p>` },
      { title: "Current status & limitations", body: `<ul><li>This portfolio entry is a project overview, not a claim of independently verified model performance.</li><li>No numerical model accuracy, price error, forecasting score, or deployment status was provided for public display.</li><li>Data provenance, model-specific results, and the final status of each component should be verified against the project files.</li><li>Automated predictions should not be represented as professional property valuations without the relevant validation and safeguards.</li></ul>` }
    ]
  },
  airtutor: {
    title: "AirTutor",
    type: "REINFORCEMENT LEARNING / ADAPTIVE TUTORING",
    subtitle: "An RL-based adaptive pedagogical decision system",
    intro: "I built AirTutor to investigate a focused question: can reinforcement learning choose a useful tutoring intervention from a simulated learner’s observable interaction history? I coded a tabular Q-learning policy, comparison baselines and an interactive demo, while keeping the LLM as a separate language-delivery layer. The benchmark evidence is simulated rather than collected from human learners.",
    tags: ["Tabular Q-learning", "POMDP barrier", "Streamlit", "86 tests", "Simulated evaluation"],
    gallery: [
      { src: "assets/images/airtutor-01.png", label: "Interactive tutoring interface", path: "airtutor-01.png" },
      { src: "assets/images/airtutor-02.png", label: "Policy / action inspection", path: "airtutor-02.png" },
      { src: "assets/images/airtutor-03.png", label: "Benchmark / experiment output", path: "airtutor-03.png" }
    ],
    sections: [
      { title: "Question & research scope", body: `<p>Given an observable representation of a learner's recent performance, can a learned policy choose which pedagogical intervention to deliver more effectively than fixed, random, or hand-authored rule-based strategies?</p><p>AirTutor concentrates on intervention selection—not predicting attrition and not choosing the next curriculum topic. The learner is simulated; these results are preliminary simulated evidence, not a human-subject education study.</p>` },
      { title: "What was implemented", body: `<ul><li><strong>Tabular Q-learning policy:</strong> selects an intervention from a discrete observable state.</li><li><strong>Five actions:</strong> <code>EXPLAIN</code>, <code>EXAMPLE</code>, <code>HINT</code>, <code>PRACTICE</code>, and <code>REVIEW_PREREQUISITE</code>.</li><li><strong>320-state representation:</strong> a product of five observable features: current concept-mastery bucket (5 values), last-response correctness (2), recent accuracy over three attempts (4), consecutive-error streak bucket (4), and whether a hint was used on the prior step (2).</li><li><strong>Simulated learner environment:</strong> models latent learner parameters and true mastery, while keeping them outside the policy input.</li><li><strong>POMDP information barrier:</strong> dedicated tests check that latent parameters and simulator-internal true mastery do not leak into the policy state. The README reports checks for tabular Q-learning and an optional 14-dimensional DQN extension.</li><li><strong>Provider-agnostic language layer:</strong> Gemini, OpenAI-compatible endpoints, and an offline template adapter are configurable options.</li><li><strong>Streamlit demo:</strong> interactive tutoring, transparent policy inspection, and benchmark comparison views.</li></ul>` },
      { title: "Architecture & training/evaluation design", body: `<p>The core is separated from the user interface and LLM layer. The environment/simulator, learner model, policy, teacher baselines, and evaluation scripts can run headlessly without Streamlit or an LLM import.</p><ul><li><strong>Observable state:</strong> the 320-state product is 5 mastery buckets × 2 last-response outcomes × 4 recent-accuracy values × 4 error-streak buckets × 2 prior-hint values. The policy uses an estimated mastery tracker, not simulator-internal true mastery.</li><li><strong>Reward v1:</strong> immediate observable mastery gain, <code>r = ΔM-hat</code>.</li><li><strong>Reward v2:</strong> adds a retention signal and intervention cost; documented coefficients are <code>lambda_ret = 0.50</code> and <code>lambda_cost = 0.015</code>.</li><li><strong>Reward v3:</strong> extends v2 with transfer and penalties for excessive hint use and wasted steps.</li><li><strong>Baselines:</strong> Random, Fixed/Curriculum, and Rule teachers are compared with the tabular RL agent.</li><li><strong>Held-out evaluation:</strong> 100 simulated evaluation configurations from seeds 10000–10099, disjoint from the training population using seeds 0–299.</li><li><strong>RL seeds:</strong> 42, 101, 2024, 777, and 999; results are aggregated across these five independent runs.</li><li><strong>Optional extensions:</strong> a continuous 14-D DQN extension, a Bayesian Knowledge Tracing tracker, and a RAG material-ingestion path using FAISS CPU, sentence-transformers, and pypdf.</li><li><strong>LLM configuration:</strong> provider/model/base URL/API-key settings are environment-configured. With no API credentials, the offline template adapter is used by default; live third-party calls were not part of the described verification.</li></ul>` },
      { title: "Reported benchmark results", body: `<p>The README's final held-out benchmark reports results over 100 simulated evaluation learners and five independent RL seeds. Values below are mean ± standard deviation; bracketed values are the 95% confidence-interval half-widths as reported in the README.</p><div class="case-table-wrap"><table class="case-table"><thead><tr><th>Teacher</th><th>Observable gain</th><th>True latent gain</th><th>Final mastery</th><th>Intervention efficiency</th><th>Hint rate</th><th>Action entropy</th></tr></thead><tbody><tr><td><strong>RL / Q-agent</strong></td><td>+0.115 ± 0.077<br><small>CI ±0.007</small></td><td>+0.228 ± 0.171<br><small>CI ±0.015</small></td><td>0.215 ± 0.077<br><small>CI ±0.007</small></td><td>0.0038<br><small>CI ±0.0002</small></td><td>13.3%</td><td>1.512 bits</td></tr><tr><td>Rule baseline</td><td>+0.052 ± 0.104<br><small>CI ±0.020</small></td><td><strong>+0.263 ± 0.182</strong><br><small>CI ±0.036</small></td><td>0.152 ± 0.104<br><small>CI ±0.020</small></td><td>0.0017<br><small>CI ±0.0007</small></td><td>6.3%</td><td>1.077 bits</td></tr><tr><td>Random</td><td>+0.019 ± 0.055<br><small>CI ±0.011</small></td><td>+0.084 ± 0.110<br><small>CI ±0.022</small></td><td>0.119 ± 0.055<br><small>CI ±0.011</small></td><td>0.0006<br><small>CI ±0.0004</small></td><td>21.8%</td><td>2.230 bits</td></tr><tr><td>Fixed curriculum</td><td>−0.057 ± 0.034<br><small>CI ±0.007</small></td><td>+0.069 ± 0.131<br><small>CI ±0.026</small></td><td>0.043 ± 0.034<br><small>CI ±0.007</small></td><td>−0.0019<br><small>CI ±0.0002</small></td><td>0.0%</td><td>1.000 bits</td></tr></tbody></table></div><p class="metric-caveat">These are simulated benchmark results, not real-student learning outcomes. Source: supplied README's final benchmark record.</p><p>The README reports that RL achieves more than double the observable gain of the Rule baseline (p &lt; 10<sup>−15</sup> under Welch's t-test), but the Rule baseline's true latent mastery gain (+0.263) is higher than RL's (+0.228). This observable-vs-latent trade-off is a meaningful limitation, not a detail to hide.</p><p>A 12-axis sensitivity sweep reports an RL advantage over Rule on 11 of 12 parameter axes, while under the harder-curriculum condition the advantage vanishes (reported difference −0.0075).</p>` },
      { title: "Test status, runtime & tools", body: `<ul><li>The supplied README reports <strong>86 tests passed</strong>, including unit, integration, UI, and POMDP barrier tests.</li><li>The core tabular agent and evaluation battery are designed for CPU execution and do not require a GPU, PyTorch, or an external database.</li><li>The optional DQN extension requires PyTorch; optional RAG needs FAISS CPU, sentence-transformers, and pypdf.</li><li>The default offline template adapter works without configured API credentials. Live third-party LLM calls were explicitly not part of the verification described in the README.</li><li>Main tools: Python, Streamlit, NumPy and the project's pinned dependencies; optional DQN/RAG modules are separately dependency-gated.</li></ul>` },
      { title: "Limitations & next steps", body: `<ul><li>All reported evaluations use a synthetic parametric learner simulator; no human-subject pilot is reported.</li><li>The RL advantage depends on the reward, observable estimator, and simulated curriculum. Under the harder-curriculum boundary case, the advantage over the Rule baseline vanishes.</li><li>Off-policy counterfactual evaluation and a controlled real-user pilot are listed as future work.</li><li>Results should be described as preliminary simulated evidence, not proof or a guarantee of educational effectiveness.</li></ul>` }
    ]
  },
  hora: {
    title: "HORA",
    type: "COMPUTER VISION / VIDEO ANALYTICS",
    subtitle: "Retail dwell analytics & trajectory-based interaction recognition",
    intro: "I developed HORA by connecting object detection, pose estimation and tracking with shelf-zone dwell analytics and a Random Forest classifier over 2D motion features. The output labels describe BROWSE, PICK-like and RETURN-like movement patterns; they do not confirm a physical pickup, a return, inventory change or theft. Its reported perfect score is from idealized synthetic trajectories, not real-world retail validation.",
    tags: ["YOLO11", "YOLO11-Pose", "ByteTrack", "Random Forest", "Streamlit"],
    gallery: [
      { src: "assets/images/hora-01.png", label: "Detection & tracking output", path: "hora-01.png" },
      { src: "assets/images/hora-02.png", label: "Shelf zones & dwell analytics", path: "hora-02.png" },
      { src: "assets/images/hora-03.png", label: "Trajectory action output", path: "hora-03.png" }
    ],
    sections: [
      { title: "Goal & pipeline", body: `<p>HORA studies whether video can be processed into structured spatial and kinematic signals for retail analytics. The pipeline runs from video frames through detection and pose estimation, person/pose association, tracking, zone dwell calculations, temporal feature extraction, trajectory classification, and visual/tabular output.</p><p>The README describes an academic prototype. The scope is limited to coordinate-level tracking and motion patterns; it does not infer theft, purchase, inventory changes, or verified product handling.</p>` },
      { title: "Detection, pose & tracking", body: `<ul><li><strong>YOLO11n object detection:</strong> detects shoppers and retail items.</li><li><strong>YOLO11n-Pose:</strong> extracts 17 human keypoints.</li><li><strong>Person ↔ pose matching:</strong> deterministic greedy one-to-one matching using an IoU threshold of 0.5. Ambiguous overlaps are rejected; unmatched detections receive empty keypoints to prevent cross-subject keypoint leakage.</li><li><strong>ByteTrack:</strong> tracking through the Supervision library maintains track IDs and trajectory histories.</li><li><strong>Foot point:</strong> bottom-centre bounding-box coordinate, <code>((x1 + x2) / 2, y2)</code>, is used for shelf-zone location tests.</li></ul>` },
      { title: "Dwell & action features", body: `<ul><li><strong>Spatial dwell analytics:</strong> user-defined shelf/aisle polygon regions are handled with Shapely. Continuous dwell time is computed, with a default qualification threshold of 3.0 seconds.</li><li><strong>Temporal feature extraction:</strong> a 21-dimensional feature vector is calculated over a rolling 30-frame window of wrist and torso positions. Described signals include displacement, path directness, velocity profiles, and torso-relative deltas.</li><li><strong>Random Forest classifier:</strong> classifies motion patterns as <code>BROWSE</code>, <code>PICK</code>-like, or <code>RETURN</code>-like.</li><li><strong>Outputs:</strong> offline command-line video processing, OpenCV overlays, a Streamlit inspection dashboard, and structured Apache Parquet output with schema validation.</li></ul>` },
      { title: "Synthetic classifier evaluation", body: `<p>The README reports a deterministic synthetic evaluation using seed 42 and 600 idealized trajectories: 200 for each of BROWSE, PICK, and RETURN. An 80/20 stratified split was used (480 training examples and 120 held-out examples).</p><div class="metric-grid"><div class="metric-box"><span class="metric-value">1.0000</span><span class="metric-label">Macro precision<br>synthetic held-out set</span></div><div class="metric-box"><span class="metric-value">1.0000</span><span class="metric-label">Macro recall<br>synthetic held-out set</span></div><div class="metric-box"><span class="metric-value">1.0000</span><span class="metric-label">Macro F1<br>synthetic held-out set</span></div><div class="metric-box"><span class="metric-value">24</span><span class="metric-label">Unit / integration tests<br>reported by README</span></div><p class="metric-caveat">The perfect scores measure separability on idealized synthetic trajectories generated from spatial heuristics. They validate the synthetic pipeline logic; they do not demonstrate real-world retail action accuracy.</p></div>` },
      { title: "Validation, structure & tools", body: `<ul><li>The README reports 24 unit and integration tests for box-coordinate validation, person/pose and track/detection association, landmark isolation, Parquet schema checks, dashboard empty state, tracker FPS scaling, lost-track handling, and background noise rejection.</li><li>Implementation is organized around detector, tracker, feature extractor, classifier, visualizer, Streamlit app, offline video CLI, sample-data generator, and schema validator.</li><li>Core libraries listed include Ultralytics YOLO, Supervision / ByteTrack, OpenCV, NumPy, Pandas, PyArrow, Shapely, scikit-learn, Streamlit, Plotly, Joblib, and Pytest.</li><li>The README specifies Python 3.10–3.13 and gives commands for running tests, processing a sample video, validating Parquet output, and launching the dashboard.</li></ul>` },
      { title: "Privacy & explicit boundaries", body: `<ul><li>No facial recognition, facial landmarks, age/gender/ethnicity classification, or biometric identity is extracted or stored.</li><li>Tracking and dwell calculations operate on bounding boxes, foot points, and 2D joint coordinates.</li><li>The model does not verify physical product attachment, grasping, release, product removal, stock change, checkout, or payment.</li><li>It is not a theft-detection or loss-prevention system.</li><li>Real-world retail performance has not been benchmarked in the supplied README; physical interaction recognition remains an open validation problem.</li></ul>` }
    ]
  },
  fixt: {
    title: "FIXT",
    type: "FULL-STACK WEB PRODUCT / BOOKING WORKFLOW",
    subtitle: "Hyper-local doorstep mobile repair booking for Jagtial, Telangana",
    intro: "I coded FIXT as a low-cost MVP for a doorstep mobile-repair service in Jagtial. I connected a customer booking flow to a FastAPI backend, map-based address capture, order-number tracking and an admin status workflow. The business process deliberately keeps phone verification manual so demand can be tested before investing in a more automated operation.",
    tags: ["Next.js", "React", "TypeScript", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    gallery: [],
    sections: [
      { title: "Product goal & customer journey", body: `<p>FIXT is designed to validate whether local customers will use a doorstep mobile repair service in Jagtial district before the business invests in a more automated system. The operational model deliberately uses manual phone verification, keeps payment outside the initial website flow, and minimizes paid third-party integrations.</p><ol><li>Customer chooses a device and describes the issue.</li><li>Customer provides an estimate context, address, location pin, service area, and preferred booking slot.</li><li>The backend creates an order and returns a human-readable reference such as <code>FIXT-YYYYMMDD-0001</code>.</li><li>The team verifies the request by phone before scheduling / repair.</li><li>Customer checks progress using the order number.</li><li>Payment is intended to happen after the repair is complete.</li></ol>` },
      { title: "Customer-facing frontend", body: `<ul><li>Next.js / React / TypeScript landing page with hero content, service list, trust messaging, and call-to-action buttons.</li><li>Multi-step booking flow for device type, issue, estimate range, service location, address, service slot, and final submission.</li><li>Map-pin location selection built with Leaflet / React-Leaflet and OpenStreetMap tiles.</li><li>Success page showing the generated order number and booking summary.</li><li>Order-tracking page to look up progress by order number.</li><li>Admin login and an operations dashboard are part of the website flow.</li></ul>` },
      { title: "Backend API, data model & operations", body: `<ul><li>FastAPI application exposing public and admin endpoints; Pydantic schemas/validation; SQLAlchemy models; Alembic migrations.</li><li>Customer creation and lookup by phone number; order creation and generated IDs; duplicate/active-order protection; lookup by order number.</li><li>Customer, Order, and OrderStatusEvent data models. Order fields include device/brand/model/issue, estimate and repair cost, district/village/address/landmark/pincode, latitude/longitude, alternate phone, slot, booking date, status, and status event history.</li><li>Admin username/password login and signed HMAC-based bearer-token authentication; order listing/filtering, status updates, timeline view, and deletion flow.</li><li>Repair-cost capture when the order transitions into active work; event history is stored and displayed.</li><li>PostgreSQL is the target database, with SQLite as a local fallback. Tests/tooling in the README include pytest, FastAPI TestClient, HTTPX, ESLint, and npm build validation.</li></ul>` },
      { title: "Lean MVP decisions", body: `<ul><li>No paid OTP system, map-provider subscription, payment gateway, or external authentication provider in the early MVP.</li><li>Manual phone verification is retained as a business-process step.</li><li>Low-cost/free-tier hosting and minimal integrations were planned to reduce the risk of a geographically limited pilot.</li><li>Database connectivity issues with hosted Neon/PostgreSQL led to local SQLite fallback for continued development/testing.</li></ul>` },
      { title: "Development issues & resolutions documented", body: `<p>The project notes describe iterations on Alembic migration ordering, schema/model alignment, duplicate <code>get_db()</code> definitions, legacy null order numbers causing admin serialization trouble, environment variable formatting, hosted database DNS/connectivity, TypeScript auth headers, React lint/state-effect patterns, JSX/encoding issues on Windows, Leaflet client-side rendering, and admin status-update flow.</p><p>Documented fixes included standardizing schemas and fields, making order-number generation/filtering explicit, making admin auth more consistent, handling legacy records safely, sharing the logo component, and using map-based location capture without a paid map provider.</p>` },
      { title: "Validation status & remaining launch work", body: `<p>The supplied README says the booking flow, tracking, API routes, and admin status updates worked end-to-end locally during the project cycle and that backend tests plus frontend lint/build checks were in place. This has not been independently rerun for this portfolio update.</p><ul><li>Production migration safety and database configuration.</li><li>Hosting/domain configuration and CI/CD checks.</li><li>Live smoke tests against the intended production environment.</li><li>Security review, production credentials, operational monitoring, and pilot launch.</li></ul><p>The status is a working local MVP / pre-pilot, not a claim of a live production service.</p>` }
    ]
  },
  groqchat: {
    title: "Groq Chat",
    type: "GENERATIVE AI / STREAMLIT APPLICATION",
    subtitle: "A lightweight browser-based chat interface for streamed Llama responses",
    intro: "I built Groq Chat as a compact Python and Streamlit application. It connects a simple chat UI to Groq-hosted Llama models, lets the user adjust the requested output-token limit, and streams generated text as it arrives. Conversation history stays in the active Streamlit session; the README does not describe database persistence or automated tests.",
    tags: ["Python", "Streamlit", "Groq Python SDK", "Groq API", "Llama"],
    gallery: [],
    sections: [
      { title: "Features implemented", body: `<ul><li>Chat interface with user and assistant message history.</li><li>Model selector for <code>llama-3.1-8b-instant</code> and <code>llama-3.3-70b-versatile</code> as specified in the project README (availability can change).</li><li>Slider for maximum response-token length; its upper bound depends on the selected model.</li><li>Streaming output: generated text is displayed as the Groq API returns it.</li><li>Conversation history is stored in Streamlit session state only while the session is active; it is not saved to a database or guaranteed to persist across sessions.</li><li>Changing models starts a fresh conversation by clearing the session's chat history.</li></ul>` },
      { title: "Implementation & configuration", body: `<p>The application is a single Streamlit module (<code>app.py</code>) with dependencies declared in <code>requirements.txt</code>. It uses Python, Streamlit UI/chat components and session state, the Groq Python SDK, and Groq's hosted inference API.</p><ul><li>Python 3.10 or newer is recommended in the README.</li><li>A Groq API key and internet access are required for API calls.</li><li>The key is read from <code>.streamlit/secrets.toml</code> using the <code>GROQ_API_KEY</code> setting.</li><li>The README instructs developers to keep secrets out of source control; its stated <code>.gitignore</code> excludes the local secrets file.</li><li>Run locally with <code>streamlit run app.py</code>; Streamlit typically prints a URL such as <code>http://localhost:8501</code>.</li></ul>` },
      { title: "Privacy & behavior notes", body: `<ul><li>Prompts and messages are sent to the Groq API to generate replies.</li><li>Conversation history is session-local; there is no database persistence described.</li><li>The token slider limits requested output tokens; it does not change the model context window or guarantee that the reply reaches that length.</li><li>Model availability and service limits can change and should be checked against Groq's current documentation before a public deployment.</li></ul>` },
      { title: "Validation & limitations", body: `<p>The supplied README states that this repository contains a single Streamlit application module and two declared dependencies. It explicitly says automated tests and deployment configuration are not included. API use depends on a valid key, account access to the selected model, and an internet connection.</p>` }
    ]
  },
  voters: {
    title: "Voters Dashboard",
    type: "DATA VISUALIZATION / INTERACTIVE DASHBOARD",
    subtitle: "Demographic data exploration with custom filters",
    intro: "I created the Voters Dashboard to make a voter-demographic dataset easier to inspect. The Python application works with raw and filtered CSV files and presents age-group and gender summaries with interactive filters and charts. The supplied README does not identify the visualization framework, data provenance, deployment setup or quantitative evaluation, so those details remain unspecified.",
    tags: ["Python", "CSV", "Data filtering", "Charts", "Dashboard"],
    gallery: [],
    sections: [
      { title: "Purpose & functionality", body: `<ul><li>Interactive data dashboard for reviewing voter demographics.</li><li>Demographic summaries organized by gender and age groups.</li><li>Custom filtering over datasets to inspect a subset and its metrics.</li><li>Charts and a dashboard-style UI intended to support visual exploration and reporting.</li></ul>` },
      { title: "Files described in the README", body: `<ul><li><code>dashboard.py</code> — main Python script that runs the dashboard.</li><li><code>voters_data - Sheet2.csv</code> — raw voter dataset named in the supplied README.</li><li><code>voters_filtereddata - Sheet1.csv</code> — filtered data file named in the supplied README.</li><li><code>requirements.txt</code> — project dependencies.</li><li><code>.devcontainer/</code> — development-container configuration.</li></ul>` },
      { title: "Tools, verification & scope", body: `<p>The supplied project summary identifies Python and CSV data, but does not name the visualization framework or list automated test results, deployment status, dataset provenance, or quantitative evaluation. These details are intentionally not guessed here.</p><p>If the project is shared publicly, review the data source, privacy considerations, field definitions, and whether the CSV contains personal or sensitive information. Do not publish the raw voter data as part of a public portfolio unless you have confirmed you have permission and the data is appropriately handled.</p>` }
    ]
  },
  kerala: {
    title: "Kerala Ayurvedh Platform",
    type: "WEB + ANDROID + BACKEND / BUSINESS OPERATIONS",
    subtitle: "Product sales, distributor network, order and payment workflows",
    intro: "I worked on Kerala Ayurvedh as a connected product platform: a public Next.js website, an Android-first Expo / React Native app, and an Express / TypeScript API backed by PostgreSQL. The documented implementation covers product and order flows, member applications, role-based distributor networks, manual payment handovers, commission records and admin tooling. The README also lists security, privacy, operational and release checks that must be completed before the platform is treated as production-ready.",
    tags: ["Next.js", "Expo / React Native", "Express", "TypeScript", "Prisma", "PostgreSQL"],
    gallery: [],
    sections: [
      { title: "System architecture", body: `<ul><li><strong>Public website:</strong> Next.js marketing site for the brand, product presentation, support/contact content, and Android app download link. It intentionally does not contain app login, orders, payments, MLM logic, or admin operations.</li><li><strong>Mobile app:</strong> Expo / React Native Android app for customers, distributors, managers, and company administrators.</li><li><strong>Backend:</strong> Node.js, Express, TypeScript, Prisma, and PostgreSQL API used by both apps; local storage is used during development, with Cloudflare R2-compatible storage intended for production.</li><li><strong>Supporting services:</strong> optional SMTP/Brevo approval email configuration, Docker Compose support, Prisma migrations/seeds, and k6 load-test scenarios.</li></ul>` },
      { title: "Roles, hierarchy & network rules", body: `<p>The documented roles are <code>ADMIN</code>, <code>MANAGER</code>, <code>BETA_MANAGER</code>, <code>LEVEL_1</code>, <code>LEVEL_2</code>, and <code>CUSTOMER</code>. The normal hierarchy is Company/Admin → Manager → Level 1 → Level 2 → Customer. A Beta Matrix branch is attached under a Manager through a Beta Manager.</p><ul><li>A Manager can have at most 6 Level 1 agents; a Level 1 agent can have at most 6 Level 2 agents.</li><li>Level 2 agents add customers; customers cannot add downline members.</li><li>Inactive sponsors cannot add downline members.</li><li>A Manager must have 216 confirmed normal customers before a Beta Manager can be created.</li><li>Each Manager can have only one Beta Manager / matrix, and the completed Beta Matrix cannot be created again.</li><li>Backend rules include role ownership/downline scope checks and role-based access for operations.</li></ul>` },
      { title: "Backend capabilities", body: `<ul><li>Central configuration; health/readiness endpoints; graceful Prisma shutdown; JSON body limits; public uploads.</li><li>Phone/password login, bcrypt password hashing, JWT authentication, role middleware, security headers, and rate limiting.</li><li>Member applications, approval/rejection, sponsors, referral codes, statuses, placement types, and approval-credential email support.</li><li>Product catalogue with categories, prices, descriptions, benefits, usage instructions, size/weight, availability, stock, image URLs, soft deactivation, low-stock alerts, and stock adjustments.</li><li>Customer orders and order items, stock decrement on order creation, admin status changes, cancellation stock restoration, and company payment confirmation.</li><li>Manual payment handovers with PENDING, HANDED_OVER, RECEIVED, DISPUTED, and CANCELLED states; validated image/PDF proof uploads, private storage, metadata, and signed proof URLs.</li><li>Normal MLM tree, Beta Matrix, fixed commission ledger, manual adjustments, payment-triggered commission processing, and idempotency via <code>commissionProcessedAt</code>.</li><li>Role-aware Help topics and admin help manager; system monitor for database, storage, business counts, memory, Node version, connections, and warnings; administrative audit logs.</li></ul>` },
      { title: "Android app & public website", body: `<ul><li>Android app includes login, public member application, status lookup, role-aware first-time guide, bottom navigation, and restricted customer views.</li><li>Product-first home dashboard with carousel, categories, featured products, reviews/trust content, quick links, live role counts, and Beta Matrix progress.</li><li>Product catalogue/details, admin product creation/editing, stock adjustments, image uploads, and availability display.</li><li>Applications and direct active-user creation for admins; searchable/filterable/collapsible network tree with zoom/fit/center, legends, role/status styling, and detail modal.</li><li>Payment handovers, proof uploads, payment queues, company confirmation, dispute/cancel actions, and signed proof viewing for admins.</li><li>Admin screens cover users, applications, products, orders, payments, commissions, help, storage, and system monitoring.</li><li>Public site uses environment settings for the APK download URL and API URL; it is designed for public marketing and download access only.</li></ul>` },
      { title: "Documented commission rules", body: `<p>The README defines fixed amounts for confirmed member additions rather than percentages of product prices. Commission creation is tied to company/admin payment confirmation.</p><ul><li>Manager adds a Level 1 agent: Manager receives 1000.</li><li>Level 1 adds a Level 2 agent: Level 1 receives 1000 and Manager / Beta Manager receives 500.</li><li>Level 2 adds a customer: Level 2 receives 1000.</li><li>Beta Level 2 adds a Beta Matrix customer: Level 2 receives 1000 and root Manager receives 500 pending.</li><li>When 216 Beta Matrix customers are confirmed, the root Manager receives 108000 and the matrix is marked complete.</li></ul><p>The original README does not explicitly state a currency symbol for these values, so this portfolio does not add one.</p>` },
      { title: "Order and payment workflow", body: `<ol><li>Customer logs in and requests/orders a product.</li><li>Customer gives manual cash/UPI payment to the Level 2 agent.</li><li>Money is handed from Level 2 to Level 1, then Manager, then Company; each handover can be recorded and supported by uploaded proof.</li><li>Company/Admin confirms receipt.</li><li>Eligible confirmed member payments trigger commission processing.</li><li>Company releases the product and it moves back through the network for delivery.</li></ol><p>The documented order stages cover order creation, collection and transfer handovers, company receipt, product release, network receipt, delivery, and cancellation.</p>` },
      { title: "Testing & operational tooling", body: `<ul><li>Backend type-check/test/build scripts, web lint/type-check/test/production-build scripts, and mobile type-check / Expo build scripts are included.</li><li>k6 scenarios are documented for login, products, MLM tree, referral signup, order creation, admin dashboard, and a 1000-user spike test. The README requires staged load tests before a high-load spike.</li><li>Backend integration tests require a disposable PostgreSQL database via <code>TEST_DATABASE_URL</code>; staging/production data should not be used for integration tests.</li><li>Deployment, backup, restore, privacy, business rules, and production checklist documentation is part of the repository.</li></ul>` },
      { title: "Known gaps before production", body: `<ul><li><strong>Authentication/security:</strong> forgot-password flow/email and stronger password rules; refresh-token/session strategy; persistent/distributed rate limits; more automated permission tests; production duplicate-account dispute workflow.</li><li><strong>Business/operations:</strong> confirm normal Level 2 capacity outside Beta Matrix; finalize cash/UPI handover SOP and commission decisions; improve role-specific order/payment/stock/delivery screens; finalize product details/reviews; improve payout exports and stock workflows; optional application notifications remain.</li><li><strong>Storage/email/monitoring:</strong> configure real production R2 bucket and retention/CDN approach; configure backup storage and test restore; set real Brevo credentials and test delivery; add production logs, uptime alerts, monitoring and backup monitoring.</li><li><strong>Mobile:</strong> remove hardcoded API URL in favour of config; split the large App.tsx; add forgot-password UI; improve session persistence/refresh; polish role-specific status screens; consider pinch zoom and tree virtualization for large networks; finish product-image/detail polish.</li><li><strong>Release validation:</strong> run backend/web/mobile checks against staging/disposable data; verify the production APK uses the HTTPS API; run staged k6 tests; verify backups, rollback, storage, email, monitoring, health/readiness, and permissions; complete any production data purge only through the approved operational process.</li><li><strong>Privacy:</strong> the README notes that Aadhaar/PAN data is collected for applications and that production privacy, consent, retention, and access rules must be finalized before launch. Keep secrets and payment proofs protected.</li></ul><p><strong>Status:</strong> the README explicitly says the platform should not be treated as production-ready until applicable security, operational, and release items are resolved and verified.</p>` }
    ]
  }
};

function renderGallery(project) {
  if (!project.gallery || project.gallery.length === 0) return "";
  const tiles = project.gallery.map((item, index) => `
    <div class="gallery-slot" data-gallery-slot>
      <img src="${item.src}" alt="${project.title}: ${item.label}" loading="lazy">
      <div class="gallery-placeholder">
        <span class="gallery-plus">+</span>
        <span class="gallery-label">${item.label}</span>
        <span class="gallery-path">Add file: ${item.path}</span>
      </div>
    </div>`).join("");
  return `<section class="gallery-section" aria-label="${project.title} project screenshots"><div class="gallery-header"><h3>Project visuals</h3><p>YOUR OUTPUTS / SCREENSHOTS</p></div><div class="gallery-grid">${tiles}</div></section>`;
}

function renderSections(sections) {
  return sections.map((section, index) => `
    <section class="case-section">
      <div class="case-section-head"><span class="case-section-number">${String(index + 1).padStart(2, "0")}</span><h3>${section.title}</h3></div>
      ${section.body}
    </section>`).join("");
}

function renderProjectLinks(links) {
  if (!links || !links.length) return "";
  return `<section class="case-section project-resources"><div class="case-section-head"><span class="case-section-number">↗</span><h3>Project links</h3></div><div class="resource-links">${links.map(link => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}<span>↗</span></a>`).join("")}</div></section>`;
}

const dialog = document.getElementById("projectDialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogType = document.getElementById("dialogType");
const dialogSubtitle = document.getElementById("dialogSubtitle");
const dialogIntro = document.getElementById("dialogIntro");
const dialogTags = document.getElementById("dialogTags");
const dialogGallery = document.getElementById("dialogGallery");
const dialogBody = document.getElementById("dialogBody");
const dialogScroll = document.getElementById("dialogScroll");

function openCaseStudy(key) {
  const project = PROJECTS[key];
  if (!project || !dialog) return;
  dialogTitle.textContent = project.title;
  dialogType.textContent = project.type;
  dialogSubtitle.textContent = project.subtitle;
  dialogIntro.textContent = project.intro;
  dialogTags.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");
  dialogGallery.innerHTML = renderGallery(project);
  dialogBody.innerHTML = renderSections(project.sections) + renderProjectLinks(project.links);
  dialogScroll.scrollTop = 0;
  dialog.querySelectorAll("[data-gallery-slot] img").forEach(img => {
    img.addEventListener("load", () => img.closest("[data-gallery-slot]")?.classList.add("has-image"), { once: true });
    img.addEventListener("error", () => { img.remove(); }, { once: true });
    if (img.complete && img.naturalWidth > 0) img.closest("[data-gallery-slot]")?.classList.add("has-image");
  });
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "open");
  document.body.classList.add("no-scroll");
  document.getElementById("dialogClose")?.focus();
}

function closeCaseStudy() {
  if (!dialog) return;
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
  document.body.classList.remove("no-scroll");
}

document.querySelectorAll("[data-project]").forEach(button => {
  button.addEventListener("click", () => openCaseStudy(button.dataset.project));
});
document.getElementById("dialogClose")?.addEventListener("click", closeCaseStudy);
document.getElementById("dialogDone")?.addEventListener("click", closeCaseStudy);
dialog?.addEventListener("close", () => document.body.classList.remove("no-scroll"));
dialog?.addEventListener("click", event => {
  if (event.target === dialog) closeCaseStudy();
});

// Responsive navigation.
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
menuToggle?.addEventListener("click", () => {
  const isOpen = siteNav?.classList.toggle("open") ?? false;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
siteNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  siteNav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Open navigation");
}));

// Show the user's portrait if the expected file exists; otherwise keep the designed placeholder.
const portraitImage = document.getElementById("portraitImage");
const portraitFallback = document.getElementById("portraitFallback");
if (portraitImage) {
  const showPortrait = () => {
    portraitImage.hidden = false;
    if (portraitFallback) portraitFallback.hidden = true;
  };
  const showPortraitFallback = () => {
    portraitImage.hidden = true;
    if (portraitFallback) portraitFallback.hidden = false;
  };
  portraitImage.addEventListener("load", showPortrait, { once: true });
  portraitImage.addEventListener("error", showPortraitFallback, { once: true });
  if (portraitImage.complete) {
    if (portraitImage.naturalWidth > 0) showPortrait();
    else showPortraitFallback();
  }
}

// Optional CV download stays hidden unless a real PDF path is configured.
const resumeLink = document.getElementById("resumeLink");
if (resumeLink && RESUME_FILE.trim()) {
  resumeLink.href = RESUME_FILE.trim();
  resumeLink.hidden = false;
}


// Configure contact links here. Blank values stay hidden instead of becoming broken links.
function setContactLink(id, value, hrefBuilder) {
  const link = document.getElementById(id);
  if (!link || !value || !String(value).trim()) return false;
  link.href = hrefBuilder(value.trim());
  link.hidden = false;
  return true;
}
const hasEmail = setContactLink("emailLink", CONTACT.email, value => `mailto:${value}`);
const hasGithub = setContactLink("githubLink", CONTACT.github, value => value);
const hasLinkedin = setContactLink("linkedinLink", CONTACT.linkedin, value => value);
const contactActions = document.getElementById("contactActions");
const contactLayout = contactActions?.closest(".contact-layout");
if (contactActions && !(hasEmail || hasGithub || hasLinkedin)) {
  contactActions.hidden = true;
  contactLayout?.classList.add("contact-layout--solo");
}
const currentYear = document.getElementById("currentYear");
if (currentYear) currentYear.textContent = new Date().getFullYear();
