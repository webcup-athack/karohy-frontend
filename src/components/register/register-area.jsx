import React, { useState } from 'react';

import { useFormik } from 'formik';
import { registerSchema } from '../../utils/validation-schema';

import RegisterName from '../forms/register-name';
import RegisterNumber from '../forms/register-number';
import RegisterPassword from '../forms/register-password';

const RegisterArea = () => {

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      nom:'',
      prenom:'',
      email:'',
      numeroTelephone:'',
      numeroMobileMoney:'',
      adresse:'',
      motDePasse:'',
      confirmerMotDePasse:''
    },
    validationSchema: registerSchema,
    onSubmit: () => {}
  })
  const [formPosition, setFormPosition]= useState(0);
  const changeForm = ( formPosition) =>{
    switch (formPosition){
      case 0:
        return <RegisterName values={values} errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} setFormPosition={setFormPosition} formPosition={formPosition}  />
      case 1:
        return <RegisterNumber values={values} errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} setFormPosition={setFormPosition} formPosition={formPosition} />
      case 2:
        return <RegisterPassword values={values} errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} handleSubmit={handleSubmit}  onSubmit={handleSubmit}   />
      default:
        return <RegisterName values={values} errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} setFormPosition={setFormPosition} />
    }
  }
  return (
    <>
      <div className="tp-login-area">
        <div className="container-fluid p-0">
          <div className="row gx-0 align-items-center">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="tp-login-wrapper d-flex justify-content-center">
                <div className="tplogin">
                  <div className="tplogin__title">
                    <h3 className="tp-login-title">Registration your Account</h3>
                  </div>
                  <div className="tplogin__form">
                    {changeForm(formPosition)}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="tp-login-thumb login-space d-flex justify-content-center h-100">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterArea;