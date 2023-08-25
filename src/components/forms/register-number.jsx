import React from 'react';
import ErrorMsg from './error-msg';

const RegisterNumber = ({values,  errors, touched, handleChange, handleBlur, setFormPosition, formPosition}) => {
  return (
    <>
      <div className="tp-number">
        <label htmlFor="name">Numero de telephone :</label>
        <input value={values.numeroTelephone} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Enter your name" id="numeroTelephone" />
        {touched.numeroTelephone && <ErrorMsg error={errors.numeroTelephone} />}
      </div>
      <div className="tp-mail">
        <label htmlFor="email">Numero mobile money :</label>
        <input value={values.numeroMobileMoney} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Enter your Email" id="numeroMobileMoney" />
        {touched.numeroMobileMoney && <ErrorMsg error={errors.numeroMobileMoney} />}
      </div>
	    <div className="tp-mail">
        <label htmlFor="email">Adresse :</label>
        <input value={values.adresse} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Enter your Email" id="adresse" />
        {touched.adresse && <ErrorMsg error={errors.adresse} />}
      </div>
      <div className="tp-login-button">
        <button className="tp-btn-black w-100" type="button" onClick={()=>setFormPosition(formPosition + 1)}>Continue</button>
      </div>
    </>
  );
};

export default RegisterNumber;