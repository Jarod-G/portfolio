const today = new Date();

// jour/mois/annee

const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0'); // Mois 0-11
const year = today.getFullYear();

const span = document.getElementById("today");

if (span) {
  span.textContent = `${day}/${month}/${year}`;
}