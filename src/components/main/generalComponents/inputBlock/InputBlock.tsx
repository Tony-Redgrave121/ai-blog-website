import React from 'react'
import style from './style.module.css'
import {FieldErrors} from "react-hook-form";

interface IButton {
    children: React.ReactNode,
    errors: FieldErrors,
    htmlFor: string,
    label: string,
    field: string,
}

const InputBlock: React.FC<IButton> = ({children, errors, htmlFor, label, field}) => {
    return (
        <div className={style.InputBlock}>
            <label htmlFor={htmlFor}>{label}</label>
            {children}
            <small>
                {errors[field] && errors[field]!.message?.toString() + '*'}
            </small>
        </div>
    )
}

export default InputBlock