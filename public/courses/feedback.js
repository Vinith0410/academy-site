 const feedbackData = [
      {
        "name": "Emma Hart",
        "course": "Front End Development",
        "role": "student",
        "institution": "Greenfield Institute of Technology",
        "feedback": "The Front End course completely changed the way I approach web design. The modules were deeply practical, and I learned to build responsive layouts, animations, and accessible UIs. My confidence with HTML, CSS, and JavaScript skyrocketed. The mentors were patient and gave me real-world assignments that made learning fun.",
        "rating": 5
      },
      {
        "name": "Eddie Johnson",
        "course": "Full Stack Development",
        "role": "employee",
        "company": "ByteWave Solutions",
        "feedback": "I work as a junior developer and this Full Stack course was a career booster. I understood how backend and frontend connect together, learned Node.js, Express, and MongoDB in depth. The examples were work-related, so I could apply them directly to my projects. It's definitely the best investment in my learning journey.",
        "rating": 5
      },
      {
        "name": "Jonathan Doe",
        "course": "UI & UX Design",
        "role": "student",
        "institution": "National Design Academy",
        "feedback": "UI & UX design sessions were well-structured. Each topic helped me understand the user-first mindset — from wireframes to usability testing. I liked how instructors gave feedback after every assignment. This course made me confident to present my design ideas to clients.",
        "rating": 5
      },
      {
        "name": "Mike Edward",
        "course": "Python Web Development",
        "role": "employee",
        "company": "DataCraft Labs",
        "feedback": "The Python Web Development course was hands-on and practical. I built a real-world Flask app from scratch, learning about templates, APIs, and databases. The mentor explained debugging and optimization clearly. It’s an excellent course if you want to bridge theory with actual projects.",
        "rating": 5
      },
      {
        "name": "A. Patel",
        "course": "Data Science",
        "role": "student",
        "institution": "Karnataka College of Engineering",
        "feedback": "Data Science course covered everything from Python basics to machine learning models. The teaching was step-by-step, and the labs were very helpful. I especially liked the real-world case studies. It inspired me to pursue an internship in analytics.",
        "rating": 5
      }
    ];

    // ✅ Function to Create Cards (updated to use a single scroll wrapper)
    function createFeedbackCards(data) {
      const container = document.getElementById("feedbackContainer");
      container.innerHTML = "";

      data.forEach(item => {
        const card = document.createElement("div");
        card.className = "feedback-card";

        // affiliation either company or institution
        const affiliationText = item.role === "student"
          ? item.institution || ""
          : item.company || "";

        // Build markup
        card.innerHTML = `
          <div class="profile-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" fill="#fff"/>
              <path d="M3 20c0-3.866 3.582-7 9-7s9 3.134 9 7v1H3v-1z" fill="#fff"/>
            </svg>
          </div>

          <span class="course-pill">${item.course}</span>

          <!-- new single scroll wrapper containing the feedback message + meta (name/role/affiliation/stars) -->
          <div class="feedback-scroll" tabindex="0" aria-label="Student feedback and details">
            <div class="feedback-text">“${item.feedback}”</div>

            <div class="feedback-meta">
              <p class="feedback-name">${item.name}
                <span class="role-pill">${item.role}</span>
              </p>

              ${affiliationText ? `<p class="affiliation">${affiliationText}</p>` : ""}

              <div class="stars" aria-hidden="true">${"★".repeat(item.rating)}</div>
            </div>
          </div>
        `;

        container.appendChild(card);
      });
    }

    // Initialize
    createFeedbackCards(feedbackData);