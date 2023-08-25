import React from 'react';
import ErrorMsg from './error-msg';

const RegisterName = ({values,  errors, touched, handleChange, handleBlur, setFormPosition,formPosition}) => {
  return (
    <>
      <div className="tp-number">
        <label htmlFor="name">Nom :</label>
        <input value={values.nom} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Entrer votre nom" id="nom" />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>
	    <div className="tp-number">
        <label htmlFor="name">Prenom :</label>
        <input value={values.prenom} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Entrer votre prenom" id="prenom" />
        {touched.prenom && <ErrorMsg error={errors.prenom} />}
      </div>
      <div className="tp-mail">
        <label htmlFor="email">Email :</label>
        <input value={values.email} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Entrer votre Email" id="email" />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className="tp-login-button">
        <button className="tp-btn-black w-100" type="button" onClick={()=>setFormPosition(formPosition + 1)}>Continue</button>
      </div>
    </>
  );
};

export default RegisterName;