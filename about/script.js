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

    });