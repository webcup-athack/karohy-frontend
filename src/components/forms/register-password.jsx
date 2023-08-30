import React from 'react';
import ErrorMsg from './error-msg';

const RegisterPassword = ({values,  errors, touched, handleChange, handleBlur, handleSubmit}) => {
  return (
    <>
      <div className="tp-number">
        <label htmlFor="motDePasse">Mot de passe :</label>
        <input value={values.motDePasse} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="" id="motDePasse" />
        {touched.motDePasse && <ErrorMsg error={errors.motDePasse} />}
      </div>
      <div className="tp-mail">
        <label htmlFor="confirmerMotDePasse">Confirmer votre mot de passe :</label>
        <input value={values.confirmerMotDePasse} onChange={handleChange}
          onBlur={handleBlur} type="password" placeholder="" id="confirmerMotDePasse" />
        {touched.confirmerMotDePasse && <ErrorMsg error={errors.confirmerMotDePasse} />}
      </div>
      <div className="tp-login-button">
        <button className="tp-btn-black w-100" type="button" onClick={handleSubmit}>S&apos;inscrire</button>
      </div>
    </>
  );
};

export default RegisterPassword;