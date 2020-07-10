import React, {useState} from "react";
import {rus as LanguageRus} from "../../Language";
import {Field, reduxForm} from "redux-form";
import loading from '../../../../assets/images/loading.svg';
import validate from "../Validator/Validate";
import {File, Input, Textarea, Checkbox, Select} from '../../../common/FormsControls/FormControls';


const CategoryNew = (props) => {

    return (
        <>
            <div className="title"><h1>{LanguageRus.page.categories.new.title}</h1></div>
            <div className="content">
                <CategoryNewReduxForm id={props.id} errSer={props.error} select={props.select} onSubmit={props.addCategory}/>
            </div>
        </>
    )
}

const CategoryNewForm = (props) => {

    const [isFetching, setFetching] = useState(false);

    const { handleSubmit, pristine, reset, submitting, errSer, submitSucceeded, submitFailed, select, id, change} = props;

    submitSucceeded || submitFailed || errSer ? setTimeout(() => {setFetching(false)}, 2000) : null;

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label>{LanguageRus.page.categories.table.name}</label>
                <Field type="text" idName="categoryName" name={"name"} component={Input} label={LanguageRus.page.categories.table.name} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.categories.table.description}</label>
                <Field type="text" idName="categoryDescription" name={"description"} component={Input} label={LanguageRus.page.categories.table.description} />
            </div>
            <div className="form-group">
                <Field type="file" idName="categoryFiles" name={"image"} change={change} component={File} label={LanguageRus.page.categories.table.image} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.categories.table.parent}</label>
                <Field idName="categoryParent" multiple={false} name={"parent_id"} ourCategory={id} select={select} component={Select}/>
            </div>
            <button onClick={() => setFetching(true)} type="submit" className="btn btn-primary" disabled={submitting} >{LanguageRus.page.categories.edit.button} {isFetching ? <img src={loading}/> : null}</button>
            {errSer === null && submitSucceeded && isFetching &&
            <p className={'success'}>{LanguageRus.page.categories.edit.success}</p>}
        </form>
    )
}

const CategoryNewReduxForm = reduxForm({form:"CategoryNew", validate, asyncBlurFields: ['name']})(CategoryNewForm);

export default CategoryNew;
