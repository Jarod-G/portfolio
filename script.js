// Fonction pour créer les wildcards flottants
function createWildcards() {
    const projectSection = document.getElementById('projects');
    const wildcards = ['*', '+', '!', '%', '$', '#'];

    wildcards.forEach(char => {
        const span = document.createElement('span');
        span.className = 'wildcard';
        span.innerText = char;
        span.style.left = `${Math.random() * 100}%`;
        span.style.top = `${Math.random() * 100}%`;
        span.style.animationDelay = `${Math.random() * 5}s`;
        projectSection.appendChild(span);
    });
}

window.onload = function() {
    createWildcards();
}
