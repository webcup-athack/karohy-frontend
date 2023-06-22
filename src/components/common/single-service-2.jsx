import Link from "next/link";
import React from "react";

const SingleServiceTwo = ({ service, border }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12" style={{}}>
      <div
        className="tp-sv-box wow tpfadeUp"
        data-wow-duration={service.duration}
        data-wow-delay={service.delay}
      >
        <div
          className={`tp-service-item ${border ? border : ""} mb-30 shadow-lg`}
          style={{
            borderTopWidth: 10,
            borderBottomWidth: 10,
            borderTopColor: "#ED254E",
            borderBottomColor: "#ED254E",
            paddingTop: 20,
            paddingBottom: 30,
            height: 700,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <div className="accordion accordion-items" id="details">
            <div className="d-flex">
              <div
                className="tp-sv-content"
                style={{
                  flex: 1,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <div
                  className="tp-sv-img text-center"
                  style={{ position: "relative", width: "100%" }}
                >
                  <img
                    src={service.img}
                    alt=""
                    style={{ maxWidth: "100%", height: 200 }}
                  />
                </div>
                <p className="pt-35" style={{ fontSize: 16 }}>
                  <i
                    className="fas fa-star"
                    style={{
                      color: service.reputation >= 1 ? "#ffe936" : "",
                      margin: 2,
                    }}
                  ></i>
                  <i
                    className="fas fa-star"
                    style={{
                      color: service.reputation >= 2 ? "#ffe936" : "",
                      margin: 2,
                    }}
                  ></i>
                  <i
                    className="fas fa-star"
                    style={{
                      color: service.reputation >= 3 ? "#ffe936" : "",
                      margin: 2,
                    }}
                  ></i>
                  <i
                    className="fas fa-star"
                    style={{
                      color: service.reputation >= 4 ? "#ffe936" : "",
                      margin: 2,
                    }}
                  ></i>
                  <i
                    className="fas fa-star"
                    style={{
                      color: service.reputation >= 5 ? "#ffe936" : "",
                      margin: 2,
                    }}
                  ></i>
                  &nbsp;<span>({service.stars})</span>
                </p>
                <h3 className=" tp-sv-title pt-20">
                  <Link href={`/service-details/${service.id}`}>
                    <a>{service.title}</a>
                  </Link>
                  {/* <p>
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
                  </p> */}
                </h3>
                <hr
                  style={{
                    color: "red",
                    width: 100,
                    borderWidth: 2,
                    marginTop: -20,
                  }}
                />
                <div id={`before-${service.id}`} style={{}}>
                  <br />
                  <p>
                    {service.text_1.length + service.text_2.length <= 100
                      ? service.text_1
                      : service.text_1.substring(0, 100) + " ..."}
                  </p>
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
                <div
                  id={`heading-${service.id}`}
                  onClick={() => {
                    document.getElementById(
                      `before-${service.id}`
                    ).style.display =
                      document.getElementById(`before-${service.id}`).style
                        .display != "none"
                        ? "none"
                        : "block";

                    document.getElementById(
                      `voir-plus-moins-${service.id}`
                    ).innerHTML =
                      document.getElementById(`voir-plus-moins-${service.id}`)
                        .innerHTML != "(voir plus)"
                        ? "(voir plus)"
                        : "(voir moins)";
                  }}
                  style={{
                    marginTop: -15,
                    display:
                      service.text_1.length + service.text_2.length <= 100
                        ? "none"
                        : "block",
                  }}
                >
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target={`#details-${service.id}`}
                    aria-controls={`details-${service.id}`}
                  >
                    <div className="tp-sv-link">
                      <Link href={""}>
                        <a
                          id={`voir-plus-moins-${service.id}`}
                          style={{ fontWeight: "normal", color: "#a2a2a2" }}
                        >
                          (voir plus)
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-center pt-20">
                  <Link
                    className="pt-35"
                    href={`/service-details/${service.id}`}
                  >
                    <button
                      type="submit"
                      className="tp-btn-yellow"
                      style={{
                        backgroundColor: "#ED254E",
                        color: "#F4FFFD",
                        fontSize: 20,
                      }}
                    >
                      Détails
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceTwo;
