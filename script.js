// Greeting function to display a message based on the time of day
function displayGreeting() {
  let greeting = document.getElementById('greeting');
  let currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    greeting.innerText = "Good Morning, welcome to my website!";
  } else if (currentHour >= 12 && currentHour < 15) {
    greeting.innerText = "Good Afternoon, welcome to my website!";
  } else if (currentHour >= 15 && currentHour < 19){
    greeting.innerText = "Good Evening, welcome to my website!";
  } else{
    greeting.innerText = "Good Night, welcome to my website!";
  }
}

// Apply theme when the page loads
function applyTheme() {
  let savedTheme = localStorage.getItem('theme') || 'light'; // Default to light theme
  document.documentElement.setAttribute('data-theme', savedTheme);
}

// Ensure both functions run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  displayGreeting();
  applyTheme();
});


  function validateSurvey() {
    // Validate satisfaction (Radio buttons)
    let satisfaction = document.querySelector('input[name="satisfaction"]:checked');
    if (!satisfaction) {
      alert("Please select how satisfied you are with my projects.");
      return false;
    }
  
    // Validate projects (At least one checkbox should be selected)
    let projects = document.querySelectorAll('input[name="projects"]:checked');
    if (projects.length === 0) {
      alert("Please select at least one project you find interesting.");
      return false;
    }
  
    // If everything is valid, show success message
    document.getElementById('survey-response').innerText = "Thank you for your feedback!";
    return false; // Prevent form submission for now
  }
  // Function to handle form submission and validation
   document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10,15}$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number (10-15 digits).");
            return;
        }

        document.getElementById("formMessage").textContent = "Message sent successfully!";
        form.reset();
    });
});

// Existing toggleDetails function remains...

  function toggleDetails(id) {
    const detail = document.getElementById(id);
    if (detail.style.display === "none" || detail.style.display === "") {
        detail.style.display = "block";
    } else {
        detail.style.display = "none";
    }
}


// Function to toggle between light and dark themes
function toggleTheme() {
  let currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

// Function to apply saved theme when page loads
function applyTheme() {
  let savedTheme = localStorage.getItem('theme') || 'light'; // Default to light theme
  document.documentElement.setAttribute('data-theme', savedTheme);
}

// Apply theme when the page loads
window.onload = applyTheme;

