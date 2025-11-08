 const events = [
      {
        title: "AI & Innovation Workshop",
        desc: "An inspiring session focused on Artificial Intelligence innovations transforming the education and tech landscape globally.",
        date: "Nov 25, 2025 | 6:30 PM IST",
        image: "./image/pythonweb.jpg",
        mode: "Online (Virtual Event)",
        speaker: "Prof. Kavitha Ramesh",
        host: "Bright Future Academy",
        session: "Interactive Live Session",
        topics: [
          "AI Applications in Education",
          "Machine Learning Fundamentals",
          "Building a Career in AI",
          "Real-World AI Innovations"
        ],
        registerOpen: true
      },
      {
        title: "Web Development Bootcamp",
        desc: "Join our hands-on session and learn how to build modern responsive websites using HTML, CSS, and JavaScript.",
        date: "Dec 10, 2025 | 5:00 PM IST",
        image: "./image/pythonweb.jpg",
        mode: "Offline (Campus Hall 2)",
        speaker: "Mr. Arjun Menon",
        host: "Bright Future Academy",
        session: "Project Based Workshop",
        topics: [
          "HTML5 & CSS3 Essentials",
          "JavaScript ES6 Concepts",
          "Responsive Design",
          "Mini Project Development"
        ],
        registerOpen: false
      },
       {
        title: "Frontend Development Bootcamp",
        desc: "Join our hands-on session and learn how to build modern responsive websites using HTML, CSS, and JavaScript.",
        date: "Dec 10, 2025 | 5:00 PM IST",
        image: "./image/pythonweb.jpg",
        mode: "Offline (Campus Hall 2)",
        speaker: "Mr. vinith",
        host: "Bright Future Academy",
        session: "Project Based Workshop",
        topics: [
          "HTML5 & CSS3 Essentials",
          "JavaScript ES6 Concepts",
          "Responsive Design",
          "Mini Project Development"
        ],
        registerOpen: true
      }
    ];

    const container = document.getElementById("eventContainer");

    events.forEach(event => {
      const topicsList = event.topics.map(topic => `<li>${topic}</li>`).join("");
      const footerHTML = event.registerOpen
        ? `<div class="event-register-btn"><a href="#" class="register-btn"><span>Register Now</span><i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>`
        : `<div class="event-register-btn"><a href="#" class="register-btn register-closed-btn"><i class='bx bx-x-circle'></i> Registration Closed</a></div>`;

      const card = `
        <div class="event-card">
          <div class="event-image" style="background-image: url('${event.image}')">
            <div class="event-date"><i class='bx bx-calendar'></i> ${event.date}</div>
          </div>
          <div class="event-content">
            <h2 class="event-title"><i class='bx bx-bulb'></i> ${event.title}</h2>
            <p class="event-desc">${event.desc}</p>
            <div class="event-details">
              <div><i class='bx bx-map'></i> ${event.mode}</div>
              <div><i class='bx bx-user'></i> Speaker: ${event.speaker}</div>
              <div><i class='bx bx-microphone'></i> Host: ${event.host}</div>
              <div><i class='bx bx-book-content'></i> Mode: ${event.session}</div>
            </div>
            <div class="topics">
              <strong>Topics Covered:</strong>
              <ul>${topicsList}</ul>
            </div>
            ${footerHTML}
          </div>
        </div>
      `;
      container.innerHTML += card;
    });