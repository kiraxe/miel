import React, {useState, useEffect} from "react";
import {rus as LanguageRus} from "../../Language";
import {Field, reduxForm} from "redux-form";
import loading from '../../../../assets/images/loading.svg';
import validate from "../Validator/Validate";
import {Input, Textarea, File, Checkbox, Select} from '../../../common/FormsControls/FormControls';

const CategoryEdit = (props) => {

    const categoryAttr = ({attributes, ...rest}) => rest;

    const categoryProps = props.category[0] ? {...categoryAttr(props.category[0]), ...props.category[0].attributes} : null;

    return (
        <>
            <div className="title"><h1>{LanguageRus.page.categories.edit.title}</h1></div>
            <div className="content">
                <CategoryEditReduxForm id={props.id} select={props.select} errSer={props.error} initialValues={categoryProps} onSubmit={props.editCategory}/>
            </div>
        </>
    )
};

const CategoryEditForm = (props) => {

    const [isFetching, setFetching] = useState(false);

    const { handleSubmit, pristine, reset, submitting, errSer, submitSucceeded, submitFailed, change, select, id} = props;

    submitSucceeded || submitFailed || errSer ? setTimeout(() => {setFetching(false)}, 2000) : null;

    return (
        <form id="categoryForm" onSubmit={handleSubmit} className="form" >
            <div className="form-group">
                <label>{LanguageRus.page.categories.table.name}</label>
                <Field type="text" idName="categoryName" name={"name"} component={Input} label={LanguageRus.page.categories.table.name} />
            </div>
            <div className="form-group">
                <Field type="file" idName="categoryFiles" name={"image"} change={change} component={File} label={LanguageRus.page.categories.table.image} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.categories.table.parent}</label>
                <Field idName="categoryParent" name={"parent_id"} ourCategory={id} select={select} component={Select}/>
            </div>
            <button onClick={() => setFetching(true)} type="submit" className="btn btn-primary" disabled={submitting} >{LanguageRus.page.categories.edit.button} {isFetching ? <img src={loading} alt={"loading"}/> : null}</button>
            {errSer === null && submitSucceeded && isFetching &&
            <p className={'success'}>{LanguageRus.page.categories.edit.success}</p>}
        </form>

    )
}

const CategoryEditReduxForm = reduxForm({form:"CategoryEdit", validate, asyncBlurFields: ['name']})(CategoryEditForm);

export default CategoryEdit;
