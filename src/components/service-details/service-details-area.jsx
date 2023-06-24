import React from "react";
import { styled } from "styled-components";

const ServiceDetailsArea = ({ service }) => {
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
                    <H3 className="tp-title-sm service-details-space">
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
