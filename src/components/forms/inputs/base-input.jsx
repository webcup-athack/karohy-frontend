import React from 'react';

const BaseInput = (props) => {
    return (
        <div className="" ref={null}>
            {props.label && (
                <label className="" {...props.labelProps}>
                    {props.label} {props.required && <span className="">*</span>}
                </label>
            )}
            <input className="" value={props.value || "Default value"}/>
            {props.label && (
                <label className="">
                    {props.label} {props.required && <span className="">*</span>}
                </label>
            )}
        </div>
    );
};

export default BaseInput;