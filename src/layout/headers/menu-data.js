import { getAccessToken } from "/src/utils/utils";

var menu_data = [
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
    id: 3,
    mega_menu: true,
    has_dropdown: true,
    title: "Categories",
    link: "/categories",
    sub_menus: [
      { link: "/categories/cat_1", title: "Maison et Déco" },
      { link: "/categories/cat_2", title: "Santé et bien être " },
      { link: "/categories/cat_3", title: "Véhicule et transport" },
      { link: "/categories/cat_4", title: "Divers" },
    ],
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

const getAllSousCategorie = async () => {
  try {
    let array = [];
    const access_token = await getAccessToken();
    const url =
      "https://data.mongodb-api.com/app/data-otnel/endpoint/data/v1/action/aggregate";

    const pipeline = [
      {
        $lookup: {
          from: "sous_categories",
          let: { categoryId: { $toString: "$_id" } },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$$categoryId", "$idcategorie"] },
              },
            },
            {
              $project: {
                _id: 1,
                nom: 1,
                idcategorie: 1,
              },
            },
          ],
          as: "sous_categories",
        },
      },
      {
        $project: {
          _id: 1,
          nom: 1,
          sous_categories: 1,
        },
      },
    ];

    const body = {
      collection: "categories",
      database: "karohy",
      dataSource: "Cluster0",
      pipeline: pipeline,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (data.documents) {
      array = data.documents;
    }
    var newData = [];
    array.forEach((element) => {
      newData.push({
        link: "/contact",
        title: element.nom,
        sous_categories: element.sous_categories,
      });
    });
    menu_data[1].sub_menus = newData;
    return menu_data; // Renvoie menu_data mis à jour
  } catch (error) {
    console.error("Error:", error);
    return menu_data; // Renvoie menu_data sans mise à jour en cas d'erreur
  }
};

// Exporte le menu_data mis à jour de manière asynchrone
export default async function getMenuData() {
  return await getAllSousCategorie();
}
