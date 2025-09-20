document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    emailjs.sendForm('service_uqvfs4p', 'template_zisqecw', form)
      .then(function() {
        alert("Message envoyé !");
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      }, function(error) {
        console.error("Erreur :", error);
        alert("Erreur, veuillez réessayer !");
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      });
  });
});
