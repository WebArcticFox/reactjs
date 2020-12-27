import React from "react";
import s from "./formsControls.module.css";

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl+" "+(hasError ? s.error : "")}>
            <div>
                <props.childTag {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const TextArea = (props) => {
    return <FormControl {...props} childTag={"textarea"}></FormControl>
}

export const Input = (props) => {
    return <FormControl {...props} childTag={"input"}></FormControl>
}