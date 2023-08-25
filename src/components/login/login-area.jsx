import React from 'react';
import LoginForm from '../forms/login-form';

const LoginArea = () => {
  return (
    <>
      <div className="tp-login-area">
        <div className="container-fluid p-0">
          <div className="row gx-0">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="tp-login-thumb login-space d-flex justify-content-center h-100">
                
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="tp-login-wrapper login-space d-flex justify-content-center">
                <div className="tplogin">
                  <div className="tplogin__title">
                    <h3 className="tp-login-title">Login your Account</h3>
                  </div>
                  <div className="tplogin__form">
                    <LoginForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginArea;