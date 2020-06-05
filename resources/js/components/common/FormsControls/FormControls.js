import React, {useState, useEffect} from "react";
import {useDropzone} from 'react-dropzone';


const FormControl = ({idName, input, label, type, errSer, meta: {touched, error}, ...props}) => {
    return(
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

export const File = ({idName, input, label, type, errSer, meta: {touched, error}, ...props}) => {

    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        multiple:false,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (<div className={'thumb'} key={file.name}><div className={'thumbInner'}><img src={file.preview}/></div></div>));

    const placeholder = thumbs.length === 0 ? [input.value].map( (item, key) => (<div key={key} className={'thumb'} ><div className={'thumbInner'}><img src={item}/></div></div>)): null;

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <section id={'files'} >
            <div {...getRootProps({className: 'dropzone'})}>
                <input id={idName} onChange={input.onChange(files[0])} name={input.name} {...getInputProps()} />
                <p>{label}</p>
            </div>
            <aside className={'thumbsContainer'}>
                { placeholder && placeholder || thumbs.length !== 0 && thumbs }
            </aside>
        </section>
    );
}
