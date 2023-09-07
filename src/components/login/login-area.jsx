import React from 'react';
import LoginForm from '../forms/login-form';
import Image from 'next/image';
import Link from 'next/link';

const LoginArea = () => {
  return (
    <>
      <div className="tp-login-area vh-100 bg-black">
        <div className="container-fluid p-0 h-100">
          <div className="row gx-0 h-100">
            <div className="col-xl-6 col-lg-6 col-12 h-100 bg-primary">
              <div className="d-flex justify-content-center h-100">
                <div className='w-100 h-100 bg-black d-flex align-items-center justify-content-center' style={{"background-image": "radial-gradient(80% 80% at bottom left, #ED254E,rgba(237, 37, 78, 0.00) 100%)"}}>
                  <div className='position-absolute' style={{top:40,left:40}}>
                      <Link href="/">
                          <Image src="/assets/img/logo/logo2.png" alt="karohy-logo" width='150px' height='40px' layout='fixed' className=''/>
                      </Link>
                  </div>
                  <div>
                      <div className="text-center" style={{fontFamily: '"Alieron", sans-serif', "transform": "scale(1, 2.1)", marginBottom: 60}}>
                          <p style={{fontWeight: 400,fontSize: 'clamp(0.8em, 0.7vw , 3em)', letterSpacing: 'clamp(0.7em, 1vw , 1.05em)', color: 'white', margin:0}}>
                              LES MEILLEURS SERVICES
                          </p>
                          <p className='text-center' style={{fontWeight: 500, fontSize: 'clamp(2em, 1.2vw , 6em)', letterSpacing: 'clamp(0.425em, 2vw , 1.05em)', color: 'white', margin:0, fontWeight: 'lighter'}}>
                              EN UN CLICK
                          </p>
                      </div>
                      <button className="btn btn-danger float-md-end " style={{width:140, height:50,fontSize:"1em"}}>
                          S&apos;INSCRIRE
                      </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="tp-login-wrapper login-space h-100 pt-30 pb-0">
                <div className="mb-50">
                  <div className="d-flex justify-content-center m-0 ">
                    <Link href="/">
                      <Image src="/assets/img/logo/logo4.png" alt="karohy-logo" width='100px' height='100px' layout='fixed'/>
                    </Link>
                  </div>
                </div>
                <div className='d-flex justify-content-center'>
                  <div className="tplogin">
                    <div className="tplogin__title">
                      <h3 className="tp-login-title text-center">Connectez-vous</h3>
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
      </div>
    </>
  );
};

export default LoginArea;