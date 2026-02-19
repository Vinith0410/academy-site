let courses = [];

async function fetchCourses() {
  try {
    const response = await fetch('./courses.json');
    if(!response.ok){
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    courses = Array.isArray(data) ? data : [];
    render(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
}
fetchCourses()
const coursePDFs = {
  "MERN Stack Development": "./pdfs/Bright-Future-Academy-MERN stack development Course Schedule.pdf",
  "Python Web Development":"./pdfs/Bright-Future-Academy-Python Web Development Course Schedule.pdf",
  "Data Analytics":"./pdfs/Bright-Future-Academy-Data Analytics Course Schedule.pdf",
  "UI & UX Design":"./pdfs/Bright-Future-Academy-UI-UX Design Course Schedule.pdf",
  "Power BI":"./pdfs/Bright-Future-Academy- PowerBI Course Schedule.pdf",
  "Figma UI UX Design":"./pdfs/Bright-Future-Academy-Figma Course Schedule.pdf",
  "React JS Development":"./pdfs/Bright-Future-Academy-React JS Course Schedule.pdf",
  "Frontend Development":"./pdfs/Bright-Future-Academy-Frontend Course Schedule.pdf",
  "Backend Development":"./pdfs/Bright-Future-Academy-Backend Course Schedule.pdf",
  "Excel & MS Word":"./pdfs/Bright-Future-Academy-Excel MS-Word Course Schedule.pdf",
  "Python for Data Science": "./pdfs/Bright-Future-Academy-Python for Data Science Course Schedule.pdf",
  "Python Programming Language":"./pdfs/Bright-Future-Academy-Python Programming Course Schedule.pdf",
  "Python for Data Analytics":"./pdfs/Bright-Future-Academy-Python for Data Analytics Course Schedule.pdf",
  "Python for Data Science":"./pdfs/Bright-Future-Academy-Python for Data Science Course Schedule.pdf",
  "C Programming Language":"./pdfs/Bright-Future-Academy-C Programming Course Schedule.pdf",
  "Database Management with SQL & MongoDB":"./pdfs/Bright-Future-Academy-MySQL&MongoDB Course Schedule.pdf",
  "Word Excel & Power Point":"./pdfs/Bright-Future-Academy-Word , Excel & PowerPoint Course Schedule.pdf",
  "PHP Development":"./pdfs/Bright-Future-Academy-PHP Development Course Schedule.pdf",
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
    const pdfFileName = pdfPath.split('/').pop();
    infoHTML += `To know more about this course
      <a href="${pdfPath}" download="${pdfFileName}" class="download-link" target="_blank">
        <i class="fa fa-download"></i>
      </a>.
    `;
  } else {
    infoHTML += `
      <span style="color:#999;">If you have any questions about the course, don’t hesitate to contact us. We’re here to guide you at every step.</span>
    `;
  }

  courseInfo.innerHTML = infoHTML;

  // set hidden title field so form/FormData always includes it
  const courseFormTitle = document.getElementById('courseFormTitle');
  if(courseFormTitle) courseFormTitle.value = courseName;

  popup.style.display = "flex";
  popup.style.animation = "fadeIn 0.3s ease-in-out";
}

// Close Popup
function closePopup() {
  const popup = document.getElementById("applicationPopup");
  popup.style.animation = "fadeOut 0.3s ease-in-out";
  setTimeout(() => (popup.style.display = "none"), 300);
  // Clean up URL by removing query parameters
  window.history.replaceState({}, '', window.location.pathname);
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
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("enroll-btn")) {
    const card = e.target.closest(".course-card");
    if (card) {
      const courseName = card.querySelector(".course-title")?.textContent || "Your Course";
      openPopup(courseName);
      // Update URL with course parameter
      window.history.pushState({ course: courseName }, '', `?course=${encodeURIComponent(courseName)}`);
    }
  }
});

// Check URL parameters on page load and open popup if course parameter exists
function checkAndOpenFromURL() {
  const params = new URLSearchParams(window.location.search);
  const courseName = params.get('course');
  if (courseName) {
    // Wait for courses to load, then open popup
    const checkInterval = setInterval(() => {
      if (courses && courses.length > 0) {
        clearInterval(checkInterval);
        const courseExists = courses.find(c => c.name === courseName);
        if (courseExists) {
          openPopup(courseName);
        }
      }
    }, 100);
    // Timeout after 5 seconds
    setTimeout(() => clearInterval(checkInterval), 5000);
  }
}

window.addEventListener('load', checkAndOpenFromURL);

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
  (c.points || []).forEach(p => {
    pointsHTML += `<span class="point-item"><span class="tick">✔</span> ${p}</span>`;
  });
  pointsHTML += '</div>';

  card.innerHTML = `
    <div class="course-image">
      <img src="${c.img}" alt="${c.name}" loading="lazy" decoding="async">
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

function showErrorToast(message){
  Toastify({
    text: message,
    duration: 4000,
    gravity: "top",
    position: "right",
    close: true,
    stopOnFocus: true,
    style: {
      background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
      borderRadius: "10px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      fontWeight: "600"
    }
  }).showToast();
}

function bounceSuccessToast(message){
  Toastify({
    text: message,
    duration: 4500,
    gravity: "top",
    position: "right",
    className: "bounce-toast",
    close: true,
    stopOnFocus: true
  }).showToast();
}

async function handleCourseSubmit(e){
  e.preventDefault();
  const form = e.target;
  const courseName = document.getElementById("popupTitle")?.textContent.replace(" Application","") || "";

  const data = new FormData(form);
  const json = Object.fromEntries(data.entries());
  // ensure programType/title exist (hidden inputs provided in HTML)
  if(!json.programType) json.programType = "course";
  if(!json.title) json.title = courseName;

  try{
    const res = await fetch("/apply",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(json)
    });
    const result = await res.json();
    if(result && result.success){
      bounceSuccessToast("🎉 Application submitted successfully! Our team will contact you soon.");
      form.reset();
      closePopup();
    } else {
      showErrorToast("❌ Application failed. Please try again.");
    }
  }catch(err){
    console.error("Error:", err);
    showErrorToast("❌ Error submitting application. Please try again.");
  }
}

// Form is handled via onsubmit attribute in HTML: onsubmit="handleCourseSubmit(event)"
