import Link from "next/link";
import React, { useEffect, useState } from "react";
import getMenuData from "../../../layout/headers/menu-data";
import Image from "next/image";
const sidebar_contents = {
  title: <>Trouvez le prestataire idéal !</>,
  inst_imgs: [
    "/assets/img/offcanvas/insta-1.jpg",
    "/assets/img/offcanvas/insta-2.jpg",
    "/assets/img/offcanvas/insta-4.jpg",
    "/assets/img/offcanvas/insta-4.jpg",
  ],
};
const { inst_imgs, title } = sidebar_contents;

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [menu_data, setMenu_data] = useState([]);
  const [navTitle, setNavTitle] = useState("");

  useEffect(() => {
    const fetchMenuData = async () => {
      const data = await getMenuData();
      setMenu_data(data);
    };

    fetchMenuData();
  }, []);

  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <>
      <div className="tp-offcanvas-area">
        <div className={`tpoffcanvas ${isOpen ? "opened" : ""}`}>
          <div className="tpoffcanvas__logo">
            <Link href="/">
              <Image
                src="/assets/img/logo/logo1.png"
                alt="logo karohy"
                width={200}
                height={70}
              />
            </Link>
          </div>
          <div
            className="tpoffcanvas__close-btn"
            onClick={() => setIsOpen(false)}
          >
            <button className="close-btn">
              <i className="fal fa-times-hexagon"></i>
            </button>
          </div>
          <div className="tpoffcanvas__content d-none d-sm-block">
            <p>{title}</p>
          </div>
          <div className="mobile-menu d-lg-none">
            <div className="mm-menu">
              <ul>
                {menu_data.map((menu, i) => (
                  <li
                    key={i}
                    className={
                      !menu.has_dropdown
                        ? ""
                        : navTitle === menu?.title
                        ? "has-droupdown active"
                        : "has-droupdown"
                    }
                  >
                    {menu.has_dropdown && (
                      <button onClick={() => openMobileMenu(menu.title)}>
                        {menu.title}{" "}
                      </button>
                    )}
                    <ul
                      className={
                        navTitle === menu?.title
                          ? "sub-menu active"
                          : "sub-menu"
                      }
                    >
                      {menu?.sub_menus?.map((sub, i) => (
                        <li key={i}>
                          <Link href={`${sub.link}`}>{sub.title}</Link>
                          <ul>
                            {sub.sous_categories.map((sous_cat, j) => (
                              <li key={j}>
                                <Link href={sous_cat._id}>
                                  <a style={{ color: "gray" }}>
                                    {sous_cat.nom}
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                    {!menu.has_dropdown && (
                      <Link href={menu.link}>{menu.title}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tpoffcanvas__contact">
            <span>Contactez-nous</span>
            <ul>
              <li>
                <i className="fas fa-star"></i>{" "}
                <a
                  href="https://www.google.com/maps/dir//Antanimena,+Tananarive/@-18.8991727,47.4816537,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x21f080a8d7ab0ddd:0x66befaa44188c582!2m2!1d47.5229391!2d-18.8991773?entry=ttu"
                  rel="noreferrer"
                  target="_blank"
                >
                  Antanimena
                </a>
              </li>
              <li>
                <i className="fas fa-star"></i>
                <a href="tel:261386626100">+261 38 66 261 00</a>
              </li>
              <li>
                <i className="fas fa-star"></i>
                <a href="mailto:services@karohy.mg">services@karohy.mg</a>
              </li>
            </ul>
          </div>
          {/* <div className="tpoffcanvas__input d-none d-sm-block">
            <p>Get UPdate</p>
            <form className="p-relative" action="#">
              <input type="text" placeholder="Enter mail" />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div> */}
          {/* <div className="tpoffcanvas__instagram d-none d-sm-block">
            <p>Check Instagram POst</p>
            <div className="tp-insta">
              <div className="row">
                {inst_imgs.map((img, i) => (
                  <div key={i} className="col-3 col-sm-3"><a href="#">
                    <img src={img} alt="" /></a>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* overlay start */}
      <div
        onClick={() => setIsOpen(false)}
        className={`body-overlay ${isOpen ? "apply" : ""}`}
      ></div>
      {/* overlay end */}
    </>
  );
};

export default Sidebar;
