📄 README – Personal Portfolio Website with Survey and Theme Switcher

👨‍💻 Project Title: Personal Portfolio Website
Developer: T23-03-18369 (HIS 2)
Year: 2025

🔍 Project Overview
This is a personal portfolio website that presents the developer’s projects, biography, skills, and a user feedback system. It includes modern web development features such as:

Light and dark theme toggle (with persistent settings using localStorage)

A responsive design adaptable to mobile and desktop views

A feedback survey form with validation

A contact form with email and phone validation



 🛠️ Tools Used
HTML5 – Structure and content of the site  
CSS3 – Styling using Flexbox and Grid for responsiveness  
JavaScript – For form validation, time-based greetings, and user interaction

 ✅ Key Features Implemented
 Multi-page website with:
 Home, About, Survey, Projects, and Contact pages
 Responsive layout across devices
 Time-based greeting message (e.g., "Good Morning", "Good Afternoon", etc.)
 JavaScript-powered form validation
 Clean and consistent design across pages

⚙️ Challenges Faced and How They Were Solved
Responsiveness Issues on Mobile Devices  
  Solution: Applied CSS media queries and used flexible units like %, `vh`, `vw`.

Greeting Logic Not Displaying Properly  
  Solution: Used `Date()` object in JavaScript and corrected the conditional flow.

Forms Not Validating as Expected  
  Solution: Used JavaScript event listeners and added HTML5 validation attributes like `required`.

 
📂 File Structure
/project-root
│
├── index.html              → Home page (introduction and navigation to all sections)
├── about_me.html              → "About Me" page with personal background and skills
├── survey.html             → Survey form page for collecting feedback/input
├── projects.html           → Portfolio or projects page 
├── contact.html            → Contact form 
│
├── style.css               → External stylesheet for all pages (shared design/theme)
├── script.js               → JavaScript for:
│                             - Form validation
│                             - Time-based greetings
│                             - Project toggling (if any)
│                             - Other interactivity
│
└── images/                 → Images, icons, or other media used across all pages

 
📋 How It Works
When the page loads, a greeting message appears based on current time.

The theme is automatically applied based on saved preferences.

Users can fill out the survey or contact form – both include JavaScript validation.

The theme toggle button stores the user's preference in localStorage for future visits.

