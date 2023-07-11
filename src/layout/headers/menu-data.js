const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Accueil",
    link: "/",
  },
  // {
  //   id: 2,
  //   mega_menu: false,
  //   has_dropdown: false,
  //   title: "À propos",
  //   link: "/portfolio",
  // },
  {
    id:3,
    mega_menu:true,
    has_dropdown:true,
    title:'Categories',
    link:'/categories',
    sub_menus:[
      {link:'/categories/cat_1',title:'Maison et Déco'},
      {link:'/categories/cat_2',title:'Santé et bien être '},
      {link:'/categories/cat_3',title:'Véhicule et transport'},
      {link:'/categories/cat_4',title:'Divers'}
    ]
  },
  // {
  //   id:4,
  //   mega_menu:false,
  //   has_dropdown:false,
  //   title:'Blog',
  //   link:'/blog'
  // },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Nous contacter",
    link: "/contact",
  },
];
export default menu_data;
