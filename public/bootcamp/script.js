const courseData = [
    {
    tag:"MOST POPULAR",
    title:"Frontend Development",
    internship:"10-day Bootcamp",
    liveTraining:"10+ hours of live training",
    description:"Daily practical builds & deployments",
    price:"₹399",
    oldPrice:"₹2500",
    bullets:["HTML CSS","JavaScript"],
    info:"Includes certificate & project support.",
    buttonText:"Apply Now",
    status:"close",
    registrationEnd:"2025-12-05",
    infoDetails:[
      { icon:"fa-location-dot", line1:"Offline", line2:"(NSN Collage Karur)" },
      { icon:"fa-user", line1:"Academy", line2:"Development Team" },
      { icon:"fa-microphone", line1:"Host", line2:"Bright Future Academy" },
      { icon:"fa-book", line1:"Interactive", line2:"Live Session" }
    ]
  },
  {
    tag:"TRENDING & POPULAR",
    title:"Power BI  Analytics",
    internship:"5-day Bootcamp",
    liveTraining:"5+ hours of live training",
    description:"Data analysis, visualization & reports",
    price:"₹99",
    oldPrice:"₹1000",
    bullets:["Power BI Desktop","Data Visualization"],
    info:"Includes certificate & project support.",
    buttonText:"Apply Now",
    status:"close",
    registrationEnd:"2025-12-07",
    infoDetails:[
      { icon:"fa-location-dot", line1:"Online", line2:"(Google Meet)" },
      { icon:"fa-user", line1:"Academy", line2:"Analytics Team" },
      { icon:"fa-microphone", line1:"Host", line2:"Bright Future Academy" },
      { icon:"fa-book", line1:"Interactive", line2:"Live Session" }
    ]
  },
  {
    tag:"TRENDING",
    title:"UI & UX Design Using Figma",
    internship:"5-day Bootcamp",
    liveTraining:"5+ hours of live training",
    description:"Learn UI & UX design using Figma, a powerful design tool.",
    price:"₹199",
    oldPrice:"₹500",
    bullets:["Figma Basics","UI/UX Design Principles", "Wireframing & Prototyping"],
    info:"Includes certificate & project support.",
    buttonText:"Apply Now",
    status:"close",
    registrationEnd:"2026-01-01",
    infoDetails:[
      { icon:"fa-location-dot", line1:"Online", line2:"(Google Meet)" },
      { icon:"fa-user", line1:"Academy", line2:"Designing Team" },
      { icon:"fa-microphone", line1:"Host", line2:"Bright Future Academy" },
      { icon:"fa-book", line1:"Interactive", line2:"Live Session" }
    ]
  },
  {
    tag:"TRENDING & POPULAR",
    title:"Power BI  Analytics",
    internship:"7-day Bootcamp",
    liveTraining:"5+ hours of live training",
    description:"Data analysis, visualization & reports",
    price:"Free",
    oldPrice:"₹2500",
    bullets:["Power BI Desktop","Data Visualization"],
    info:"Includes certificate & project support.",
    buttonText:"Apply Now",
    status:"close",
    registrationEnd:"2025-12-07",
    infoDetails:[
      { icon:"fa-location-dot", line1:"Online", line2:"(Google Meet)" },
      { icon:"fa-user", line1:"Academy", line2:"Analytics Team" },
      { icon:"fa-microphone", line1:"Host", line2:"Bright Future Academy" },
      { icon:"fa-book", line1:"Interactive", line2:"Live Session" }
    ]
  },
  {
    tag:"MOST POPULAR",
    title:"Full Stack Development",
    internship:"10-day Bootcamp",
    liveTraining:"20+ hours of live training",
    description:"Daily practical builds & deployments",
    price:"₹500",
    oldPrice:"₹2500",
    bullets:["HTML CSS JS BOOTSTRAP"," NODE.JS MONGODB"],
    info:"Includes certificate & project support.",
    buttonText:"Apply Now",
    status:"close",
    registrationEnd:"2025-12-05",
    infoDetails:[
      { icon:"fa-location-dot", line1:"Offline", line2:"(NSN Collage Karur)" },
      { icon:"fa-user", line1:"Academy", line2:"Development Team" },
      { icon:"fa-microphone", line1:"Host", line2:"Bright Future Academy" },
      { icon:"fa-book", line1:"Interactive", line2:"Live Session" }
    ]
  },
  {
    tag:"TRENDING",
    title:"UI UX  Design",
    internship:"5-day Bootcamp",
    liveTraining:"10+ hours live",
    description:"Daily practical and Model building",
    price:"₹500",
    oldPrice:"₹1500",
    bullets:["Sketch Work","Figma"],
    info:"Includes certificate & project support.",
    buttonText:"Enroll",
    status:"close",
    registrationEnd:"2025-10-01",
    infoDetails:[
      { icon:"fa-location-dot", line1:"Offline", line2:"(NSN Collage Karur)" },
      { icon:"fa-user", line1:"Academy", line2:"Designing Team" },
      { icon:"fa-microphone", line1:"Host", line2:"Bright Future Academy" },
      { icon:"fa-book", line1:"Interactive", line2:"Live Session" }
    ]
  },
  {
    tag:"MOST POPULAR",
    title:"Front End Development",
    internship:"7-day Bootcamp",
    liveTraining:"15+ hours AWS",
    description:"Daily practical builds & deployments",
    price:"₹800",
    oldPrice:"₹2,500",
    bullets:["HTML CSS","JS BOOTSTRAP"],
    info:"Includes certificate & project support.",
    buttonText:"Apply",
    status:"open",
    registrationEnd:"2024-11-30",
    infoDetails:[
      { icon:"fa-location-dot", line1:"Offline", line2:"(ArulMurugan College Karur)" },
      { icon:"fa-user", line1:"Academy", line2:"Development Team" },
      { icon:"fa-microphone", line1:"Host", line2:"Bright Future Academy" },
      { icon:"fa-book", line1:"Interactive", line2:"Live Session" }
    ]
  },
  {
    tag:"MOST POPULAR",
    title:"Front End Development",
    internship:"10-day Bootcamp",
    liveTraining:"5+ hours",
    description:"Daily practical builds & deployments",
    price:"Free",
    oldPrice:"₹5,499",
    bullets:["HTML CSS","JS BOOTSTRAP"],
    info:"Includes certificate & project support.",
    buttonText:"Register",
    status:"close",
    registrationEnd:"2025-09-15",
    infoDetails:[
      { icon:"fa-location-dot", line1:"Online", line2:"(Google Meet)" },
      { icon:"fa-user", line1:"Academy", line2:"Development Team" },
      { icon:"fa-microphone", line1:"Host", line2:"Bright Future Academy" },
      { icon:"fa-book", line1:"Interactive", line2:"Live Session" }
    ]
  },

];

