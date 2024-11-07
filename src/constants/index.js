export const navLinks = [
    {
        id: 1,
        name: 'Accueil',
        href: '#home',
    },
    {
        id: 2,
        name: 'À propos',
        href: '#about',
    },
    {
        id: 3,
        name: 'Portfolio',
        href: '#experience',
    },
    {
        id: 4,
        name: 'Contacter',
        href: '#contact',
    },
];


export const myProjects = [
    {
        title: 'CartOCampus',
        desc: 'Cette application permet de se déplacer facilement sur le campus de Paul Sabatier, de trouver facilement les bâtiments et services présents.\n',
        href: 'https://play.google.com/store/apps/details?id=com.neocampus.cartocampus&hl=fr',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Java',
                path: '/assets/java.svg',
            },
            {
                id: 2,
                name: 'Flutter',
                path: 'assets/flutter.svg',
            },
        ],
    },
    {
        title: 'FishNote',
        desc: 'FishNote est une application mobile qui vous offre la possibilité de garder en mémoire vos captures de pêche.',
        href: 'https://github.com/Jarod-G/FishNote',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Flutter',
                path: '/assets/flutter.svg',
            }
        ],
    },
    {
        title: 'Site Web Portfolio',
        desc: 'Ce site web portfolio présente mes compétences en développement web, notamment avec  React.js, Three.js, TailwindCSS et GSAP. Il met en avant mes projets et mon expertise en intégration 3D et animations interactives, créant une expérience immersive et moderne.',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Three.js',
                path: '/assets/three-js.svg',
            },
        ],
    }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.045 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.1, -2.0, -1.5] : isTablet ? [0.15, -6, -2.5] : [0.15, -3, -2.5],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [15, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        SculpturePosition: isSmall ? [0, -10, 0] : isMobile ? [0, -10, 0] : isTablet ? [-15, 8, -10] : [-15, 0, 0],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Étudiant en informatique',
        pos: 'Étudiant',
        duration: '2021 - Present',
        title: "Étudiant en licence informatique à l'université Toulouse Paul Sabatier",
        icon: '/assets/logo-ups.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'CartOCampus',
        pos: 'Développeur Mobile junior',
        duration: '2024 - 2024',
        title: "Developpeur mobile pour l'amélioration et la mise à jour de l'application CartOCampus pour l'université Toulouse Paul Sabatier",
        icon: '/assets/project-logo1.png',
        animation: 'clapping',
    },
];

