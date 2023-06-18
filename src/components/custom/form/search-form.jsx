import { useFormik } from "formik";
import React, { useState, useRef } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
import { toast } from "react-toastify";
import { contactSchema } from "../../../utils/validation-schema";
import ServiceCard from "../../common/service-card";

import { services_data } from "../../../data";
import ErrorMsg from "./error-msg";

function getRandomIndexes(n, size) {
  const numbers = [];
  for (let i = 0; i < size; i++) {
    numbers.push(i);
  }
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return numbers.slice(0, n);
}
const SearchForm = ({ stateSearch, setStateSearch }) => {
  // user
  // const { user } = useSelector(state => state.auth);
  // console.log(user)
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef(null);
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { name: "", email: "", msg: "" },
      validationSchema: contactSchema,
      onSubmit: (values, { resetForm }) => {
        console.log("on submit");
        toast.success(`${values.name} your message sent successfully`, {
          position: "top-left",
        });
        resetForm();
      },
    });

  const getSearchResult = (number) => {
    buttonRef.current.scrollIntoView({ behavior: "smooth" });
    setLoading(true);
    const randomIndexes = getRandomIndexes(number, services_data.length);
    const randomServices = [];
    for (let i = 0; i < randomIndexes.length; i++) {
      randomServices.push(services_data[randomIndexes[i]]);
    }
    setSearchResult(randomServices);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const handleSearchSubmit = (e) => {
    handleSubmit(e);
    // if (!errors?.msg && values?.msg) {
    // 	getSearchResult(3);
    // }
    getSearchResult(3);
    setStateSearch(true);
  };

  return (
    <>
      <form id="contact-form" onSubmit={handleSearchSubmit}>
        <div className="mb-20">
          <textarea
            value={values.msg}
            className="shadow-lg"
            onChange={handleChange}
            onBlur={handleBlur}
            name="msg"
            placeholder="Que recherchez-vous ?"
          ></textarea>
          {/* {touched.msg && <ErrorMsg error={errors.msg} />} */}
        </div>
        <button type="submit" className="tp-btn-yellow" ref={buttonRef}>
          Rechercher
        </button>
      </form>

      {searchResult.length > 0 && (
        <ResultWrapper>
          {loading ? (
            <LoaderWrapper>
              <ReactLoading type="spinningBubbles" color="#0bbfdc" />
            </LoaderWrapper>
          ) : (
            <>
              <StyledH1>Services correspondant à vos demandes</StyledH1>
              <ResultFlex>
                {searchResult.map((elem, i) => (
                  <ServiceCard key={i} service={elem} border={"sv-2-border"} />
                ))}
              </ResultFlex>
            </>
          )}
        </ResultWrapper>
      )}
    </>
  );
};

const ResultWrapper = styled.div`
  margin-top: 50px;
`;
const ResultFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 0;
`;
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledH1 = styled.h1`
  margin: 20px 0;
`;
export default SearchForm;
