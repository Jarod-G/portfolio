document.addEventListener("DOMContentLoaded", () => {
  const expImg = document.getElementById("exp-img");
  const experiences = {
    "label-licence": {
      img: "assets/images/projects/licence.gif"
    },
    "label-master": {
      img: "assets/images/projects/master.gif"
    },
    "label-work": {
      img: "assets/images/projects/work.gif"
    }
  };

  // Variable pour tracking mobile
  let isMobile = window.innerWidth <= 768;
  let currentActiveLabel = null;

  // Fonction pour changer l'image
  const changeImage = (imageSrc) => {
    expImg.src = imageSrc;
  };

  // Fonction pour reset l'image
  const resetImage = () => {
    expImg.src = "assets/images/projects/pick-one.gif";
  };

  // Gestion événements sur chaque label
  Object.keys(experiences).forEach(id => {
    const label = document.getElementById(id);
    
    if (isMobile) {
      // Sur mobile : tap pour changer, tap ailleurs pour reset
      label.addEventListener("touchstart", (e) => {
        e.preventDefault(); // Évite le double événement
        
        if (currentActiveLabel === id) {
          // Si on tape sur le même label, on reset
          resetImage();
          currentActiveLabel = null;
          label.style.opacity = "1";
        } else {
          // Sinon on change l'image
          changeImage(experiences[id].img);
          
          // Reset style des autres labels
          Object.keys(experiences).forEach(otherId => {
            document.getElementById(otherId).style.opacity = "1";
          });
          
          // Highlight le label actuel
          label.style.opacity = "0.7";
          currentActiveLabel = id;
        }
      });
      
      // Click fallback pour mobile
      label.addEventListener("click", (e) => {
        e.preventDefault();
      });
      
    } else {
      // Sur desktop : hover classique
      label.addEventListener("mouseenter", () => {
        changeImage(experiences[id].img);
      });
      
      label.addEventListener("mouseleave", () => {
        resetImage();
      });
    }
  });

  // Reset quand on tap ailleurs sur mobile
  if (isMobile) {
    document.addEventListener("touchstart", (e) => {
      const isLabel = Object.keys(experiences).some(id => 
        document.getElementById(id).contains(e.target)
      );
      
      if (!isLabel && currentActiveLabel) {
        resetImage();
        // Reset style de tous les labels
        Object.keys(experiences).forEach(id => {
          document.getElementById(id).style.opacity = "1";
        });
        currentActiveLabel = null;
      }
    });
  }

  // Recalculer si mobile lors du resize
  window.addEventListener("resize", () => {
    isMobile = window.innerWidth <= 768;
  });
});