import React, { useEffect } from "react";
import { Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import AccordionArea from "./accordion-area";
import ServiceDetailsArea from "./service-details-area";
import Breadcrumb2 from "../common/breadcrumb/breadcrumb2";

const ServiceDetails = ({ service }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb2 service={service} />
      <ServiceDetailsArea service={service} />
      {/* <AccordionArea /> */}
    </Wrapper>
  );
};

export default ServiceDetails;
