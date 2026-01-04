 const feedbackData = [
       {
        "name": "Kowsika",
        "course": "MERN Stack Development",
        "role": "student",
        "institution": "NSN collage of Engineering & Technology",
        "feedback":`
        MERN Stack online class romba super-ah irundhudhu, and enaku neraya knowledge
         kidaichudhu. Trainer way of teaching romba clear-ah, simple-ah irundhudhu, so ellame easy-ah purinjiduchu.
         Also HTML, CSS, JAVA, Bootstrap,MongoDB, Express, React, Node nu oru oru topic-um trainer step by step explain
          panninadhu nala, naan confident-ah learn panna mudinjadhu. Class recordings irundhadhu nala eppo venalum revise
           pannalam. Online doubt support um sema helpful. Eppo doubt ketalum, immediate-ah reply kuduthanga.
            Andha support nala learning experience innum smooth-ah irundhudhu. Class la kudutha examples, explanations
            ellame real-time ku romba useful-ah irundhudhu.
        MERN stack-la work panna romba confidence kidaichudhu. Naan inga join pannadhu romba correct decision
         nu feel pannuren. Future-la innum advanced classes kuduthalum definitely join panren. Overall-ah, indha
         MERN Stack online class en life-la oru valuable learning experience. Trainer-kum online team-kum romba
         thanks for all the support and guidance.
        `,
        "rating": 5
      },
      {
        "name": "Deepa",
        "course": "MERN Stack Development",
        "role": "student",
        "institution": "NSN collage of Engineering & Technology",
        "feedback":`
        I’ve completed the Full Stack Development course at Bright Future Academy, and I truly enjoyed the entire learning journey.
        I learned HTML, CSS, JavaScript, Bootstrap, and SQL, and I’m really grateful for the way you taught everything.
        Your explanations were always clear, and you made even difficult topics easy to understand. I really appreciate how
         patiently you cleared all my doubts and how you always supported us with extra lessons whenever needed.
        Thank you for making the classes enjoyable and for giving us such a good learning experience. I genuinely had
         a great time learning from you.
        `,
        "rating": 5
      },
      {
        "name": "Jansivijila",
        "course": "MERN Stack Development",
        "role": "student",
        "institution": "NSN collage of Engineering & Technology",
        "feedback": `
        The MERN Stack was very helpful for my career because it improved my skills and knowledge for creating new websites or software-based
        applications. Your teaching method was very good and cleared my doubts easily. Learning this course was very useful for my career.
        Now, I'm creating my own website, and it helped me clear my interview.
        Thank you for this wonderful opportunity to learn the MERN stack course.Overall the course duration was very effective and efficiency for my career.
        `,
        "rating": 5
      },
      {
        "name": "Kowsika",
        "course": "PHP Development",
        "role": "student",
        "institution": "NSN collage of Engineering & Technology",
        "feedback": `
            PHP online class la naan join pannadhu romba correct choice nu feel pannuren. Trainer oda teaching style romba friendly-ah,
            understandable-ah irundhudhu. Topics ellame very smooth-ah explain panninadhu nala, PHP basics-um, backend logics-um easy-ah
            grasp panna mudinjuchu. Forms handling, MySQL integration, CRUD operations, sessions, validations – ellame clear-ah demonstrate
            panninadhu super helpful-a irundhudhu. Online doubts ku anytime message panna, instant-ah guidance kuduthanga. Andha support
            naala class experience innum comfortable-ah irundhudhu. Recording facility irundhadhu big plus point; need panna time la revisit
            panna mudiyum. Trainer example-based approach use panninadhu nala real-time la eppadi apply pannrathu nu nalla purinjuchu.
            PHP la coding panna enaku ippove confident-ah irukku. Entire class atmosphere positive-ah irundhudhu, learning journey enjoyable-ah
            aaiduchu. Future-la innum courses open panna, definitely naan join panren. Trainer and support team ku sincere thanks for giving such
            a wonderful learning experience.
        `,
        "rating": 5
      },
      {
        "name": "Jansivijila",
        "course": "PHP Development",
        "role": "student",
        "institution": "NSN collage of Engineering & Technology",
        "feedback": `
          PHP was used to create a website, especially on the server side. Basically, everyone said that PHP was very difficult to
          learn, but you taught this topic in an easy way, and we easily understood the concept. We can now develop server-side
          applications easily; you were very helpful during our development time. You cleared our doubts again and again and wanted
          to clear our doubts until the concept was understood. Your teaching way was very nice; continue this way. Your teaching
          was helpful for all PHP developers. Thank you for this opportunity to learn the PHP.
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