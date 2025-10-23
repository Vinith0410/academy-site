 // Small page interactivity pulled/combined from original snippets
    document.addEventListener('DOMContentLoaded', function(){
      // Reveal animations used in the 'Learn daily' section
      setTimeout(function(){
        var left = document.getElementById('heroLeft');
        var right = document.getElementById('heroRight');
        if(left) left.classList.add('show');
        if(right) right.classList.add('show');
      }, 80);

      // Image hover soft zoom (for image-card and portrait)
      document.querySelectorAll('.image-card img, .photo img').forEach(function(img){
        img.style.transition = 'transform .45s cubic-bezier(.2,.9,.2,1)';
        img.addEventListener('mouseenter', function(){ img.style.transform = 'scale(1.02)'; });
        img.addEventListener('mouseleave', function(){ img.style.transform = 'none'; });
      });

      // Subscribe form basic flow (button now inside the input wrap)
      const form = document.getElementById('subscribeForm');
      const email = document.getElementById('email');
      const btn = document.getElementById('subscribeBtn');

      function validEmail(e){ return /\S+@\S+\.\S+/.test(e); }

      form.addEventListener('submit', function(e){
        e.preventDefault();
        const val = email.value.trim();
        if(!val || !validEmail(val)){
          email.focus();
          email.setAttribute('aria-invalid','true');
          alert('Please enter a valid email address.');
          return;
        }
        btn.disabled = true; btn.textContent = 'SUBSCRIBING...';
        setTimeout(()=>{ btn.disabled = false; btn.textContent = 'SUBSCRIBE'; email.value = ''; alert('Thanks — you have been subscribed!'); }, 800);
      });

    });