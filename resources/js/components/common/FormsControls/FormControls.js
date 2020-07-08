import React, {useState, useEffect} from "react";
import {useDropzone} from 'react-dropzone';
import validate from "../../Admin/Products/Validator/Validate";
import ChangeImage from "../../Admin/Products/ProductEdit/ChangeImage";
import {Field, FieldArray} from "redux-form";
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


const renderField = ({ input, label, type, options, optionSelected, parent, meta: { touched, error } }) => {
    //console.log(options);
    return (
        <div className="form-group">
                {type === "select" && parent && <select {...input} className={"form-control"} ><option value={0}>Выберите опцию</option> {options ? options.map((item, key) => <option key={key} value={item.option_id}>{item.description.name}</option>): null}</select>
                || type === "select" && !parent && <select {...input} className={"form-control"} ><option value={0}>Выберите значение</option> {options && optionSelected ? options.map((item, key) => optionSelected === item.option_id ? item.value_description.map((item, key) => <option key={key} value={item.option_value_id}>{item.description.name}</option>): null): null}</select> ||
                <input className={'form-control'} {...input} type={type} placeholder={label} />}
                {touched && error && <span>{error}</span>}
        </div>
    )
}


export const inputMultiple = ({ title, fields, type, parent, optionSelected, options, meta: { error } }) => {
    return (
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
                    optionSelected={optionSelected}
                    options={options}
                    parent={parent ? parent : false}
                    name={element}
                    type={type}
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
}

export const optionMultiple = ({ fields, type, options, product, meta: { error, submitFailed } }) => {

    const [sel, setSel] = useState(product.option ? product.option.map((item, key) => { return {id: Number(key), value : Number(item.option)}} ) : []);

    const onChangeSelect = (e) => {
        let key = Number(e.target.parentNode.parentNode.getAttribute('data-key'));
        let value = Number(e.target.value);
        setSel(prevState => {
            let prev = prevState.map(item => item.id !== key ? item : null);
            var element = prev.filter(function(e) {
                return e !== null && e !== undefined;
            });
            return [...element, {id: key, value: value}];
        });
    }

    useEffect(() => {
        sel ? sel.map(item => item.value === 0 ? fields.remove(item.id): null): null;
    }, [sel]);

    return (
        <ul className={"arrayItems arrayItemsParent"}>
            <li className={'buttonAdd'}>
                <div className="form-group">
                    <button type="button" className="btn btn-primary" onClick={() => fields.push({})}>
                        Добавить опцию
                    </button>
                </div>
                {submitFailed && error && <span>{error}</span>}
            </li>
            {fields.map((element, index) => {
                let arr = sel ? sel.map((item, key) => item.id === index && item.value !== 0 ? <FieldArray key={key} options={options} optionSelected={item.value} parent={false} name={`${element}.optionval`} component={inputMultiple} type="select"/>: null) : null;
                return (
                    <ul key={index}>
                        <li data-key={index}>
                            <Field
                                parent={true}
                                onChange={onChangeSelect}
                                options={options}
                                name={`${element}.option`}
                                type={type}
                                component={renderField}
                                label="Опция"
                            />
                            <button
                                className={"btn btn-danger"}
                                type="button"
                                title="Удалить опцию"
                                onClick={() => fields.remove(index)}
                            >
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                        </li>
                        <li>{arr}</li>
                    </ul>
                )
            })}
        </ul>)
}

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
