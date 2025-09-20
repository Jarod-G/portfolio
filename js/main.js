// Étape 1 : cibler le container
const container = document.getElementById("projects");

// Étape 2 : récupérer le JSON
fetch("projects.json")
  .then(res => res.json())
  .then(data => {
    // Étape 3 : parcourir chaque projet
    data.forEach(project => {
      
      // créer la colonne (Bulma utilise "column")
      const column = document.createElement("div");
      column.classList.add("column", "is-one-third");

      // créer la card
      const card = document.createElement("div");
      card.classList.add("card");

      // image
      const cardImage = `
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="${project.image}" alt="${project.title}">
          </figure>
        </div>
      `;

      // contenu
      const cardContent = `
        <div class="card-content">
          <p class="title is-4">${project.title}</p>
          <p class="subtitle is-6">${project.description}</p>
          <a href="${project.link}" target="_blank" class="button is-link mt-3">
            Voir le projet
          </a>
        </div>
      `;

      // insérer image + contenu dans la card
      card.innerHTML = cardImage + cardContent;

      // insérer la card dans la colonne
      column.appendChild(card);

      // insérer la colonne dans le container
      container.appendChild(column);
    });
  })
  .catch(err => console.error("Erreur chargement JSON:", err));
