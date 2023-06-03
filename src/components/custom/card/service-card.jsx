import React from "react";
import { services_data } from "../../../data";
import SingleServiceTwo from "../../common/single-service-2";

const services_items = services_data.filter((s) => s.service_p_2);
// sv-2-border
const ServiceCard = ({title}) => {
  return (
    <>
      <div className="tp-service-area p-relative pb-130 pt-100">
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-md-2 col-lg-2"></div>
              <h1 className="col-md-8 col-lg-8">{title}</h1>
              <div className="col-md-2 col-lg-2"></div>
            </div>
            {services_items.map((s, i) => (
              <SingleServiceTwo key={i} service={s} border={"sv-2-border"} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
