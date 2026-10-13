# Project case-study inventory

The full expandable case studies are embedded in `script.js` and rendered from the project's **Explore case study** action. This guide records the source scope and the evidence boundaries so future edits remain consistent. The project README descriptions supplied by the owner are the basis; repositories were not independently audited during the portfolio design task.

## 1. Reality AI — real-estate insight platform

**Documented context:** Applied AI work in the context of a four-month AI internship at Infosys. Notes include a 27-feature pricing/contract matching requirement, SpaceNet 2 imagery / AOI_2_Vegas path checks, U-Net building segmentation, a ResNet-18 property-condition classifier, a price regressor, and a Zillow-related forecasting component.

**Portfolio stance:** Keep the project's existence and general purpose visible, but verify the final implementation status, data provenance, synthetic-data removal/replacement, exact individual contribution, and real model metrics against the current repository and experiment artifacts. No performance score or production valuation claim is invented.

**Images:** `reality-ai-01.png`, `reality-ai-02.png`, `reality-ai-03.png`.

## 2. AirTutor — RL-based adaptive pedagogical decision system

**Goal:** Investigate whether a reinforcement-learning policy can choose a tutoring intervention based on observable learner history in a simulated environment, instead of using only fixed heuristics. An LLM is a delivery mechanism for natural-language dialogue and does not select the pedagogical action.

**Implemented scope described in README:** Tabular Q-learning, a 320-state representation using five observable features, five actions (`EXPLAIN`, `EXAMPLE`, `HINT`, `PRACTICE`, `REVIEW_PREREQUISITE`), a simulated learner, a tested POMDP information barrier, decoupled teacher/evaluation code, a provider-agnostic LLM adapter layer, and a Streamlit demo. Optional extensions include a continuous 14-D DQN, BKT tracking, and RAG ingestion.

**Reported evidence:** The README reports 86 tests passed and a held-out evaluation on 100 simulated learners, with training seeds 0–299 and evaluation seeds 10000–10099, across five RL seeds. Observable gain: RL +0.115 (SD 0.077), Rule +0.052 (SD 0.104), Random +0.019 (SD 0.055), Fixed −0.057 (SD 0.034). The README also notes that the Rule baseline has higher true latent gain than RL under Reward v1 and that the RL advantage vanishes for a harder-curriculum condition (reported Δ −0.0075). These are simulated results, not human-learning validation.

**Known boundaries:** No reported human-subject pilot; real-user validation and off-policy evaluation remain future work. Live external LLM calls were not part of the described verification. The core tabular research path is CPU-friendly; DQN and RAG dependencies are optional.

**Images:** `airtutor-01.png`, `airtutor-02.png`, `airtutor-03.png`.

## 3. HORA — retail video dwell / kinematic action research prototype

**Implemented scope described in README:** YOLO11n object detection; YOLO11n-Pose 17-keypoint extraction; greedy one-to-one person/pose association at IoU 0.5; ByteTrack; polygon-based shelf-zone dwell analytics using the bottom-centre foot coordinate; 21-dimensional kinematic features over a 30-frame wrist/torso window; Random Forest classes `BROWSE`, `PICK`-like, and `RETURN`-like; offline CLI, OpenCV rendering, Streamlit dashboard, and Parquet export/schema validation.

**Reported evidence:** The README reports 24 tests and synthetic classification evaluation on 600 generated trajectories (200 per class), seed 42, 80/20 stratified split. Macro precision, recall and F1 are all listed as 1.0000. The source README explicitly says these figures validate separability on idealized synthetic trajectories, not real-world retail action recognition.

**Known boundaries/privacy:** It does not verify physical pickup or return, inventory change, purchase, checkout, payment, or theft. It does not use facial recognition or demographic classification. Real-world retail accuracy is not established in the supplied README.

**Images:** `hora-01.png`, `hora-02.png`, `hora-03.png`.

## 4. FIXT — doorstep mobile repair booking MVP

**Goal and workflow:** Validate demand for a hyper-local mobile repair service in Jagtial, Telangana. Customers book online, provide device/issue/address/map location/slot details, receive a generated reference such as `FIXT-YYYYMMDD-0001`, and track status. The team manually verifies the request by phone and payment is planned after repair.

**Implemented scope described in README:** Next.js, React, TypeScript and Tailwind customer frontend; Leaflet/OpenStreetMap location pinning; FastAPI backend; SQLAlchemy models for Customer, Order and OrderStatusEvent; PostgreSQL target with SQLite local fallback; generated order IDs; duplicate/active-order protection; lookup/tracking; status timeline; HMAC-signed bearer-token admin authentication; admin listing/filtering/status updates and deletion flow; repair cost capture; pytest / FastAPI TestClient / HTTPX and frontend lint/build checks.

**Development issues documented:** Alembic migration sequencing, schema-field alignment, duplicate database dependency functions, legacy null order numbers, environment settings, remote database DNS/connectivity, TypeScript/auth headers, React lint/state updates, Windows JSX/encoding, Leaflet loading, and admin/status workflow integration. README notes document fixes around schema consistency, order ID generation/filtering, admin auth, legacy records, logo reuse, and map-based location without a paid provider.

