import Link from "next/link";
import React, { useState, useEffect } from "react";
import getMenuData from "./menu-data";

const NavMenus = () => {
  const [menu_data, setMenu_data] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      const data = await getMenuData();
      setMenu_data(data);
    };

    fetchMenuData();
  }, []);

  return (
    <ul>
      {menu_data.map((menu, i) => (
        <li
          key={i}
          className={`${menu.has_dropdown ? "has-dropdown" : ""}
      ${menu.mega_menu ? "has-mega-menu" : ""}`}
          style={{ marginInline: "7%" }}
        >
          <Link href={menu.link}>
            <a>
              {menu.title}{" "}
              {menu.has_dropdown && <i className="fal fa-angle-down"></i>}
            </a>
          </Link>
          {menu.has_dropdown && (
            <ul className="submenu text-start">
              {menu.sub_menus.map((sub_m, i) => (
                <li key={i}>
                  <Link href={sub_m.link}>
                    <a>{sub_m.title}</a>
                  </Link>
                  <ul>
                    {sub_m.sous_categories.map((sous_cat, j) => (
                      <li key={j}>
                        <Link href={sous_cat._id}>
                          <a style={{ color: "#a09f9f", fontSize: "medium" }}>
                            {sous_cat.nom}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenus;
