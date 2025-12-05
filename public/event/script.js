const courseData = [
  {
    tag:"MOST POPULAR",
    title:"Full Stack Development",
    internship:"10-day internship",
    liveTraining:"20+ hours of live training",
    description:"Daily practical builds & deployments",
    price:"₹3,499",
    oldPrice:"₹4,999",
    bullets:["React + Node.js delivery","Cloud deployment lab"],
    info:"Includes project reviews, certificate, and loyalty discount.",
    buttonText:"Apply Now",
    status:"open",
    registrationEnd:"2025-12-05",
    infoDetails:[
      { icon:"fa-location-dot", line1:"Online", line2:"(Virtual Event)" },
      { icon:"fa-user", line1:"Prof. Kavitha", line2:"Ramesh" },
      { icon:"fa-microphone", line1:"Learn with", line2:"Bright Future Academy" },
      { icon:"fa-book", line1:"Interactive", line2:"Live Session" }
    ]
  },
  {
    tag:"HOT",
    title:"AI / ML Internship",
    internship:"15-day internship",
    liveTraining:"25+ hours live",
    description:"Model building, datasets & training",
    price:"₹4,999",
    oldPrice:"₹6,499",
    bullets:["Python + ML algorithms","Dataset processing"],
    info:"Includes certificate & project support.",
    buttonText:"Enroll",
    status:"close",
    registrationEnd:"2025-10-01",
    infoDetails:[
      { icon:"fa-location-dot", line1:"Hybrid", line2:"Online + Lab" },
      { icon:"fa-user", line1:"Dr. Rao", line2:"Lead Mentor" },
      { icon:"fa-microphone", line1:"Hands-on", line2:"Dataset Workshops" },
      { icon:"fa-book", line1:"Project", line2:"Model Building" }
    ]
  },
  {
    tag:"TOP",
    title:"Cloud DevOps",
    internship:"7-day internship",
    liveTraining:"15+ hours AWS",
    description:"CI/CD pipeline & docker labs",
    price:"₹2,999",
    oldPrice:"₹3,999",
    bullets:["Docker + Kubernetes","AWS deployments"],
    info:"Project + certification included",
    buttonText:"Apply",
    status:"open",
    registrationEnd:"2025-11-30",
    infoDetails:[
      { icon:"fa-location-dot", line1:"Online", line2:"AWS Labs" },
      { icon:"fa-user", line1:"S. Mohan", line2:"Cloud Trainer" },
      { icon:"fa-microphone", line1:"Live Labs", line2:"CI/CD Sessions" },
      { icon:"fa-book", line1:"Hands-on", line2:"Deployment Exercises" }
    ]
  },
  {
    tag:"TRENDING",
    title:"Cyber Security",
    internship:"12-day internship",
    liveTraining:"30+ hours",
    description:"Ethical hacking + network labs",
    price:"₹4,499",
    oldPrice:"₹5,499",
    bullets:["Pentesting labs","Network analysis"],
    info:"Certificate + real tools",
    buttonText:"Register",
    status:"close",
    registrationEnd:"2025-09-15",
    infoDetails:[
      { icon:"fa-location-dot", line1:"Onsite", line2:"(Lab-Based)" },
      { icon:"fa-user", line1:"A. Srinivasan", line2:"Ethical Hacker" },
      { icon:"fa-microphone", line1:"Tool-based", line2:"Real Tools" },
      { icon:"fa-book", line1:"Labs", line2:"CTFs & Pentests" }
    ]
  },
  {
    tag:"NEW",
    title:"UI/UX Design",
    internship:"5-day internship",
    liveTraining:"10+ hours",
    description:"Figma workshop",
    price:"₹1,999",
    oldPrice:"₹2,499",
    bullets:["Wireframing","Visual design"],
    info:"Certificate included",
    buttonText:"Register",
    status:"open",
    registrationEnd:"2026-01-10",
    infoDetails:[
      { icon:"fa-location-dot", line1:"Online", line2:"Figma Labs" },
      { icon:"fa-user", line1:"M. Leela", line2:"Design Mentor" },
      { icon:"fa-microphone", line1:"Workshops", line2:"Figma + UX" },
      { icon:"fa-book", line1:"Portfolio", line2:"Project Kit" }
    ]
  },
  {
    tag:"HOT",
    title:"Android Development",
    internship:"10-day internship",
    liveTraining:"18+ hours",
    description:"Kotlin + Jetpack",
    price:"₹3,299",
    oldPrice:"₹4,199",
    bullets:["UI components","API integration"],
    info:"Certificate + project",
    buttonText:"Apply",
    status:"close",
    registrationEnd:"2025-11-01",
    infoDetails:[
      { icon:"fa-location-dot", line1:"Online", line2:"Hands-on" },
      { icon:"fa-user", line1:"R. Kumar", line2:"Android Coach" },
      { icon:"fa-microphone", line1:"Live Labs", line2:"App Building" },
      { icon:"fa-book", line1:"Project", line2:"Publishable App" }
    ]
  }
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
            ${ discountPct > 0 ? `<div class="discount-badge">-${discountPct}%</div>` : `<div class="discount-badge hide" aria-hidden="true"></div>` }
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

const modal = document.getElementById("registerModal");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");
const form = document.getElementById("registerForm");
const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputPhone = document.getElementById("inputPhone");

function openModal(title){
  modalTitle.textContent = title;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden","false");
}
function closeModal(){
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden","true");
  form.reset();
}
function attachHandlers(){
  document.querySelectorAll(".card .btn:not(.disabled)").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const t = btn.getAttribute("data-title") || btn.closest(".card").querySelector(".title").textContent;
      openModal(t);
    });
  });
}
attachHandlers();

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e)=>{ if(e.target === modal) closeModal(); });
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const name = inputName.value.trim();
  const email = inputEmail.value.trim();
  const phone = inputPhone.value.trim();
  if(!name || !email || !phone) return;
  closeModal();
});
