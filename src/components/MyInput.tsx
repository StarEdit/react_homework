import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;
}

const MyInput = ({name, label, ...rest} : InputProps) => {
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} {...rest} />
        </div>
    );
}

export default MyInput;