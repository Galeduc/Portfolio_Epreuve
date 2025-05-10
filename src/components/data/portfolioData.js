/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/Agence.png',
		title: 'One Web',
		skills: ['CSS', 'Tailwind', 'JavaScript', 'PHP'],
		descripcion: 'Projet personnel de création d\'une agence web. Développé pour démontrer mes compétences en intégration web responsive et moderne. Le site utilise Tailwind CSS pour un design élégant et PHP pour la gestion backend. Ce projet renforce mes compétences en "Développer la présence en ligne de l\'organisation" et "Répondre aux incidents et aux demandes d\'assistance".',
		demoURL: 'https://galeduc.fr/WebAgency/index.php',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/desport.png',
		title: 'Desport',
		skills: ['JavaScript', 'Bootstrap', 'CSS', 'HTML'],
		descripcion: 'Projet personnel pour une boulangerie artisanale. Site vitrine responsive mettant en valeur les produits et services de la boulangerie. Utilisation de Bootstrap pour une interface moderne et JavaScript pour des fonctionnalités interactives. Ce projet démontre ma capacité à créer des solutions web professionnelles pour des clients locaux.',
		demoURL: 'https://galeduc.fr/desport/index.html',
		repoURL: 'URL_DU_REPO_DESPORT',
		anim: 'fade-up',
	},
	{
		imgSrc: '/img/CapsK.png',
		title: 'CapsK',
		skills: ['JavaScript', 'Tailwind', 'CSS', 'PHP'],
		descripcion: 'Projet personnel de site e-commerce. Développé avec une architecture moderne combinant PHP pour le backend et JavaScript pour une expérience utilisateur fluide. Interface élégante créée avec Tailwind CSS. Ce projet démontre mes compétences en développement full-stack et en création de solutions e-commerce.',
		demoURL: 'https://galeduc.fr/capsk/index.php',
		repoURL: 'URL_DU_REPO_CAPSK',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/gberge.png',
		title: 'Gberge',
		skills: ['Symfony', 'CSS', 'Tailwind'],
		descripcion: 'Projet personnel de plateforme de vente de serveurs. Développé avec Symfony pour une architecture robuste et sécurisée. Interface utilisateur moderne créée avec Tailwind CSS. Ce projet démontre ma maîtrise des frameworks professionnels et ma capacité à créer des solutions e-commerce complexes.',
		demoURL: 'https://gberge.fr',
		repoURL: 'URL_DU_REPO_GBERGE',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/grad.png',
		title: 'Site Société Grad',
		skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP'],
		descripcion: 'Projet académique réalisé en première année de BTS SIO (2023-2024). Site vitrine développé pour l\'apprentissage des fondamentaux du développement web. Ce projet a permis de valider les compétences "Répondre aux incidents et aux demandes d\'assistance et d\'évolution" et "Développer la présence en ligne de l\'organisation". Une version WordPress a également été développée pour acquérir des compétences en CMS.',
		demoURL: 'URL_DEMO_GRAD',
		repoURL: 'URL_REPO_GRAD',
		anim: 'fade-up',
	},
	{
		imgSrc: '/img/glpi.png',
		title: 'Gestion GLPI',
		skills: ['PHP', 'MySQL', 'Linux'],
		descripcion: 'Projet académique de première année incluant l\'installation et la configuration d\'une VM GLPI. Durant le stage de première année (30 Mai - 30 juin 2023), j\'ai travaillé sur la correction de bugs GLPI. Ce projet valide les compétences "Gérer le patrimoine informatique" et "Répondre aux incidents et aux demandes d\'assistance et d\'évolution".',
		demoURL: 'URL_DEMO_GLPI',
		repoURL: 'URL_REPO_GLPI',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/AppLioran.png',
		title: 'Application AppLioran',
		skills: ['Java', 'Android Studio'],
		descripcion: 'Application mobile Android développée pour l\'épreuve E5 en BTS SIO (2023-2024). Cette application touristique pour la station de ski du Lioran permet aux utilisateurs de découvrir les pistes, les restaurants et les activités disponibles. Développée en Java avec Android Studio, elle intègre une base de données SQLite, la géolocalisation et une interface utilisateur Material Design. Ce projet valide les compétences "Développer la présence en ligne de l\'organisation", "Travailler en mode projet" et "Mettre à disposition des utilisateurs un service informatique". L\'application propose des fonctionnalités comme la météo en temps réel, l\'état des pistes et un système de favoris personnalisé.',
		demoURL: 'URL_DEMO_APPLIORAN',
		repoURL: 'URL_REPO_APPLIORAN',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/symfony-project.png',
		title: 'Projet Symfony E6',
		skills: ['Symfony', 'Tailwind'],
		descripcion: 'Site web développé avec Symfony pour l\'épreuve E6. Ce projet démontre ma maîtrise des frameworks modernes et valide les compétences "Gérer le patrimoine informatique", "Développer la présence en ligne de l\'organisation", "Travailler en mode projet" et "Mettre à disposition des utilisateurs un service informatique".',
		demoURL: 'URL_DEMO_SYMFONY',
		repoURL: 'URL_REPO_SYMFONY',
		anim: 'fade-up',
	},
	{
		imgSrc: '/img/LePaysanVigneron.png',
		title: 'LePaysanVigneron',
		skills: ['Symfony', 'Tailwind', 'PHP', 'MySQL'],
		descripcion: 'Projet réalisé durant le stage de deuxième année (20 janvier - 21 février 2025). Site pour le Magazine le PaysanVigneron en Symfony et Tailwind CSS. Ce projet démontre ma capacité à créer des solutions professionnelles complètes et à m\'adapter aux besoins clients en situation réelle.',
		demoURL: 'https://lepaysanvigneron.com/',
		repoURL: 'URL_REPO_VIGNERON',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/FreeEmploi.png',
		title: 'FreeEmploi',
		skills: ['React Native', 'JavaScript', 'CSS'],
		descripcion: 'Application mobile développée durant mon stage de première année (30 Mai - 30 juin 2023) chez ClearCode. Application de recherche d\'emploi destinée aux personnes en situation de handicap. Développée avec React Native pour une expérience utilisateur fluide sur iOS et Android. Ce projet valide les compétences "Développer la présence en ligne de l\'organisation" et "Mettre à disposition des utilisateurs un service informatique".',
		demoURL: 'URL_DEMO_FREEEMPLOI',
		repoURL: 'URL_REPO_FREEEMPLOI',
		anim: 'fade-up',
	},
	{
		imgSrc: '/img/FW16.png',
		title: 'FW16',
		skills: ['React Native', 'JavaScript', 'CSS'],
		descripcion: 'Application mobile développée pendant mon stage de première année (30 Mai - 30 juin 2023) chez ClearCode. Application de gestion et suivi pour une entreprise de BTP. Utilisation de React Native pour créer une interface intuitive et responsive. Ce projet renforce mes compétences en "Développer des solutions applicatives" et "Répondre aux incidents et aux demandes d\'assistance et d\'évolution".',
		demoURL: 'URL_DEMO_FW16',
		repoURL: 'URL_REPO_FW16',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/veille.png',
		title: 'Veille Informationnelle',
		skills: ['Recherche', 'Documentation', 'Analyse'],
		descripcion: 'Document présentant ma veille technologique continue sur les dernières évolutions du secteur informatique. Couvre les domaines du développement web, de la cybersécurité et des frameworks modernes. Cette veille démontre ma capacité à maintenir mes connaissances à jour et valide la compétence "Organiser son développement professionnel".',
		demoURL: '/docs/VI.pdf',
		repoURL: 'URL_REPO_VEILLE',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/synthese.png',
		title: 'Tableau de Synthèse',
		skills: ['Documentation', 'Analyse', 'Gestion de Projet'],
		descripcion: 'Document récapitulatif de l\'ensemble de mes réalisations professionnelles durant le BTS SIO. Ce tableau met en relation mes projets avec les compétences du référentiel, démontrant ma progression et l\'acquisition des compétences requises. Document essentiel pour l\'épreuve E4 et la validation de mon parcours professionnel.',
		demoURL: '/docs/TS.pdf',
		repoURL: 'URL_REPO_SYNTHESE',
		anim: 'fade-up',
	},

	{
		imgSrc: '/img/grad.png',
		title: 'Site Wordpress',
		skills: ['Wordpress'],
		descripcion: 'Créé avec Wordpress. Gestion de contenu, personnalisation du thème, installation d’extensions.',
		demoURL: 'URL_DEMO_WORDPRESS',
		repoURL: 'URL_REPO_WORDPRESS',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/Cavalier.png',
		title: 'Cavalier',
		skills: ['JavaScript'],
		descripcion: 'Développé en JavaScript. Gestion des déplacements du cavalier sur un échiquier, logique de jeu interactive.',
		demoURL: 'URL_DEMO_CAVALIER',
		repoURL: 'URL_REPO_CAVALIER',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/pronote.png',
		title: 'Pronote sur Android Studio',
		skills: ['Java'],
		descripcion: 'Réalisé en Java sous Android studio avec une interface graphique. Gestion des notes et des emplois du temps, interface utilisateur simple.',
		demoURL: 'URL_DEMO_PRONOTE',
		repoURL: 'URL_REPO_PRONOTE',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/cdm-symfony.png',
		title: 'Coupe du monde (Symfony)',
		skills: ['Symfony'],
		descripcion: 'Développé avec Symfony. Gestion d’événements sportifs, affichage des résultats et classement.',
		demoURL: 'URL_DEMO_CDM',
		repoURL: 'URL_REPO_CDM',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/messagerie.png',
		title: 'Application de messagerie',
		skills: ['Java'],
		descripcion: 'Développée en Java. Envoi et réception de messages, gestion des utilisateurs.',
		demoURL: 'URL_DEMO_MESSAGERIE',
		repoURL: 'URL_REPO_MESSAGERIE',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/sites-sportifs.png',
		title: 'Sites sportifs (Android Studio)',
		skills: ['Java', 'Android Studio'],
		descripcion: 'Développé en Java sous Android Studio. Affichage et gestion des informations d’événements sportifs.',
		demoURL: 'URL_DEMO_SITESSPORTIFS',
		repoURL: 'URL_REPO_SITESSPORTIFS',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/othello.png',
		title: 'Othello',
		skills: ['Java', 'Android Studio'],
		descripcion: 'Jeu de stratégie réalisé sur Android Studio. Implémentation des règles du jeu et interface utilisateur.',
		demoURL: 'URL_DEMO_OTHELLO',
		repoURL: 'URL_REPO_OTHELLO',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/v12proentreprise.png',
		title: 'V12ProEntreprise',
		skills: ['PHP'],
		descripcion: 'Ajout et développement de nouvelles fonctionnalités sur une application d’expert-comptable, avec adaptation au cahier des charges et support de l’évolution applicative.',
		demoURL: 'URL_DEMO_V12PROENTREPRISE',
		repoURL: 'URL_REPO_V12PROENTREPRISE',
		anim: 'fade-right',
	}
];



const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	HTML: 'skill-icons:html',
	Java: 'skill-icons:java-dark',
	MySQL: 'skill-icons:mysql',
	php: 'skill-icons:php-dark',
	Symfony: 'skill-icons:symfony-dark',
	'React Native': 'skill-icons:react-dark',
	Linux: 'skill-icons:linux-dark',
	Documentation: 'carbon:document',
	Recherche: 'carbon:search',
	Analyse: 'carbon:analytics',
	'Gestion de Projet': 'carbon:project'
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});