/* Utilities */
function parseRupee(str){
  if(!str) return 0;
  const num = Number(String(str).replace(/[^0-9.]/g,""));
  return isNaN(num) ? 0 : num;
}
function calcDiscountPct(priceStr, oldStr){
  const p = parseRupee(priceStr);
  const o = parseRupee(oldStr);
  if(o <= 0 || o <= p) return 0;
  const pct = Math.round(((o - p) / o) * 100);
  return pct;
}

/* Check registration open (inclusive of the registrationEnd day) */
function isRegistrationOpen(item){
  if(!item.registrationEnd) return false;
  // parse date with local timezone by using YYYY-MM-DD and adding end-of-day time
  const end = new Date(item.registrationEnd + "T23:59:59");
  const now = new Date();
  return now <= end;
}

/* Build cards with ribbon reflecting registration date */
function buildCards(){
  const grid = document.getElementById("gridContainer");
  grid.innerHTML = "";

  courseData.forEach((item, index) => {
    const discountPct = calcDiscountPct(item.price, item.oldPrice);
    const regOpen = isRegistrationOpen(item);

    // Ribbon text and class derived from registrationEnd (not from item.status)
    const ribbonText = regOpen ? "OPEN" : "CLOSE";
    const ribbonClass = regOpen ? "ribbon open pop" : "ribbon close";

    // Button logic: "register" (active) when registration date not crossed
    const btnText = regOpen ? "Register" : "Registeration Closed";
    const btnClass = regOpen ? "btn" : "btn disabled";
    const ariaDisabled = regOpen ? "false" : "true";

    // Build info details markup from JSON
    const infoHtml = (item.infoDetails || []).map(d => `
      <div class="info-item">
        <i class="fa-solid ${d.icon}" aria-hidden="true"></i>
        <div>
          <div style="font-weight:600">${escapeHtml(d.line1)}</div>
          <div style="color:#666;font-size:12px">${escapeHtml(d.line2)}</div>
        </div>
      </div>
    `).join("");

    grid.innerHTML += `
      <div class="card" aria-label="${escapeHtml(item.title)}">
        <div class="${ribbonClass}" aria-hidden="true">${ribbonText}</div>

        <span class="tag">${escapeHtml(item.tag)}</span>

        <div class="title">${escapeHtml(item.title)}</div>

        <div class="subtitle">${escapeHtml(item.internship)}</div>

        <a href="#" class="linkline" onclick="event.preventDefault()">${escapeHtml(item.liveTraining)}</a>

        <div class="meta">${escapeHtml(item.description)}</div>

        <div class="price-row">
          <div class="price">${escapeHtml(item.price)}</div>

          <div class="old-price-wrap">
            <div class="old-price">${escapeHtml(item.oldPrice)}</div>
          </div>
        </div>

        <div class="info-grid" aria-hidden="false">
          ${infoHtml}
        </div>

        <div class="bullets">
          ${ (item.bullets || []).map(b=>`<div class="bullet"><span class="dot" aria-hidden="true"></span>${escapeHtml(b)}</div>`).join("") }
        </div>

        <div class="info">${escapeHtml(item.info)}</div>

        <button class="${btnClass}" aria-disabled="${ariaDisabled}" ${regOpen ? '' : 'disabled'} data-title="${escapeHtml(item.title)}">
            ${btnText}
        </button>
      </div>
    `;
  });
}

