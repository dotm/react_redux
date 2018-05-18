import React from 'react';

export default function TextFormGroup (props){
    let {name, title, type, value, handleInputChange, } = props
    return (
        <div className="form-group">
            <label className="sr-only" htmlFor={name}>{title}</label>
            <input
            type={type || "text"}
            className={`${name} form-control`}
            name={name}
            placeholder={title}
            value={value}
            onChange={handleInputChange}
            />
        </div>
    )
}