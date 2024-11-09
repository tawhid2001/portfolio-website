function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleExtracurriculars() {
  const extracurriculars = document.getElementById("extracurriculars");
  const btn = document.querySelector(".extra-btn");
  if (extracurriculars.style.display === "none") {
    extracurriculars.style.display = "block";
    btn.innerText = "Hide Extra-Curriculars";
  } else {
    extracurriculars.style.display = "none";
    btn.innerText = "Show Extra-Curriculars";
  }
}

// JavaScript for Modal

function openModal(projectName) {
  let title = projectName;
  let description;

  if (projectName === "Project One") {
    description = `
            <strong>Project Overview:</strong> Enlighten Institute<br>
            Enlighten Institute is an intuitive e-learning platform that makes online education easy and engaging for teachers and students. With a streamlined design and user-friendly tools, Enlighten Institute helps teachers manage courses, lessons, and student progress, while providing students with a clear path to learning success.<br><br>
            <hr>
            <br>
            <strong>Key Features</strong><br>
            <ul>
                <li><strong>Role-Based Accounts and Easy Sign-In</strong><br>
                    - Separate accounts for teachers and students, with distinct permissions.<br>
                    - A secure login system ensures that students and teachers only see what’s relevant to them.
                </li>
                <li><strong>Effortless Course and Lesson Management</strong><br>
                    - Teachers can quickly create courses, add lessons, and track student progress.<br>
                    - Courses are automatically linked to the teacher who creates them, saving time on setup.
                </li>
                <li><strong>Student Enrollment and Progress Tracking</strong><br>
                    - Students can browse and enroll in courses easily, with a clear view of their progress.<br>
                    - A built-in progress tracker shows students their completion status, motivating them to keep going.
                </li>
            </ul>
            <br>
            <hr>
            <br>
            <strong>Technologies Used</strong><br>
            Backend: Django & Django REST Framework (DRF)<br>
            Frontend: HTML, CSS, JavaScript, and Bootstrap<br>
            Database: PostgreSQL<br>
            File Storage: Imgbb API for Profile Pictures<br>
            Deployment: Vercel<br><br>
            <hr>
            <br>
            <strong>Summary</strong><br>
            Enlighten Institute is designed to make online education simpler, more organized, and accessible.
        `;
  } else if (projectName === "Project Two") {
    description = `<h2>Overview of VolunteerHub Project:</h2>
    <p>VolunteerHub is a dynamic platform designed to facilitate community engagement by connecting individuals with volunteer opportunities. The platform allows users to both organize and participate in social projects, making it easy for people to contribute to meaningful causes and engage with their communities. By providing a central hub for volunteer activities, VolunteerHub fosters a collaborative environment for positive change and allows users to track their contributions and the impact of their efforts.</p><br>
    <hr>
    <br>
    
    <h3>Key Features:</h3>
    <ul>
        <li><strong>User-Friendly Project Organization:</strong> Users can create and manage volunteer projects effortlessly. Each project page includes key details, such as project objectives, location, and timelines, to help volunteers understand the purpose and scope of the initiative.</li>
        <li><strong>Participation and Tracking:</strong> Users can browse available volunteer opportunities, join projects, and track their involvement. The platform enables easy participation with clear instructions and updates for each project.</li>
        <li><strong>Community Feedback and Rating System:</strong> Volunteers can rate and leave feedback on the impact of the projects they participated in. This feature helps organizers gather valuable insights and continuously improve future projects.</li>
        <li><strong>Profile-Based Activity Dashboard:</strong> Each user has a profile dashboard that highlights their organized and participated projects, making it easy to view their contributions and track their progress over time.</li>
        <li><strong>Intuitive Join Request Process:</strong> Interested volunteers can send join requests for projects, which organizers can easily approve or reject. This streamlined process ensures that projects receive the right support from committed volunteers.</li>
    </ul><br>
    <hr><br>

    <h3>Technologies Used:</h3>
    <ul>
        <li><strong>Backend:</strong> Node.js and Express - Provides a scalable and robust backend framework to handle user data, manage volunteer requests, and process project information efficiently.</li>
        <li><strong>Frontend:</strong> React and Bootstrap - React delivers a responsive and interactive user interface that allows users to navigate the platform with ease, while Bootstrap ensures a consistent and visually appealing layout across different devices.</li>
        <li><strong>Database:</strong> MongoDB - Stores user profiles, project details, and feedback data securely, enabling efficient data retrieval and storage for all volunteer activities.</li>
        <li><strong>Deployment:</strong> Vercel - Hosts the platform for reliable, fast, and globally accessible performance.</li>
    </ul><br>
    <hr><br>
    <h3>Summary:</h3>
    <p>VolunteerHub empowers communities by connecting volunteers with projects that need their help, making it easier than ever to get involved and make a difference. With its easy-to-use interface, streamlined project management features, and real-time tracking, the platform enables individuals and organizations to collaborate and maximize their collective impact. Whether you're an organizer or a volunteer, VolunteerHub provides the tools you need to participate in and create social change.</p>
    `;
  } else if (projectName === "Project Three") {
    description = `<strong>Guess My Number</strong> is a fun guessing game...<br><br>
                       <strong>Key Features:</strong><br>
                       - Random number generator<br>
                       - User interaction with clues<br>
                       - Scoring system<br><br>
                       <strong>Technologies Used:</strong><br>
                       Frontend: HTML, CSS, JavaScript<br>
                       Deployment: GitHub Pages`;
  } else {
    description = "Project details not found.";
  }

  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDescription").innerHTML = description; // Use innerHTML to render HTML tags
  document.getElementById("detailsModal").style.display = "block";
}

function closeModal() {
  document.getElementById("detailsModal").style.display = "none";
}

// Optional: Close modal when clicking outside content
window.onclick = function (event) {
  const modal = document.getElementById("detailsModal");
  if (event.target == modal) {
    closeModal();
  }
};