/* simple escape to avoid accidental HTML injection if JSON changed */
function escapeHtml(str){
  if(typeof str !== "string") return str==null ? "" : String(str);
  return str.replace(/[&<>"'`=\/]/g, function (s) {
    return ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    })[s];
  });
}

/* initial render */
buildCards();

function openPopup(titleText) {
  const popup = document.getElementById("applicationPopup");
  const title = document.getElementById("popupTitle");
  const subtitle = document.getElementById("popupSubtitle");

  title.textContent = `${titleText} Application`;
  subtitle.textContent = `Complete the form below to apply for ${titleText}.`;

  // populate hidden title field
  const bootcampFormTitle = document.getElementById('bootcampFormTitle');
  if(bootcampFormTitle) bootcampFormTitle.value = titleText;

  popup.style.display = "flex";
  popup.style.animation = "fadeIn 0.3s ease-in-out";
}

function closePopup() {
  const popup = document.getElementById("applicationPopup");
  popup.style.animation = "fadeOut 0.3s ease-in-out";
  setTimeout(() => {
    popup.style.display = "none";
    document.getElementById("applicationForm").reset();
    // Clean up URL by removing query parameters
    window.history.replaceState({}, '', window.location.pathname);
  }, 300);
}

// Optional Fade-Out Animation
const style = document.createElement("style");
style.textContent = `
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}`;
document.head.appendChild(style);

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

async function handleBootcampSubmit(e){
  e.preventDefault();
  const form = e.target;
  const bootcampName = document.getElementById("popupTitle")?.textContent.replace(" Application","") || "";

  const data = new FormData(form);
  const json = Object.fromEntries(data.entries());
  // ensure programType/title exist (hidden inputs provided in HTML)
  if(!json.programType) json.programType = "bootcamp";
  if(!json.title) json.title = bootcampName;

  try{
    const res = await fetch("/event/apply",{
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

function attachHandlers(){
  document.querySelectorAll(".card .btn:not(.disabled)").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const t = btn.getAttribute("data-title") || btn.closest(".card").querySelector(".title").textContent;
      openPopup(t);
      // Update URL with bootcamp parameter
      window.history.pushState({ bootcamp: t }, '', `?bootcamp=${encodeURIComponent(t)}`);
    });
  });
}
attachHandlers();

// Check URL parameters on page load and open popup if bootcamp parameter exists
function checkAndOpenBootcampFromURL() {
  const params = new URLSearchParams(window.location.search);
  const bootcampName = params.get('bootcamp');
  if (bootcampName) {
    // Wait for cards to be built
    const checkInterval = setInterval(() => {
      const bootcampCard = Array.from(document.querySelectorAll(".card .title")).find(el => el.textContent === bootcampName);
      if (bootcampCard) {
        clearInterval(checkInterval);
        openPopup(bootcampName);
      }
    }, 100);
    // Timeout after 5 seconds
    setTimeout(() => clearInterval(checkInterval), 5000);
  }
}

window.addEventListener('load', checkAndOpenBootcampFromURL);

// Form is handled via onsubmit attribute in HTML: onsubmit="handleBootcampSubmit(event)"
