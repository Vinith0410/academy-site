const courses = [
  {
    name: "Full Stack Web Development",
    price: 10000,
    oldPrice: 12999,
    duration: "3 - 4 Months",
    img: "./images/fullstack.jpg",
    tag: "Beginner to Advanced",
    desc: "Learn frontend, backend, and database with deployment. Build full web apps from scratch, plus get interview and resume guidance.",
    points: [
      "HTML & CSS",
      "JavaScript",
      "Bootstrap",
      "SQL & MongoDB",
      "PHP",
      "Node & Express"
    ]
  },
  {
    name: "Python Web Development",
    price: 10000,
    oldPrice: 12999,
    duration: "3 - 4 Months",
    img: "./images/pythonweb.jpg",
    tag: "Beginner to Advanced",
    desc: "Learn Python, frontend, backend, and database with development. Build complete web apps from scratch with Django & Flask, plus get interview and resume guidance.",
    points: [
    "Python",
    "HTML & CSS",
    "JavaScript",
    "Bootstrap",
    "SQL & MongoDB",
    "Django & Flask",
  ]
  },
  {
    name: "Data Analytics",
    price: 7500,
    oldPrice: 10000,
    duration: "2 - 3 Months",
    img: "./images/dataanalysis.jpg",
    tag: "Beginner to Advanced",
    desc: "Learn data analytics from scratch with dataset handling, cleaning, pivot tables, charts, visualization, data science & engineering concepts, plus interview and resume guidance.",
    points: [
      "Python",
      "Google Colab",
      "jupyter notebook",
      "Excel",
      "Power BI"
    ]
  },
  {
    name: "UI & UX Design",
    price: 5500,
    oldPrice: 7500,
    duration: "1 - 2 Months",
    img: "./images/uiux.jpg",
    tag: "Beginner to Advanced",
    desc: "Learn UI & UX design from scratch. Create user-friendly interfaces, work with tools like Figma, Wix, and Sketch, build real projects, and get interview and resume guidance.",
    points: [
    "Sketch",
    "Wireframes",
    "Figma",
    "Prototyping"
  ]
  },
    {
    name: "Power BI",
    price: 3499,
    oldPrice: 4500,
    duration: "15 Days",
    img: "./images/dataanalysis.jpg",
    tag: "Beginner to Advanced",
    desc: "Master Power BI from basics to advanced. Learn data modeling, dashboard creation, and interactive reporting to turn data into insights.",
    points: [ "Data Handling", "Data Modeling", "Dashboards", "Reports", "Visualization", "Projects"]
  },
  {
    name: "Figma UI UX Design",
    price: 3000,
    oldPrice: 4000,
    duration: "15 Days",
    img: "./images/dataanalysis.jpg",
    tag: "Beginner to Advanced",
   desc: "Design modern UI layouts from scratch with Figma. Master wireframes, components, and prototypes to create professional designs.",
    points: ["Wireframes", "Components", "Prototyping", "Interactive" , "Sketch"]
  },
  {
    name: "React JS Development",
    price: 5499,
    oldPrice: 7500,
    duration: "1 - 2 Months",
    img: "./images/fullstack.jpg",
    tag: "Beginner to Advanced",
    desc: "Master modern frontend development with React. Build fast, dynamic, and scalable web applications with real-world projects, deployment, and interview guidance.",
    points: [
    "HTML CSS & JS",
    "React Basics",
    "Components & Props",
    "React Routing"
  ]
  },
  {
    name: "Frontend Development",
    price: 5499,
    oldPrice: 7500,
    duration: "1 - 2 Months",
    img: "./images/fullstack.jpg",
    tag: "Beginner to Advanced",
    desc: "Learn frontend development from scratch with full deployment. Build responsive websites, interactive interfaces, and gain interview and resume guidance.",
    points: [
    "HTML & CSS",
    "JavaScript",
    "Bootstrap",
    "Sketch"
  ]
  },
  {
    name: "Backend Development",
    price: 5499,
    oldPrice: 7500,
    duration: "1 - 2 Months",
    img: "./images/fullstack.jpg",
    tag: "Beginner to Advanced",
    desc: "Learn backend development with Node.js & Express. Requires basic frontend and database knowledge. Build APIs, deploy projects, and get interview and resume guidance.",
    points: [
    "PHP",
    "Node.js",
    "Express.js",
    "Postman",
    "API"
  ]
  },
      {
    name: "Excel & MS Word",
    price: 3000,
    oldPrice: 4000,
    duration: "20 Days",
    img: "./images/dataanalysis.jpg",
    tag: "Beginner to Advanced",
    desc: "Master MS Word for professional documentation and Excel for advanced data analysis. Learn to handle, clean, and visualize data effectively.",
    points: [ "Documentation",  "Data Handling", "Data Cleaning", "Formulas", "Charts"]
  },

   {
    name: "Python Programming Language",
    price: 1499,
    oldPrice: 2000,
    duration: "15 Days",
    img: "./images/dataanalysis.jpg",
    tag: "Beginner to intermediate",
    desc: "Learn Python from scratch. Build strong logic and problem-solving skills — a perfect step into programming.",
    points: ["Syntax", "Function", "Problem Solving","library", "Algorithms","File Handling", "Project"]
  },
  {
    name: "Python for Data Analytics",
    price: 1499,
    oldPrice: 2000,
    duration: "15 Days",
    img: "./images/dataanalysis.jpg",
    tag: "Beginner to Advanced",
   desc: "Learn Python basics and data analysis with Pandas, NumPy, and visualization tools. Explore data science concepts through real projects.",
    points: ["Python Basics","Pandas", "NumPy", "Visualization", "Projects"]
  },
    {
    name: "Python for Data Science",
    price: 1499,
    oldPrice: 2000,
    duration: "15 Days",
    img: "./images/dataanalysis.jpg",
    tag: "Beginner to Intermediate",
   desc: "Learn core data science concepts using Python, including data preprocessing, machine learning basics, model building, and visualization.",
    points: ["Python Basics","Data Preprocessing", "Model Building", "Scikit-Learn", "Projects"]
  },
  {
    name: "C Programming Language",
    price: 1299,
    oldPrice: 1999,
    duration: "15 Days",
    img: "./images/uiux.jpg",
    tag: "Beginner to intermediate",
    desc: "Learn C programming from basics. Build strong logic and problem-solving skills — the perfect start to coding.",
    points: ["Syntax", "Function", "Problem Solving", "library", "Algorithms","File Handling", "Project"]
  },
{
    name: "Database Management with SQL & MongoDB",
    price: 2000,
    oldPrice: 2499,
    duration: "15 Days",
    img: "./images/dataanalysis.jpg",
    tag: "Beginner to intermediate",
    desc: "Master SQL & MongoDB to manage, query, and organize databases efficiently. Build real projects and strengthen your database skills.",
    points: ["CRUD", "Queries", "Joins", "Data Handling", "Projects"]
  },
  {
  name: "Word Excel & Power Point",
  price: 1499,
  oldPrice: 2000,
  duration: "15 Days",
  img: "./images/dataanalysis.jpg",
  tag: "Beginner to intermediate ",
  desc: "Learn MS Word for documentation, Excel for data entry, and PowerPoint For presentations. Gain hands-on skills for essential office tasks.",
  points: [
    "Documentation",
    "Data Entry",
    "Presentations",
    "Formulas",
    "Practice"
  ]
  },
  {
  name: "PHP Development",
  price: 2000,
  oldPrice: 2500,
  duration: "15 Days",
  img: "./images/dataanalysis.jpg",
  tag: "Beginner to Intermediate",
  desc: "Learn PHP from scratch and build dynamic web applications. Understand backend logic, work with forms, handle MySQL databases, and gain practical coding experience.",
  points: [
    "PHP Basics",
    "Forms & Sessions",
    "MySQL Database",
    "CRUD Operations"
  ]
}

];

const coursePDFs = {
  "Full Stack Web Development": "./pdfs/Bright-Future-Academy-Full-Stack Development Course Schedule.pdf"
};

function openPopup(courseName) {
  const popup = document.getElementById("applicationPopup");
  const title = document.getElementById("popupTitle");
  const subtitle = document.getElementById("popupSubtitle");
  const courseInfo = document.getElementById("courseInfo");

  const course = courses.find(c => c.name === courseName);
  const pdfPath = coursePDFs[courseName];

  title.textContent = `${courseName} Application`;
  subtitle.textContent = `Complete the form below to apply for ${courseName}.`;

  let infoHTML = ``;

  if (pdfPath) {
    infoHTML += `To know more about this course
      <a href="${pdfPath}" download class="download-link">
        <i class="fa fa-download"></i>
      </a>.
    `;
  } else {
    infoHTML += `
      <span style="color:#999;">If you have any questions about the course, don’t hesitate to contact us. We’re here to guide you at every step.</span>
    `;
  }

  courseInfo.innerHTML = infoHTML;

  popup.style.display = "flex";
  popup.style.animation = "fadeIn 0.3s ease-in-out";
}

// Close Popup
function closePopup() {
  const popup = document.getElementById("applicationPopup");
  popup.style.animation = "fadeOut 0.3s ease-in-out";
  setTimeout(() => (popup.style.display = "none"), 300);
}

