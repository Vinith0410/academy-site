
// Slider functionality
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

let currentSlide = 0;

// Add fade class to all contents once for animation
contents.forEach(content => content.classList.add("fade"));

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    changeSlide(index);
  });
});

function changeSlide(index) {
  btns[currentSlide].classList.remove("active");
  slides[currentSlide].classList.remove("active");
  contents[currentSlide].classList.remove("active");

  currentSlide = index;

  btns[currentSlide].classList.add("active");
  slides[currentSlide].classList.add("active");
  contents[currentSlide].classList.add("active");

  // Re-trigger animation
  contents[currentSlide].classList.remove("fade");
  void contents[currentSlide].offsetWidth; // force reflow
  contents[currentSlide].classList.add("fade");
}

// Auto-change every 6 seconds
setInterval(() => {
  let nextSlide = (currentSlide + 1) % slides.length;
  changeSlide(nextSlide);
}, 6000);

 const steps = document.querySelectorAll('.quiz-step');
  const buttons = document.querySelectorAll('.answer-btn');
  const resultText = document.getElementById('result-text');
  let current = 0;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.getAttribute('data-answer');

      if (['ui', 'backend', 'fullstack'].includes(answer)) {
        resultText.textContent = `You are suitable for: ${answer === 'ui' ? 'UI/UX Designer' : (answer === 'backend' ? 'Backend Developer' : 'Full Stack Developer')}`;
        if (answer === 'fullstack') {
          steps[current].classList.remove('active');
          current = 3; // Fullstack options step
          steps[current].classList.add('active');
          return;
        } else {
          steps[current].classList.remove('active');
          current = 4; // Final result step
          steps[current].classList.add('active');
          return;
        }
      } else if (['Java Fullstack', 'Python Fullstack', 'NodeJS Fullstack'].includes(answer)) {
        resultText.textContent = `You are suitable for: ${answer}`;
        steps[current].classList.remove('active');
        current = 4;
        steps[current].classList.add('active');
      } else {
        steps[current].classList.remove('active');
        current++;
        steps[current].classList.add('active');
      }
    });
  });


  // academy status

  (function(){
    const counters = document.querySelectorAll('#academy-stats .stat-number');
    let started = false;

    function animateCounters(){
      if(started) return;
      const rect = document.querySelector('#academy-stats').getBoundingClientRect();
      if(rect.top < window.innerHeight - 100){
        started = true;
        counters.forEach(el => {
          const target = +el.getAttribute('data-target');
          const duration = 1400;
          let start = 0;
          const stepTime = Math.max(10, Math.floor(duration / (target || 100)));

          const step = () => {
            start += Math.ceil(target / (duration / stepTime));
            if(start >= target){
              el.textContent = (target % 1 === 0) ? target + "+" : target.toFixed(1) + "+";
            } else {
              el.textContent = start;
              setTimeout(step, stepTime);
            }
          };

          step();
        });
      }
    }

    window.addEventListener('scroll', animateCounters, {passive:true});
    setTimeout(animateCounters, 100);
  })();