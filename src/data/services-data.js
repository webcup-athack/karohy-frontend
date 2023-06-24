import { Bulb, Code, Managed } from '../svg';

const services_data = [
	{
		id: 1,
		duration: '.5s',
		delay: '.8s',
		img: '/assets/img/service/madafood.jpg',
		categorie: 'Événementiel',
		sous_categorie: 'Traiteur',
		title: 'Madafood',
		stars: 10,
		reputation: 3, // 1 à 5
		text_1:
			'Du côté de l’expérience en matière de traiteurs à Antananarivo, Madafood fait partie des plus anciens et est de ce fait expérimenté pour proposer des services de qualité. C’est une société du groupe Glacier, qui hérite du renom et du savoir-faire de l’enseigne. Madafood propose ses services lors des mariages ou lors de vos besoins en cocktail et en buffet.',
		text_2:
			'Grâce à son équipe nombreuse et dynamique, Madafood propose une restauration pour les établissements d’envergure (école ou lieu de travail).',
		home: true,
		service_p_2: true,
	},
	{
		id: 2,
		duration: '.5s',
		delay: '.8s',
		img: '/assets/img/service/carlton.jpg',
		categorie: 'Événementiel',
		sous_categorie: 'Traiteur',
		title: 'Hôtel Carlton',
		stars: 15,
		reputation: 4, // 1 à 5
		text_1:
			'Parmi les traiteurs à Antananarivo, l’Hôtel Carlton, on pouvait s’y attendre, offre un service de grande qualité. Le grand jardin de l’hôtel est à disposition des mariages et baptêmes, et l’intérieur de l’hôtel, consacré aux réceptions, réunions ou galas. L’hôtel dispose de plusieurs salles adaptées à tous les évènements, notamment la fameuse et spacieuse salle Ravinala qui peut contenir plus de 500 invités.',
		text_2:
			'Vous pourrez ainsi profiter du luxe et du savoir-faire de l’hôtel, du service haut de gamme du personnel, mais aussi de sa cuisine aux spécialités variées : malagasy et française.',
		home: true,
		service_p_2: true,
	},
	{
		id: 3,
		duration: '.5s',
		delay: '.8s',
		img: '/assets/img/service/tranovola.jpg',
		categorie: 'Événementiel',
		sous_categorie: 'Location de salle',
		title: 'Tranovola',
		stars: 8,
		reputation: 3, // 1 à 5
		text_1:
			"Idéalement située dans un quartier résidentiel de la capitale Antananarivo, Tranovola, un établissement de référence, est dotée d'une salle de réception et de séminaire convivial en face d’un jardin tropical remarquable où l’air est pur et le calme est roi.",
		text_2:
			'C’est également l’adresse recommandée pour savourer la gastronomie de Madagascar avec les plats malagasy (traditionnels, royaux, menus en dégustation, et même buffets à la demande d’un groupe) et les plats tropicaux.',
		home: true,
		service_p_2: true,
	},
	{
		id: 4,
		duration: '.5s',
		delay: '.8s',
		img: '/assets/img/service/lovely.jpg',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		title: 'Lovely décoration événementiel',
		stars: 2,
		reputation: 2, // 1 à 5
		text_1:
			'Décoration événementielle et florale: mariage, fiançailles, baptême, anniversaire',
		text_2: '',
		home: true,
		service_p_2: true,
	},
	// {
	//   id: 2,
	//   duration: ".7s",
	//   delay: "1s",
	//   img: "/assets/img/service/bank-of-africa.png",
	//   title: "Bank of Africa Madagascar",
	//   text_1:
	//     "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
	//   text_2:
	//     "At Collax we specialize in designing, building, shipping and scaling...",
	//   home: true,
	//   service_p_2: true,
	// },
	// {
	//   id: 3,
	//   duration: ".9s",
	//   delay: "1.2s",
	//   img: "/assets/img/service/jovena.png",
	//   title: "Jovena",
	//   text_1:
	//     "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
	//   text_2:
	//     "At Collax we specialize in designing, building, shipping and scaling...",
	//   home: true,
	//   service_p_2: true,
	// },
	// {
	//   id: 4,
	//   duration: ".9s",
	//   delay: "1.3s",
	//   img: "/assets/img/service/air-madagascar.png",
	//   title: "Air Madagascar",
	//   text_1:
	//     "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
	//   text_2:
	//     "At Collax we specialize in designing, building, shipping and scaling...",
	//   service_p_2: true,
	// },
	// home two
	{
		id: 5,
		duration: '.3s',
		delay: '.6s',
		color: 'tp-sv-blue-color',
		img: '/assets/img/service/service-3.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		title: 'Mobile Design',
		stars: 2,
		reputation: 4, // 1 à 5
		text_1:
			"Notre service de design mobile se concentre sur la création d'interfaces utilisateur exceptionnelles pour les appareils mobiles. Que vous ayez besoin d'une application mobile ou d'un site web réactif, notre équipe de designers expérimentés est là pour vous aider. Nous travaillons en étroite collaboration avec vous pour concevoir des expériences mobiles conviviales, intuitives et esthétiquement plaisantes.",
		text_2:
			"Nous accordons une grande importance à l'ergonomie et à la facilité de navigation sur les petits écrans. Notre objectif est de créer des interfaces qui captivent les utilisateurs dès le premier regard et les encouragent à explorer davantage. Nous utilisons des techniques de conception adaptatives pour nous assurer que votre application ou votre site s'adapte parfaitement à toutes les tailles d'écran et offre une expérience fluide, quel que soit l'appareil utilisé.",
		home_2: true,
		service_p_3: true,
	},
	{
		id: 6,
		duration: '.5s',
		delay: '.8s',
		color: 'tp-sv-sky-color',
		img: '/assets/img/service/service-1.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 5, // 1 à 5
		title: 'Web Development',
		text_1:
			"Notre service de développement web propose des solutions sur mesure pour créer des sites web dynamiques et performants. Que vous ayez besoin d'un site vitrine, d'une plateforme de commerce électronique ou d'une application web complexe, notre équipe de développeurs expérimentés est prête à relever tous les défis.",
		text_2:
			"Notre expertise couvre une large gamme de langages de programmation, de bases de données et de frameworks, ce qui nous permet de développer des fonctionnalités avancées et des expériences utilisateur personnalisées. Nous accordons une attention particulière à l'optimisation des performances, à la compatibilité multiplateforme et à la facilité de gestion du contenu, pour vous offrir un site web puissant et évolutif.",
		home_2: true,
		service_p_3: true,
	},
	{
		id: 7,
		duration: '.7s',
		delay: '1s',
		color: 'tp-sv-pink-color',
		img: '/assets/img/service/service-icon-4.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 0, // 1 à 5
		title: 'UI UX Design',

		text_1:
			"Notre service de design UI/UX offre une approche innovante pour créer des interfaces utilisateur exceptionnelles. Nos concepteurs expérimentés combinent l'esthétique visuelle avec une compréhension approfondie des besoins des utilisateurs pour offrir des expériences interactives et intuitives. En travaillant en étroite collaboration avec nos clients, nous créons des conceptions centrées sur l'utilisateur qui mettent l'accent sur la convivialité, la cohérence et l'engagement.",

		text_2:
			"Notre équipe de designers UI/UX collabore étroitement avec les développeurs pour assurer une implémentation fluide et précise de nos conceptions. Nous nous efforçons de créer des interfaces élégantes et fonctionnelles, en utilisant les meilleures pratiques de conception et en tenant compte des dernières tendances en matière d'expérience utilisateur. Notre objectif est de créer des produits numériques qui offrent une expérience utilisateur exceptionnelle et favorisent l'engagement des utilisateurs.",
		home_2: true,
		service_p_3: true,
	},
	// home three
	{
		id: 8,
		duration: '1s',
		delay: '.3s',
		img: '/assets/img/service/service-5.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 0, // 1 à 5
		title: 'Marketing',
		color: 'service-color-1',
		text_1:
			'Notre service de marketing vous aide à atteindre vos objectifs commerciaux en développant des stratégies personnalisées et efficaces. Nous analysons votre marché cible, identifions vos concurrents et mettons en place des actions marketing adaptées à vos besoins spécifiques. Que ce soit par le biais de campagnes publicitaires, de marketing digital, de relations publiques ou de stratégies de contenu, nous travaillons à accroître votre visibilité, à générer des leads qualifiés et à renforcer votre positionnement sur le marché.',

		text_2:
			"Nous comprenons l'importance d'une approche holistique du marketing, en intégrant des stratégies multi-canaux pour toucher votre public cible de manière efficace. Nous nous appuyons sur des données et des analyses approfondies pour optimiser vos efforts marketing et maximiser votre retour sur investissement. Notre équipe expérimentée est à l'affût des dernières tendances et des meilleures pratiques du marketing, afin de vous offrir des solutions innovantes et percutantes. Faites confiance à notre expertise pour propulser votre entreprise vers de nouveaux sommets.",
		home_3: true,
		service_p_4: true,
	},
	{
		id: 9,
		duration: '1s',
		delay: '.5s',
		img: '/assets/img/service/service-6.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 4, // 1 à 5
		title: 'Web Design',
		color: 'service-color-2',
		text_1:
			"Notre service de web design offre des solutions créatives et sur mesure pour donner vie à votre présence en ligne. Nous concevons des sites web attrayants, ergonomiques et fonctionnels, en tenant compte de vos objectifs commerciaux et des besoins de votre audience. Notre approche centrée sur l'utilisateur garantit une expérience de navigation optimale, favorisant ainsi l'engagement et la conversion. Que vous ayez besoin d'un site vitrine, d'un site e-commerce ou d'une plateforme complexe, notre équipe de designers talentueux est là pour créer une présence en ligne qui vous démarque de la concurrence.",

		text_2:
			"En tant qu'experts du web design, nous restons à jour avec les dernières tendances et les meilleures pratiques du secteur. Nous accordons une grande importance à l'esthétique visuelle, à la cohérence de l'interface et à la convivialité. De plus, nous nous assurons que votre site web est optimisé pour les moteurs de recherche, afin d'améliorer sa visibilité et de générer du trafic organique. Avec notre expertise technique et notre sens aiguisé du design, nous sommes prêts à transformer votre vision en une réalité web captivante.",
		home_3: true,
		service_p_4: true,
	},
	{
		id: 10,
		duration: '1s',
		delay: '.7s',
		img: '/assets/img/service/service-7.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 4, // 1 à 5
		title: 'Branding',
		color: 'service-color-3',

		text_1:
			"Notre service de branding vous aide à créer une identité de marque forte et cohérente qui se démarque sur le marché. Nous travaillons en étroite collaboration avec vous pour comprendre les valeurs, la vision et la personnalité de votre entreprise, afin de développer une stratégie de branding efficace. De la création de logos et de la conception d'une identité visuelle complète à la définition de la voix de marque et de la stratégie de communication, nous mettons tout en œuvre pour renforcer la reconnaissance de votre marque et susciter l'engagement des consommateurs.",

		text_2:
			"Notre équipe de spécialistes du branding excelle dans la création d'une expérience de marque mémorable à travers tous les points de contact, que ce soit en ligne ou hors ligne. Nous concevons des supports de communication percutants, des emballages attrayants et des expériences de marque immersives. En utilisant des éléments visuels et narratifs cohérents, nous veillons à ce que votre marque communique efficacement son message et crée une connexion émotionnelle avec votre public cible. Faites confiance à notre expertise en branding pour donner à votre entreprise une identité distincte et durable.",
		home_3: true,
		service_p_4: true,
	},
	// home four
	{
		id: 11,
		duration: '.3s',
		delay: '.5s',
		img: '/assets/img/service/007-email.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 5, // 1 à 5
		title: 'Product Management',
		border_effect: '',

		text_1:
			"Notre service de gestion de produit vous aide à transformer vos idées en produits exceptionnels qui répondent aux besoins et aux attentes de votre marché cible. Nous travaillons en étroite collaboration avec vous pour définir la vision et la stratégie de votre produit, en tenant compte de votre marché, de vos concurrents et des besoins des utilisateurs. Nous gérons l'ensemble du cycle de vie du produit, de la conception initiale à la commercialisation, en veillant à ce que votre produit soit de haute qualité, convivial et compétitif.",

		text_2:
			"Notre équipe de gestion de produit possède une expertise approfondie dans la gestion de projets complexes et dans l'alignement des objectifs commerciaux avec les besoins des utilisateurs. Nous utilisons des méthodologies agiles pour assurer une livraison efficace et rapide des fonctionnalités, tout en étant flexibles pour répondre aux changements et aux retours des utilisateurs. De la recherche de marché à l'analyse des données, nous utilisons des approches basées sur des données pour prendre des décisions éclairées et maximiser la réussite de votre produit sur le marché.",
		home_4: true,
		service_p: true,
	},
	{
		id: 12,
		duration: '.5s',
		delay: '.7s',
		img: '/assets/img/service/service4.1.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 4, // 1 à 5
		title: 'Web & Mobile Development',
		border_effect: 'sv-border-effect-1',
		text_1:
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
		text_2: '',
		home_4: true,
		service_p: true,
	},
	{
		id: 13,
		duration: '.7s',
		delay: '.9s',
		img: '/assets/img/service/service4.2.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 4, // 1 à 5
		title: 'Fast Customer Support',
		border_effect: 'sv-border-effect-2',

		text_1:
			"Notre service de support client rapide vous offre une assistance exceptionnelle pour résoudre rapidement les problèmes et répondre aux questions de vos clients. Notre équipe dédiée de professionnels du support client est disponible pour offrir une aide en temps réel, que ce soit par chat, par e-mail ou par téléphone. Nous comprenons l'importance de fournir une réponse rapide et efficace pour garantir la satisfaction de vos clients et maintenir une relation positive avec eux. Vous pouvez compter sur notre support client réactif pour offrir une expérience exceptionnelle à vos clients.",

		text_2:
			"Nous mettons en place des systèmes et des processus efficaces pour gérer les demandes de support client de manière rapide et organisée. Nous utilisons des outils technologiques avancés pour suivre et résoudre les problèmes de manière efficace, en minimisant les temps d'attente et en offrant des solutions adaptées. Notre équipe est formée pour comprendre les besoins et les préoccupations des clients, afin de leur fournir des réponses précises et pertinentes. Avec notre service de support client rapide, vous pouvez offrir à vos clients une assistance de qualité supérieure et renforcer leur confiance envers votre entreprise.",
		home_4: true,
		service_p: true,
	},
	{
		id: 14,
		duration: '.9s',
		delay: '1s',
		img: '/assets/img/service/service4.3.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 3, // 1 à 5
		title: 'Human Resources',
		border_effect: 'sv-border-effect-3',
		text_1:
			"Notre service de ressources humaines vous aide à gérer efficacement vos talents et à développer une culture d'entreprise positive. Nous offrons des solutions personnalisées pour le recrutement, la gestion du personnel, la formation et le développement professionnel. Notre équipe expérimentée travaille en étroite collaboration avec vous pour comprendre vos besoins spécifiques en matière de ressources humaines et mettre en place des stratégies adaptées,",

		text_2:
			"Nous comprenons l'importance des ressources humaines dans la réussite d'une entreprise. Notre service de ressources humaines offre un soutien complet dans tous les aspects de la gestion des employés. Nous gérons les processus de recrutement et de sélection, la gestion des performances, les évaluations, la rémunération et les avantages sociaux. Nous favorisons également un environnement de travail inclusif et équitable, en veillant à la conformité aux lois du travail et à la promotion de la diversité et de l'égalité des chances,.",

		home_4: true,
		service_p: true,
	},
	{
		id: 15,
		duration: '.9s',
		delay: '1.1s',
		img: '/assets/img/service/service4.4.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 4, // 1 à 5
		title: 'Design and Vreatives',
		border_effect: 'sv-border-effect-4',
		text_1:
			"Notre service de design et de création offre des solutions innovantes et esthétiques pour répondre à vos besoins visuels. Que vous ayez besoin d'un nouveau logo, d'une refonte de site web, de supports marketing attrayants ou d'une identité visuelle complète, notre équipe de designers talentueux est là pour donner vie à vos idées. Nous combinons créativité, expertise technique et une compréhension approfondie de votre marque pour créer des designs uniques qui captivent votre public cible et renforcent votre image de marque.",

		text_2:
			"Nous croyons en l'importance du design dans la création d'une expérience mémorable et engageante. Notre approche centrée sur l'utilisateur nous permet de concevoir des interfaces intuitives, des expériences utilisateur fluides et des contenus visuellement attrayants. Que ce soit pour la conception de sites web, d'applications mobiles, de supports imprimés ou de vidéos, nous nous efforçons de repousser les limites de la créativité et de fournir des solutions de design exceptionnelles. Faites confiance à notre service de design et de création pour donner à votre marque une esthétique unique et percutante.",
		home_4: true,
		service_p: true,
	},
	{
		id: 16,
		duration: '1s',
		delay: '1.1s',
		img: '/assets/img/service/service4.5.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 4, // 1 à 5
		title: 'Marketing and Communication',
		border_effect: 'sv-border-effect-5',
		text_1:
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
		home_4: true,
		service_p: true,
	},
	{
		id: 17,
		duration: '1.1s',
		delay: '1.2s',
		img: '/assets/img/service/service4.6.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 3, // 1 à 5
		title: 'Business Development',
		border_effect: 'sv-border-effect-6',
		text_1:
			'Notre service de développement commercial vous aide à stimuler la croissance de votre entreprise en identifiant de nouvelles opportunités, en établissant des partenariats stratégiques et en améliorant vos processus commerciaux. Nous travaillons en étroite collaboration avec vous pour comprendre votre vision et vos objectifs, afin de développer des stratégies adaptées à votre entreprise. Que ce soit en explorant de nouveaux marchés, en négociant des accords commerciaux ou en améliorant votre positionnement sur le marché, notre équipe expérimentée met en place des initiatives pour stimuler votre activité et renforcer votre position concurrentielle.',

		text_2:
			"La croissance et le développement sont essentiels pour maintenir la compétitivité sur le marché. Notre service de développement commercial offre une expertise approfondie dans l'identification et l'exploitation de nouvelles opportunités commerciales. Nous analysons votre marché, votre concurrence et vos clients potentiels pour élaborer des plans stratégiques solides. En utilisant des techniques de prospection, des méthodes de vente éprouvées et des outils de suivi, nous vous aidons à développer votre portefeuille de clients et à augmenter vos revenus. Faites confiance à notre équipe de développement commercial pour propulser votre entreprise vers de nouveaux sommets.",
		home_4: true,
		service_p: true,
	},
	// add service item
	{
		id: 18,
		duration: '1.2s',
		delay: '1.3s',
		img: '/assets/img/service/007-email.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 5, // 1 à 5
		title: 'Product Management',
		border_effect: '',

		text_1:
			'En tant que responsable de produit, nous travaillons en étroite collaboration avec les équipes de développement, de conception et de marketing pour créer des produits innovants et répondre aux besoins des utilisateurs. Nous sommes responsables de la planification, de la définition des fonctionnalités, de la gestion des priorités et de la coordination de toutes les étapes du cycle de vie du produit. Notre objectif est de garantir que le produit est rentable, compétitif sur le marché et offre une expérience utilisateur exceptionnelle.',

		text_2:
			"En tant que gestionnaire de produit, nous sommes également chargés d'analyser le marché, de suivre les tendances et de comprendre les besoins des utilisateurs. Nous effectuons des études de marché, des analyses concurrentielles et recueillons les commentaires des utilisateurs pour guider le développement du produit. Nous travaillons en étroite collaboration avec les parties prenantes internes et externes pour aligner la vision du produit, définir la feuille de route et prendre des décisions stratégiques. Notre objectif est de maximiser la valeur du produit, d'optimiser son adoption et de favoriser sa croissance sur le marché.",
		service_p: true,
	},
	// home five
	{
		id: 19,
		img: '/assets/img/service/service4.1.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 5, // 1 à 5
		top_border: true,
		icon: 'flaticon-target',
		title: 'Business  Analysis',

		text_1:
			"Notre service d'analyse commerciale vise à comprendre en profondeur votre entreprise, vos opérations et votre marché pour prendre des décisions éclairées. Nous collectons et analysons des données pertinentes, identifions les tendances, les opportunités et les défis, et évaluons la performance de votre entreprise. Grâce à notre expertise en modélisation et en prévision, nous fournissons des informations précieuses pour optimiser vos stratégies, améliorer vos processus et prendre des décisions basées sur des données tangibles.",

		text_2:
			"En tant qu'analystes commerciaux, nous utilisons des techniques avancées d'analyse et des outils technologiques pour extraire des informations exploitables à partir de données complexes. Nous étudions les métriques clés, effectuons des analyses comparatives, identifions les facteurs de succès et proposons des recommandations pour améliorer la performance de votre entreprise. Que ce soit pour évaluer la rentabilité d'un projet, optimiser les coûts, identifier de nouvelles sources de revenus ou améliorer l'efficacité opérationnelle, notre service d'analyse commerciale vous offre des perspectives précieuses pour prendre des décisions éclairées.",
		home_5: true,
	},
	{
		id: 20,
		img: '/assets/img/service/service4.2.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 3, // 1 à 5
		icon: 'flaticon-statistics',
		title: 'Marketin Strategy',
		text_1:
			"Notre service de stratégie marketing vous aide à élaborer des plans stratégiques complets pour atteindre vos objectifs commerciaux. Nous analysons votre marché, votre concurrence et votre public cible pour identifier les opportunités et les défis. En nous basant sur ces informations, nous développons des stratégies marketing personnalisées qui mettent en valeur vos avantages concurrentiels, renforcent votre positionnement et favorisent la croissance de votre entreprise. Que ce soit en matière de segmentation du marché, de développement de produits, de tarification, de distribution ou de communication, notre équipe d'experts vous guide dans la création d'une stratégie marketing efficace.",

		text_2:
			"En tant que spécialistes de la stratégie marketing, nous vous aidons à définir votre proposition de valeur unique et à formuler des messages percutants pour votre public cible. Nous travaillons sur des plans d'action détaillés, en intégrant des tactiques de marketing traditionnelles et numériques, telles que la publicité, les médias sociaux, le marketing de contenu et le référencement. Nous mettons également en place des mesures de suivi et d'évaluation pour mesurer l'efficacité de vos campagnes et apporter les ajustements nécessaires. Avec notre service de stratégie marketing, vous pouvez prendre des décisions éclairées et mettre en œuvre des initiatives marketing efficaces pour obtenir un avantage concurrentiel sur le marché.",
		home_5: true,
	},
	{
		id: 21,
		img: '/assets/img/service/service4.3.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 2, // 1 à 5
		icon: 'flaticon-coding',
		title: ' Design & Development',

		text_1:
			"Notre service de design et développement offre une approche holistique pour créer des expériences numériques exceptionnelles. Nos concepteurs talentueux collaborent étroitement avec nos développeurs pour donner vie à des interfaces attrayantes et fonctionnelles. Nous accordons une grande importance à l'esthétique visuelle, à l'utilisabilité et à l'expérience utilisateur, en veillant à ce que chaque élément soit harmonieux et engageant. Que ce soit pour la conception de sites web, d'applications mobiles ou de plateformes interactives, nous vous offrons des solutions sur mesure qui répondent à vos besoins et qui captivent votre audience.",

		text_2:
			"Lorsque nous abordons le développement, nous adoptons une approche agile et axée sur les meilleures pratiques. Notre équipe de développeurs expérimentés utilise des technologies de pointe pour créer des produits numériques performants et évolutifs. Nous nous engageons à fournir des solutions techniques robustes, sécurisées et compatibles avec les normes actuelles. Que ce soit pour le développement front-end, le développement back-end, l'intégration de systèmes ou le déploiement de sites web, nous sommes en mesure de vous accompagner tout au long du processus, en garantissant des résultats de haute qualité.",
		home_5: true,
	},
	{
		id: 22,
		img: '/assets/img/service/service4.4.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 1, // 1 à 5
		icon: 'flaticon-team',
		title: 'Business Consulting',
		text_1:
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
		text_2: '',
		home_5: true,
	},
	// home six
	{
		id: 23,
		img: '/assets/img/service/service-1.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 5, // 1 à 5
		icon: <Bulb />,
		title: 'Collax business solution',

		text_1:
			"Notre service de conseil en entreprise offre une expertise approfondie pour vous aider à prendre des décisions stratégiques et à atteindre vos objectifs commerciaux. Nous travaillons en étroite collaboration avec vous pour comprendre vos défis et vos opportunités, et nous vous fournissons des recommandations personnalisées basées sur une analyse approfondie de votre entreprise, de votre marché et de votre environnement concurrentiel. Que ce soit pour l'optimisation des processus, la gestion du changement, l'expansion internationale ou la transformation numérique, notre équipe de consultants chevronnés est là pour vous guider et vous aider à réaliser votre plein potentiel.",

		text_2:
			"En tant que consultants en entreprise, nous vous apportons une vision stratégique et des compétences analytiques pour vous aider à résoudre des problèmes complexes et à saisir de nouvelles opportunités. Nous travaillons à vos côtés pour développer des stratégies sur mesure, mettre en œuvre des initiatives de croissance, améliorer la performance opérationnelle et renforcer votre avantage concurrentiel. Notre approche est axée sur des solutions pratiques et réalisables, et nous mettons un point d'honneur à vous fournir des recommandations basées sur des données concrètes et des analyses approfondies. Faites confiance à notre service de conseil en entreprise pour faire avancer votre entreprise vers le succès.",
		duration: '.3s',
		delay: '.5s',
		home_6: true,
	},
	// services 3
	{
		id: 26,
		duration: '.9s',
		delay: '1s',
		color: 'tp-sv-blue-color',
		img: '/assets/img/service/service-11.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 1, // 1 à 5
		title: 'Customer Support',

		text_1:
			"Notre service de support personnalisé offre une assistance complète et réactive pour répondre aux besoins de vos clients. Nous comprenons l'importance d'une expérience client exceptionnelle et nous nous efforçons de fournir un service de haute qualité à chaque interaction. Notre équipe de professionnels dédiés est formée pour traiter efficacement les demandes, résoudre les problèmes et fournir des solutions adaptées. Que ce soit par téléphone, par e-mail, par chat en direct ou via les réseaux sociaux, nous sommes là pour offrir un support personnalisé qui renforce la satisfaction de vos clients et fidélise votre base d'utilisateurs.",

		text_2:
			'Nous croyons fermement que le support client est un élément clé de la réussite de votre entreprise. Notre service de support personnalisé est conçu pour répondre aux besoins uniques de votre entreprise et de vos clients. Nous nous engageons à fournir des réponses rapides, des solutions efficaces et un service amical et professionnel. Notre équipe est formée pour traiter une variété de demandes, des questions techniques aux demandes de renseignements généraux. En choisissant notre service de support personnalisé, vous pouvez vous concentrer sur votre cœur de métier tout en offrant à vos clients une expérience client exceptionnelle et un soutien de qualité supérieure.',
		service_p_3: true,
	},
	// service 4,
	{
		id: 29,
		duration: '.9s',
		delay: '1s',
		img: '/assets/img/service/service-9.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 5, // 1 à 5
		title: 'Content Writing',
		color: 'sv-four-color',
		text_1:
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
		text_2: '',
		service_p_4: true,
	},
	{
		id: 31,
		duration: '.9s',
		delay: '1.2s',
		img: '/assets/img/service/service-5.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 5, // 1 à 5
		title: 'UI Design',
		color: 'sv-five-color',
		text_1:
			"Notre service de design d'interface utilisateur (UI) se concentre sur la création d'expériences visuelles attrayantes et conviviales pour vos utilisateurs. Nous travaillons en étroite collaboration avec vous pour comprendre votre public cible, vos objectifs et votre marque, afin de concevoir des interfaces qui captivent et engagent vos utilisateurs. Du choix des couleurs et des typographies à la disposition des éléments interactifs, nous nous efforçons de créer des designs esthétiques et fonctionnels qui améliorent l'expérience utilisateur. Avec notre expertise en matière de conception d'interfaces utilisateur, nous transformons vos idées en réalité.",

		text_2:
			"L'interface utilisateur (UI) est un élément essentiel de toute application ou site web. Notre service de design d'UI met l'accent sur la création d'interfaces intuitives et faciles à utiliser. Nous combinons une solide compréhension des principes de conception avec une recherche approfondie sur vos utilisateurs pour créer des expériences qui répondent à leurs besoins et attentes. Notre équipe de designers talentueux utilise des outils et des techniques de pointe pour concevoir des interfaces esthétiques, cohérentes et réactives. Avec notre service de design d'UI, vous pouvez offrir à vos utilisateurs une expérience agréable et mémorable lors de l'interaction avec votre produit ou site web.",
		service_p_4: true,
	},
];

export default services_data;