**Status:** Described as working locally/end-to-end in the project cycle, but production migration/deployment, CI/CD, live smoke tests and the pilot launch remain. No claim of a live production service is made.

## 5. Groq Chat — streaming Llama chat application

**Implemented scope described in README:** Python + Streamlit UI, Groq Python SDK/API, selectable `llama-3.1-8b-instant` and `llama-3.3-70b-versatile`, configurable maximum response-token slider, streamed assistant responses, session-state conversation history, and history reset on model change.

**Setup/data boundaries:** Requires a Groq API key and internet access; reads `GROQ_API_KEY` through Streamlit secrets. Prompts/messages are sent to Groq. History is not database-persisted and is limited to the active Streamlit session. The slider controls requested output tokens, not the model context window or guaranteed reply length.

**Status/limits:** The supplied README says the repository contains a single app module and declared dependencies, with no automated tests or deployment configuration included. Model availability/service limits can change.

## 6. Voters Dashboard — demographic data exploration

**Documented scope:** Python-based interactive dashboard for voter-demographic analysis, age groups, gender breakdowns, custom filtering, and charts/filtered metrics. Files named in the supplied description include `dashboard.py`, a raw voter CSV, a filtered voter CSV, `requirements.txt`, and `.devcontainer/`.

**Missing details not guessed:** The supplied description does not identify the visualization framework, automated test results, deployment state, dataset source/licence, or quantitative evaluation. Confirm data rights and ensure no personal/sensitive voter data is exposed before publication.

## 7. Kerala Ayurvedh Platform — web, Android and backend operations

**Architecture described in README:** Public Next.js marketing/download website; Expo/React Native Android app; Node.js/Express/TypeScript API using Prisma and PostgreSQL. R2-compatible storage is intended for production; local storage supports development; SMTP/Brevo approval email is optional.

**Roles and network:** Admin, Manager, Beta Manager, Level 1, Level 2 and Customer; normal hierarchy is Admin → Manager → L1 → L2 → Customer, with a Beta Matrix branch under a Manager. A Manager can have up to six L1 agents and L1 up to six L2 agents; Level 2 adds customers, customers cannot create downline, inactive sponsors cannot add downline, and the README requires 216 confirmed normal customers before a Beta Manager may be created. One Beta Matrix per Manager is described.

**Backend scope:** Authentication, bcrypt/JWT/role middleware, security headers and rate limiting; applications and approval/rejection; sponsors/referral codes; product/stock/catalogue management; customer orders; manual payment handovers with private proof uploads and signed URLs; normal and Beta Matrix network management; fixed commission ledger and manual adjustments; help topics; system monitor; admin audit logs; health/readiness; migrations, seeds and storage abstraction.

**Android app scope:** Login, applications/status lookup, onboarding guide, role-aware navigation, product home/catalogue/detail views, product/stock admin, network creation, collapsible/searchable tree, payment handover/proofs, orders/commissions/help/storage/system monitoring administration.

**Commission rules in the README:** Manager adding Level 1: Manager receives 1000; Level 1 adding Level 2: Level 1 receives 1000 and Manager/Beta Manager 500; Level 2 adding customer: Level 2 receives 1000; Beta Level 2 adding Beta Matrix customer: Level 2 receives 1000, root Manager 500 pending. When 216 Beta Matrix customers are confirmed, root Manager receives 108000. Currency symbols are not inferred because the supplied README lists only numeric amounts.

**Operations/testing scope:** Backend/web/mobile test/build/type-check scripts, k6 scenarios, deployment/backup/restore/privacy/production documentation. Integration tests require disposable PostgreSQL data. Order/payment flow includes manual cash/UPI collection, recorded handovers, company confirmation, commission processing, product release, and network delivery stages.

**Known launch blockers:** Forgot-password flows, stronger password rules, refresh-token/session design, distributed rate limiting, more permission tests, duplicate-account dispute process, business SOP decisions, finalized product data/reviews, payout/reporting and status-screen polish, production R2/email/backup/monitoring setup, mobile cleanup/session and large-tree handling, full staged load tests and release verification. The README notes collection of Aadhaar/PAN in applications and says production privacy/consent/retention/access rules must be finalized. It explicitly says not to treat the platform as production-ready until applicable gaps are resolved.


## Portfolio framing update
The homepage now gives primary visual priority to Reality AI, AirTutor, and HORA; FIXT, Groq Chat, Voters Dashboard, and Kerala Ayurvedh appear under additional coded builds. Project-card descriptions are narrated in first person based on the supplied project documentation and the user’s statement that they built these projects by coding. Reality AI is associated with the Infosys AI internship. Three Infosys Springboard certificates are now included with visible previews and links to the original PDFs: Computer Vision 101, Deep Learning for Developers, and Artificial Intelligence Primer Certification.
