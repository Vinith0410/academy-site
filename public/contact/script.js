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
    text: "" + message,
    duration: 4500,
    gravity: "top",
    position: "right",
    className: "bounce-toast",
    close: true,
    stopOnFocus: true
  }).showToast();
}

// Simple AJAX submit for contact form
    document.getElementById('contactForm').addEventListener('submit', async function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      try{
        const res = await fetch('/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, phone, message })
        });
        const data = await res.json();
        if(data && data.success){
          bounceSuccessToast('Message sent🎉 — we will contact you soon.');
          document.getElementById('contactForm').reset();
        } else {
          showErrorToast(data && data.message ? data.message : 'Failed to send message');
        }
      }catch(err){
        console.error(err);
        showErrorToast('Error sending message. Please try again later.');
      }
    });