import React from "react";
import { styled } from "styled-components";
import { services_data } from "../../data";
import SingleServiceTwo from "../common/single-service-2";

const getRandomIndexes = (n, size) => {
  const numbers = [];
  for (let i = 0; i < size; i++) {
    numbers.push(i);
  }
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return numbers.slice(0, n);
};

const ServiceDetailsArea = ({ service }) => {
  const randomIndexes = getRandomIndexes(2, services_data.length);
  const randomServices = [];
  for (let i = 0; i < randomIndexes.length; i++) {
    randomServices.push(services_data[randomIndexes[i]]);
  }
  return (
    <>
      <div className="service-details-area">
        <div className="tp-hero-wapper">
          <div className="tp-hero-content">
            <Container className="container">
              <div className="row">
                <div className="col">
                  <div>
                    <p className="tp-hero-text" style={{ fontSize: 25 }}>
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
                    <p className="tp-hero-text" style={{ fontSize: 20 }}>
                      +261 32 35 120 46
                    </p>
                    <p className="tp-hero-text" style={{ fontSize: 25 }}>
                      mail@karohy.mg
                    </p>
                  </div>
                  <div
                    className="mt-50 tp-hero-text"
                    style={{
                      display: "inline-block",
                    }}
                  >
                    <H3
                      className="service-details-space"
                      style={{ fontSize: 35 }}
                    >
                      Détails
                    </H3>
                    <div
                      className="tp-hero-text"
                      style={{
                        height: 5,
                        backgroundColor: "#ED254E",
                        width: "120%",
                      }}
                    />
                  </div>
                  <div className="mt-30 tp-hero-text">
                    <p style={{ fontSize: 20 }}>{service.text_1}</p>
                    <p style={{ fontSize: 20 }}>{service.text_2}</p>
                  </div>
                </div>
              </div>
              <div className="row text-center">
                <div className="col">
                  <div
                    className="tp-hero-text"
                    style={{
                      display: "inline-block",
                    }}
                  >
                    <H3
                      className="service-details-space"
                      style={{ fontSize: 35 }}
                    >
                      Gallerie
                    </H3>
                    <div
                      className="tp-hero-text mt-10"
                      style={{
                        height: 5,
                        backgroundColor: "#ED254E",
                        width: "80%",
                        marginLeft: "50%",
                        transform: "translate(-50%, 0%)",
                      }}
                    />
                  </div>
                  <div className="mt-80 d-flex align-items-center justify-content-center">
                    <div
                      style={{ position: "relative", width: 350, height: 350 }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          border: "1px solid #757575",
                          transform: "rotate(-85deg)",
                          zIndex: 1,
                          backgroundColor: "yellow",
                        }}
                      ></div>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          border: "1px solid #757575",
                          transform: "rotate(85deg)",
                          zIndex: 1,
                          backgroundColor: "cyan",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-100">
                <div className="col">
                  <div className=" text-center d-flex justify-content-center">
                    <div
                      className="tp-hero-text"
                      style={{
                        display: "inline-block",
                      }}
                    >
                      <H3
                        className="service-details-space"
                        style={{ fontSize: 35 }}
                      >
                        Services similaires
                      </H3>
                      <div
                        className="tp-hero-text mt-10"
                        style={{
                          height: 5,
                          backgroundColor: "#ED254E",
                          width: "70%",
                          marginLeft: "50%",
                          transform: "translate(-50%, 0%)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="row pb-50 mt-80">
                    <div className="col-md-1 col-lg-1"></div>
                    <div className="col-md-10 col-lg-10">
                      <div className="row d-flex justify-content-center align-items-center gap-3">
                        {randomServices.map((s, i) => (
                          <SingleServiceTwo
                            key={i}
                            service={s}
                            border={"sv-2-border"}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="col-md-1 col-lg-1"></div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};
const H3 = styled.h3`
  margin: 0 !important;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 50px 0;
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 20px;
    padding: 50px 24px;
  }
`;
export default ServiceDetailsArea;
