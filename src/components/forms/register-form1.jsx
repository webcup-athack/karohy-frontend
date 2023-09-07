import React from 'react';
import Image from "next/image";

import RegisterInput from './inputs/register-input';

const RegisterForm1 = () => {
    return (
        <div className='w-100 h-100 text-white py-5 px-5' style={{background: "conic-gradient(from 270deg at 75% 50%, #000000, #ED254E, #000000)"}}>
            <div className="position-absolute h-100 top-0 d-flex align-items-center overflow-hidden" style={{left:"60%"}}>
                <Image src='/assets/img/logo/logo2.png' alt='logo-karohy' width={500} height={200} style={{zIndex: 1}}/>    
            </div>
            <h1 className='m-0'>INSCRIPTION</h1>
            <div className="position-relative col-xs-12 col-sm-12 col-lg-4 text-white pt-100"  style={{zIndex: 10}}>
                <form className="">
                    {/* <RegisterInput label="Nom"/>
                    <RegisterInput label="Prénom"/>
                    <RegisterInput label="Email"/>
                    <div className="mt-30">
                        <button className="btn btn-danger float-md-end " style={{width:140, height:50,fontSize:"1em"}}>
                        Suivant
                    </button>
                    </div> */}
                    {/* <RegisterInput label="Numéro de téléphone"/>
                    <RegisterInput label="Numéro de mobile money"/>
                    <RegisterInput label="Adresse"/>
                    <div className="mt-30">
                        <button className="btn btn-danger float-md-end " style={{width:140, height:50,fontSize:"1em"}}>
                        S&apos;INSCRIRE
                    </button>
                    </div> */}
                    <RegisterInput label="Créer votre mot de passe"/>
                    <RegisterInput label="Confirmez votre mot de passe"/>
                    <div className="mt-30">
                        <button className="btn btn-danger float-lg-end " style={{width:140, height:50,fontSize:"1em"}}>
                        S&apos;INSCRIRE
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm1;