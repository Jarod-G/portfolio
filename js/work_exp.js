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

  // Gestion hover sur chaque label
  Object.keys(experiences).forEach(id => {
    const label = document.getElementById(id);
    label.addEventListener("mouseenter", () => {
      expImg.src = experiences[id].img;
    });
    label.addEventListener("mouseleave", () => {
      expImg.src = "assets/images/projects/pick-one.gif";
    });
  });
});
