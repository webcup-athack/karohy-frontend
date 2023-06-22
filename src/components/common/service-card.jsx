import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const ServiceCard = ({ service, border }) => {
  return (
    <div className="col-lg-8 col-md-12 col-12">
      {/* <div
				className="tp-sv-box wow tpfadeUp"
				data-wow-duration={'2s'}
				data-wow-delay={'2s'}
			>
				<div className={`tp-service-item ${border ? border : ''} d-flex mb-30`}>
					<div className="tp-sv-img">
						<img src={service.img} alt="" />
					</div>
					<div className="tp-sv-content pl-60">
						<h3 className=" tp-sv-title mb-35">
							<Link href={`/service-details/${service.id}`}>
								<a>{service.title}</a>
							</Link>
							<StarWrapper>
								{[...new Array(5)].map((e, i) => (
									<i
										key={i}
										className="fas fa-star"
										style={{
											color: service.reputation >= i + 1 ? '#ffe936' : '',
										}}
									></i>
								))}{' '}
								<span>({service.stars})</span>
							</StarWrapper>
							<CategorieWrapper>
								<Categorie className="mb-10"> {service.categorie}</Categorie>
								<SousCategorie className="mb-10">
									{service.sous_categorie}
								</SousCategorie>
							</CategorieWrapper>
						</h3>
						<div className="tp-sv-link mt-35">
							<Link href={`/service-details/${service.id}`}>
								<a>
									<i className="far fa-arrow-right"></i> Détails
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div> */}
      <div
        className="tp-sv-box wow tpfadeUp"
        data-wow-duration={service.duration}
        data-wow-delay={service.delay}
      >
        <div
          className={`tp-service-item ${border ? border : ""} mb-30 shadow-lg`}
          style={{
            borderTopWidth: 5,
            borderBottomWidth: 5,
            borderTopColor: "#ED254E",
            borderBottomColor: "#ED254E",
            // boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div className="accordion accordion-items" id="details">
            <div className="d-flex">
              <div className="tp-sv-content" style={{ flex: 1 }}>
                <div className="tp-sv-img text-center">
                  <img src={service.img} alt="" width={200} />
                </div>
                <p className="pt-35" style={{ fontSize: 25 }}>
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
                <div id={`before-${service.id}`}>
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
const StarWrapper = styled.p`
  padding: 0 !important;
`;
const CategorieWrapper = styled.p`
  padding: 0 !important;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;
const Categorie = styled.span`
  background-color: #ecedef;
  padding: 5;
  border-radius: 5;
  color: #878787;
  font-size: 15;
`;
const SousCategorie = styled.span`
  background-color: #ecedef;
  padding: 5;
  border-radius: 5;
  color: #878787;
  font-size: 15;
`;

export default ServiceCard;
