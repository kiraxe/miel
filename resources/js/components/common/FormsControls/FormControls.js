import React, {useState, useEffect} from "react";
import {useDropzone} from 'react-dropzone';
import validate from "../../Admin/Products/Validator/Validate";
import ChangeImage from "../../Admin/Products/ProductEdit/ChangeImage";
import {Field} from "redux-form";
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

Moment.locale('en');
momentLocalizer();

const FormControl = ({idName, input, label, type, errSer, categories, ourCategory, multiple, meta: {touched, error}, ...props}) => {
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


const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="form-group">
            <input className={'form-control'} {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
    </div>
)


export const inputMultiple = ({ title, fields, meta: { error } }) => (
    <ul className={"arrayItems"}>
        <li className={'buttonAdd'}>
            <div className="form-group">
                <button type="button" className="btn btn-primary" onClick={() => fields.push()}>
                    Добавить значение
                </button>
            </div>
        </li>
        {fields.map((element, index) => (
            <li key={index}>
                <Field
                    name={element}
                    type="text"
                    component={renderField}
                    label={`${title} ${index + 1}`}
                />
                <button
                    type="button"
                    className={"btn btn-danger"}
                    title="Удалить значение"
                    onClick={() => fields.remove(index)}
                >
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
            </li>
        ))}
        {error && <li className="error">{error}</li>}
    </ul>
)


export const Input = (props) => {
    return <FormControl {...props}><input id={props.idName} className={"form-control"} {...props.input} type={props.type} placeholder={props.label} /></FormControl>
}

export const Textarea = (props) => {
    return <FormControl {...props}><textarea id={props.idName} className={"form-control"} {...props.input} type={props.type} placeholder={props.label} /></FormControl>
}

export const Checkbox = (props) => {
    return <FormControl {...props}><input id={props.idName} className={"form-check-input"} {...props.input} type={props.type} placeholder={props.label} /></FormControl>
}

export const Select = (props) => {
    let options = props.select.map((item, key) => Number(props.ourCategory) !== item.category_id ? <option key={key} value={item.category_id}>{item.name}</option>: null);
    return <FormControl {...props}><select multiple={props.multiple} {...props.input} id={props.idName} className={"form-control"} >{!props.multiple && <option value={0}>Выберите</option>}{options}</select></FormControl>
}

export const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
    <DateTimePicker
        onChange={onChange}
        format="YYYY-MM-DD"
        time={showTime}
        value={!value ? null : new Date(value)}
    />

export const File = ({idName, input, label, type, errSer, change, meta: {touched, error}, ...props}) => {

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

    useEffect(() => {
        input.onChange(files[0]);
        return () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }}, [files]);

    const onDeleteImage = () => {
        setFiles([]);
        change(input.name, "");
    }

    const thumbs = files.map(file => (<div className={'thumb'} key={file.name}><i onClick={onDeleteImage} className="fa fa-times h" aria-hidden="true"></i><div className={'thumbInner'}><img src={file.preview}/></div></div>));

    const placeholder = thumbs.length === 0 ? [input.value].map( (item, key) => (<div key={key} className={'thumb'} >{item && <i onClick={onDeleteImage} className="fa fa-times" aria-hidden="true"></i>}<div className={'thumbInner'}>{item && <img src={item}/>}</div></div>)): null;

    return (
        <section id={'files'} >
            <div {...getRootProps({className: 'dropzone'})}>
                <input id={idName} name={input.name} {...getInputProps()} />
                <p>{label}</p>
            </div>
            <aside className={'thumbsContainer'}>
                { placeholder || thumbs.length !== 0 && thumbs }
            </aside>
        </section>
    );
}
