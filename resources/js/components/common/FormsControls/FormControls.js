import React from "react";


const FormControl = ({idName, input, label, type, errSer, meta: {touched, error}, ...props}) => {
    return (
        <>
            {props.children}
            {touched &&
            error &&
            <span className={"error"}>
               {error}
            </span>
            || touched &&
            errSer &&
            <span className={"error"}>
               {errSer}
            </span>
            }
        </>
    )
}



export const Input = (props) => {
    return <FormControl {...props}><input id={props.idName} className={"form-control"} {...props.input} type={props.type} placeholder={props.label} /></FormControl>
}

export const Textarea = (props) => {
    return <FormControl {...props}><textarea id={props.idName} className={"form-control"} {...props.input} type={props.type} placeholder={props.label} /></FormControl>
}
