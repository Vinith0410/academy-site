const courseData = [
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
    registrationEnd:"2024-12-05",
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
