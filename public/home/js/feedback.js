 const feedbackData = [
        {
        "name": "Surya",
        "course": "MERN Stack Development",
        "role": "Employee",
        "company": "Caseyug Groups",
        "feedback": `
          Vinith is a highly skilled and supportive technical trainer.
          He guided me effectively while working on a real-world project.
          His practical approach and real-time problem solving improved my understanding.
          He was always available to support and clarify doubts during development.
          Overall, his mentorship played a key role in my technical growth.
        `,
        "rating": 5
      },
      {
        "name": "Kowsika",
        "course": "MERN-Stack Development",
        "role": "student",
        "institution": "NSN collage of Engineering & Technology",
        "feedback":`
        MERN Stack online class romba super-ah irundhudhu, and enaku neraya knowledge kidaichudhu.
        Trainer way of teaching romba clear-ah, simple-ah irundhudhu, so ellame easy-ah purinjiduchu.
        Also HTML, CSS, JAVA, Bootstrap,MongoDB, Express, React, Node nu oru oru topic-um trainer step by
        step explain panninadhu nala, naan confident-ah learn panna mudinjadhu. Class recordings irundhadhu
        nala eppo venalum revise pannalam. Online doubt support um sema helpful. Eppo doubt ketalum, immediate-ah reply
         kuduthanga. Andha support nala learning experience innum smooth-ah irundhudhu. Class la kudutha examples,
          explanations ellame real-time ku romba useful-ah irundhudhu.
        MERN stack-la work panna romba confidence kidaichudhu. Naan inga join pannadhu romba correct decision nu feel pannuren.
         Future-la innum advanced classes kuduthalum definitely join panren. Overall-ah, indha MERN Stack online class en life-la
          oru valuable learning experience. Trainer-kum online team-kum romba thanks for all the support and guidance.
        `,
        "rating": 5
      },
       {
        "name": "Deepa",
        "course": "UI UX Design",
        "role": "student",
        "institution": "NSN collage of Engineering & Technology",
        "feedback": `
        I wanted to share my feedback for the one-week Figma live session. This session helped us so much  every doubt was
        cleared immediately, and the learning felt very easy and comfortable. At first, when the course was announced,
        no one was really interested. But by the end of the week, everyone genuinely wished the sessions could continue
         because we enjoyed them so much.
        We learned sketching, Figma basics, and many useful concepts in a fun and engaging way. It was a joyful and
        meaningful learning experience for all of us.
        Thank you so much, anna, for your effort and guidance. We are truly grateful.
        `,
        "rating": 5
      },
      {
        "name": "Deepika",
        "course": "Full Stack Development",
        "role": "student",
        "institution": "NSN collage of Engineering & Technology",
        "feedback":`
        Your teaching method is totally different because you both only provide the practical activities to
        improve our skills.Your 10 days fullstack development course is clearly understood to me.And it is very useful
         for my career.Both have cleared My doubts in many times.So your way of full stack Develoment teaching is also
          improving my interest to creats the own coding in laptop. So Thankyou for your greate effort To improving My Skills...
          💫It is a valuable opportunity for me..🪄Finally Thank You For Your great job...
        `,
        "rating": 5
      },
      {
        "name": "Malararasi",
        "course": "Full Stack Development",
        "role": "student",
        "institution": "NSN collage of Engineering & Technology",
        "feedback": `
          Thank you so much for the incredible 10 fullstack course .I learned so much and I really appreciate your
          teaching style.you explained complex concepts clearly and made the learning enjoyable.The course was very
          organised with an clear progress of topics which made learning more interactive and enjoyable I feel much
          more confidence in my abilities now thanks to you 😊
        `,
        "rating": 5
      }, {
        "name": "Jansivijila",
        "course": "PHP Development",
        "role": "student",
        "institution": "NSN collage of Engineering & Technology",
        "feedback": `
        PHP was used to create a website, especially on the server side. Basically, everyone said that PHP was very
         difficult to learn, but you taught this topic in an easy way, and we easily understood the concept.
         We can now develop server-side applications easily; you were very helpful during our development time.
          You cleared our doubts again and again and wanted to clear our doubts until the concept was understood.
           Your teaching way was very nice; continue this way. Your teaching was helpful for all PHP developers.
           Thank you for this opportunity to learn the PHP.
        `,
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