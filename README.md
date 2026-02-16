# KreativeWeb3d
## Real-Time Telemetry Pipeline & Secure AI Architecture

What began as an exploration into modern UI/UX design evolved into a sophisticated mini full-stack application with high level security architecture. This project demonstrates the seamless integration of a live React frontend, a Node.js backend, and a cloud-based database (Supabase), complemented by a real-time monitoring dashboard and AI-driven user interaction. This project showcases Defensive Cloud Architecture, implementing proxy-layer validation, RLS policies, and encrypted data persistence. I found that by adhering to high engineering standards in full-stack builds, I was implementing the foundational principles of Defensive Architecture.

## Functionality

AI Integration: Built a custom interface leveraging the OpenAI GPT-4.0 API. The system handles asynchronous user requests via a secure input field, returning low-latency, live responses from the model.

Real-Time Telemetry: Implemented custom React Hooks to capture granular user telemetry (X and Y coordinates). This data is mapped to specific DOM sections to analyze user behavior and interaction heatmaps.

Data Pipeline: Developed a pipeline where telemetry data is transmitted from the client-side to a web server and persisted in a Supabase (PostgreSQL) database.

Live Analytics Dashboard: Constructed a dedicated Next.js Dashboard that fetches and visualizes database events in real-time, providing an "at-a-glance" view of active user movement across the landing page.

## Architectural Decisions

The build utilized Vite for its high-performance React build pipeline, complementing my existing tech stack. Once I began capturing frontend telemetry requirements, it became obvious that sending data directly from the client-side to the database would conflict with Row-Level Security (RLS) best practices.

To mitigate the risk of an insecure connection, I architected a proxy server using Express.js. This approach kept RLS policies intact while providing a layer to validate data in transit from the frontend to the backend. I utilized Render to host the server, receiving requests and implementing data securely into Supabase.

Supabase offered a robust PostgreSQL-based solution capable of handling the high-volume data ingestion (50,000+ rows) required for tracking user movements. My decision was compounded by my consultancy experience, as PostgreSQL is a well-established, open-source technology. Finally, to ensure seamless data integrity, I maintained strict variable consistency across the entire stack—from initial capture to final database persistence.

## Key features include:

Real-Time Telemetry & Event Logging: This console output demonstrates the live synchronization of user interaction data. Client-side events are captured via a custom React hook (useHeatmapTracker), brokered through a secure Express.js. The events are logged and sent to a Supabase database (captured screenshot below).

<img width="2387" alt="Telematic logging Reakt Web Design - Google Chrome" src="https://github.com/user-attachments/assets/9b5c6709-4abe-4477-9a61-b8ff3c217c43" />

Dynamic AI Engine: Developed a real-time interaction layer using the OpenAI GPT-4 API. This implementation manages complex asynchronous states, ensuring that "streamed" responses are handled efficiently without blocking the main UI thread.

Time-Travel State Engine: Created a "Travel Through Time" immersive experience triggered via the Future Motion gateway. This utilizes advanced CSS animations and React state transitions to manipulate the DOM dynamically, providing a high-performance, cinematic user experience.


Engagement Architecture: Strategically implemented high-conversion Calls to Action (CTAs), including an interactive "Get Started" module designed to handle user intent and navigation flow.

Interactive Micro-services & UI Discovery: Designed a "hidden feature" system using hover-state logic. Mini-card components utilize conditional rendering and transition libraries to reveal expanded content (such as the 'About Me' section), demonstrating a sophisticated approach to information density and user engagement.

Service-Oriented Infrastructure: Built a modular "Contact & Packages" system, allowing for structured user inquiries. This section acts as the primary interface for user-to-server communication, demonstrating the ability to build functional, service-oriented web applications.

## Tech Stack

The project was built using the following technologies:

Frontend Development: React (with Vite for fast builds), JavaScript (ES6+), HTML5, CSS3

Styling & Layout: TailwindCSS for responsive design and modern UI components

Animations & Interactivity: GSAP Animation and Framer Motion for smooth, dynamic user experiences

### The Secure Pipeline
### Backend & Infrastructure:

Node.js & Express.js: Developed a custom middleware server to act as a secure proxy between the client-side UI and third-party APIs.

Supabase (BaaS): Leveraged for secure database management, utilizing Row-Level Security (RLS) and JWT-based authentication to ensure data integrity.

Dotenv: Implemented for secure Environment Variable management, ensuring sensitive API keys (OpenAI, Supabase Service Roles) remain isolated from the client-side environment.

## Security & Observability:

API Masking & Proxying: Architected a "Server-Side Broker" pattern to prevent client-side exposure of high-privilege credentials.

Input Validation & Sanitization: Implemented guard clauses and type-checking on the backend to mitigate Prompt Injection and malformed data attacks.

User Behavior Telemetry: Integrated a custom UBA (User Behavior Analytics) tracker to log real-time event data for security auditing.

## Screenshot

Here is a screenshot of the web application

<img width="2830" alt="localhost_5175_ (1)" src="https://github.com/user-attachments/assets/323a6346-801f-4e76-86b1-57ea939bace9" />


