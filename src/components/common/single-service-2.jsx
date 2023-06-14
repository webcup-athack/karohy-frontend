import Link from "next/link";
import React from "react";

const accordion_items = [
  {
    id: "eight",
    title: "What makes LessAccounting better than the rest?",
    desc: "A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results.",
  },
];

const SingleServiceTwo = ({ service, border }) => {
  return (
    <div className="col-lg-6 col-md-12 col-12">
      <div
        className="tp-sv-box wow tpfadeUp"
        data-wow-duration={service.duration}
        data-wow-delay={service.delay}
      >
        <div className={`tp-service-item ${border ? border : ""} mb-30`}>
          <div className="accordion accordion-items" id="details">
            <div className="d-flex">
              <div className="tp-sv-img">
                <img src={service.img} alt="" />
              </div>
              <div className="tp-sv-content pl-60">
                <h3 className=" tp-sv-title mb-35">
                  <Link href={`/service-details/${service.id}`}>
                    <a>{service.title}</a>
                  </Link>
                  <p>
                    <i
                      className="fas fa-star"
                      style={{
                        color: service.reputation >= 1 ? "#ffe936" : "",
                      }}
                    ></i>
                    <i
                      className="fas fa-star"
                      style={{
                        color: service.reputation >= 2 ? "#ffe936" : "",
                      }}
                    ></i>
                    <i
                      className="fas fa-star"
                      style={{
                        color: service.reputation >= 3 ? "#ffe936" : "",
                      }}
                    ></i>
                    <i
                      className="fas fa-star"
                      style={{
                        color: service.reputation >= 4 ? "#ffe936" : "",
                      }}
                    ></i>
                    <i
                      className="fas fa-star"
                      style={{
                        color: service.reputation >= 5 ? "#ffe936" : "",
                      }}
                    ></i>
                    &nbsp;<span>({service.stars})</span>
                  </p>
                  <p>
                    <b
                      className="mb-10"
                      style={{
                        backgroundColor: "#ecedef",
                        padding: 5,
                        borderRadius: 5,
                        color: "#878787",
                        fontSize: 15,
                      }}
                    >
                      {service.categorie}
                    </b>
                    &nbsp;&nbsp;
                    <b
                      className="mb-10"
                      style={{
                        backgroundColor: "#ecedef",
                        padding: 5,
                        borderRadius: 5,
                        color: "#878787",
                        fontSize: 15,
                      }}
                    >
                      {service.sous_categorie}
                    </b>
                  </p>
                </h3>
                <div id={`heading-${service.id}`}>
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target={`#details-${service.id}`}
                    aria-controls={`details-${service.id}`}
                  >
                    <div className="tp-sv-link mt-35">
                      <Link href={""}>
                        <a>
                          <i className="far fa-arrow-right"></i> Détails
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id={`details-${service.id}`}
              className={"accordion-collapse collapse"}
              aria-labelledby={`heading-${service.id}`}
              data-bs-parent="#details"
            >
              <br />
              <p>{service.text_1}</p>
              <p>{service.text_2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceTwo;
