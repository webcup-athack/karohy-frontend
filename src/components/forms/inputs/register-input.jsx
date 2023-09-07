import React from 'react';

const RegisterInput = (props) => {
    return (
        <div className="w-100 mt-40" ref={null}>
            {props.label && (
                <label className="fs-4 fw-lighter mb-2" {...props.labelProps}>
                    {props.label} {props.required && <span className="">*</span>}:
                </label>
            )}
            <input className="w-100 border-0 bg-secondary bg-opacity-25 text-white px-4" style={{height: 50}} value={props.value || "Default value"}/>
        </div>
    );
};

export default RegisterInput;