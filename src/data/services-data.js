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
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
		title: (
			<>
				Human <br /> Resources
			</>
		),
		border_effect: 'sv-border-effect-3',
		text_1:
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
		title: (
			<>
				Business <br /> Analysis
			</>
		),
		text_1:
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
		title: (
			<>
				Marketing <br />
				Strategy
			</>
		),
		text_1:
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
		title: (
			<>
				Design & <br />
				Development
			</>
		),
		text_1:
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
		title: (
			<>
				Business <br /> Consulting
			</>
		),
		text_1:
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
		duration: '.3s',
		delay: '.5s',
		home_6: true,
	},
	{
		id: 24,
		img: '/assets/img/service/service-2.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 1, // 1 à 5
		icon: <Code />,
		title: 'Web, app development',
		text_1:
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
		duration: '.5s',
		delay: '.7s',
		active: true,
		home_6: true,
	},
	{
		id: 25,
		img: '/assets/img/service/service-3.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 1, // 1 à 5
		icon: <Managed />,
		title: (
			<>
				Managed <br /> service solution
			</>
		),
		text_1:
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
		duration: '.7s',
		delay: '.9s',
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
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
		service_p_3: true,
	},
	{
		id: 27,
		duration: '.9s',
		delay: '1.1s',
		color: 'tp-sv-sky-color',
		img: '/assets/img/service/service-8.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 4, // 1 à 5
		title: 'Custom Service',
		text_1:
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
		service_p_3: true,
	},
	{
		id: 28,
		duration: '.9s',
		delay: '1.2s',
		color: 'tp-sv-pink-color',
		img: '/assets/img/service/service-9.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 3, // 1 à 5
		title: 'Website Design',
		text_1:
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
		service_p_4: true,
	},
	{
		id: 30,
		duration: '.9s',
		delay: '1.1s',
		img: '/assets/img/service/service-10.png',
		categorie: 'Événementiel',
		sous_categorie: 'Décorateur',
		stars: 2,
		reputation: 4, // 1 à 5
		title: 'Web Design',
		color: 'sv-six-color',
		text_1:
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
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
			'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
		service_p_4: true,
	},
];

export default services_data;