// Optional Fade-Out Animation
const style = document.createElement("style");
style.textContent = `
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}`;
document.head.appendChild(style);

// Example trigger (replace this with your "Enroll" button)
document.querySelectorAll(".enroll-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const courseName = btn.getAttribute("data-course") || "Your Course";
    openPopup(courseName);
  });
});

    const grid=document.getElementById('cardsGrid');
   const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    let currentFilter = 'all';

// Render function
const render = (list) => {
 grid.innerHTML = '';
  if (list.length === 0) {
    const noCourses = document.createElement('div');
    noCourses.className = 'no-courses';
    noCourses.innerHTML = `
      No courses found matching your search.
      <span id="clearSearchMsg">Clear Search</span>
    `;
    grid.appendChild(noCourses);

    // Add click listener for Clear Search
    document.getElementById('clearSearchMsg').addEventListener('click', () => {
      searchInput.value = '';
      applyFilterAndSearch();
      searchInput.focus();
    });

    return;
  }

list.forEach(c => {
  const save = c.oldPrice - c.price;
  const card = document.createElement('div');
  card.className = 'course-card';
  card.dataset.tag = c.tag;

  let pointsHTML = '<div class="course-points">';
  c.points.forEach(p => {
    pointsHTML += `<span class="point-item"><span class="tick">✔</span> ${p}</span>`;
  });
  pointsHTML += '</div>';

  card.innerHTML = `
    <div class="course-image">
      <img src="${c.img}" alt="${c.name}">
      <div class="course-discount">${Math.round(((c.oldPrice - c.price) / c.oldPrice) * 100)}% OFF</div>
      <div class="overlay">
        <h3>${c.name}</h3>
        <a onclick="openPopup('${c.name}')">Enroll Now</a>
      </div>
    </div>
    <div class="course-body">
      <div class="course-title">${c.name}</div>
      <div class="course-info">
        <span class="course-duration">⏱ ${c.duration}</span>
        <span class="course-duration">${c.tag}</span>
      </div>
      <div class="course-desc">${c.desc}</div>
      ${pointsHTML}
      <div class="price-row">
        <span class="current-price">₹${c.price.toLocaleString()}</span>
        <span class="old-price">₹${c.oldPrice.toLocaleString()}</span>
        <span class="save-pill">Save ₹${save.toLocaleString()}</span>
      </div>
    </div>
    <button onclick="openPopup('${c.name}')" class="enroll-btn">Enroll</button>
  `;
  grid.appendChild(card);
});
};
render(courses);

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    applyFilterAndSearch();
  });
});

// Live search function
const applyFilterAndSearch = () => {
  let filtered = [...courses];

  // Apply filter
  if (currentFilter !== 'all') {
    filtered = filtered.filter(c => c.tag.toLowerCase() === currentFilter.toLowerCase());
  }

  // Apply live search
  const query = searchInput.value.trim().toLowerCase();
  if (query) {
    filtered = filtered.filter(c => c.name.toLowerCase().includes(query));
  }

  render(filtered);
};

// Search while typing
searchInput.addEventListener('input', applyFilterAndSearch);

// Clear search button
clearSearch.addEventListener('click', () => {
  searchInput.value = '';
  applyFilterAndSearch();
  searchInput.focus();
});
