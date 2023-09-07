import React from 'react';
import { useFormik } from 'formik';
import { loginSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import Link from 'next/link';

const LoginForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: () => {}
  })

  // handleResetPass
  const handleResetPass = (email) => {
    //resetPassword(email);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="tp-mail">
        <label htmlFor="email">Veillez entrez votre Email</label>
        <input value={values.email} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Email" id="email" />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className="tp-password">
        <label htmlFor="Password">Veillez entrez votre mot de passe</label>
        <input value={values.password} onChange={handleChange}
          onBlur={handleBlur} type="password" placeholder="Mot de passe" id="password" />
        {touched.password && <ErrorMsg error={errors.password} />}
      </div>
      <div className="tp-forgot-password d-flex justify-content-between">
        <div className="checkbox">
          <input type="checkbox" id="Remember" name="fav_language" value="Remember" />
          {' '}
          <label htmlFor="Remember">Remember me</label>
        </div>
        <div className="forgot">
          <a href="#" onClick={()=> {}}>Mot de passe oublié?</a>
        </div>
      </div>
      <div className="tp-login-button">
        <button className="tp-btn-black w-100" type="submit">S&apos;inscrire</button>
      </div>
      <div className="tp-signup d-flex justify-content-between">
        <div className="account">
          <a href="#">Pas encore de compte?</a>
        </div>
        <div className="signin">
          <Link href="/register">
            <a >Inscrivez-vous maintenant</a>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;