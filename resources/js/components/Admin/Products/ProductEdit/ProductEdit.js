import React, {useState, useEffect} from "react";
import {rus as LanguageRus} from "../../Language";
import {Field, reduxForm} from "redux-form";
import loading from '../../../../assets/images/loading.svg';
import validate from "../Validator/Validate";
import {Input, Textarea, File, Checkbox} from '../../../common/FormsControls/FormControls';

const ProductEdit = (props) => {
    return (
        <>
            <div className="title"><h1>{LanguageRus.page.products.edit.title}</h1></div>
            <div className="content">
                <ProductEditReduxForm errSer={props.error} initialValues={props.product[0]} onSubmit={props.editProduct}/>
            </div>
        </>
    )
};

const ProductEditForm = (props) => {

    const [isFetching, setFetching] = useState(false);

    const { handleSubmit, pristine, reset, submitting, errSer, submitSucceeded, submitFailed, change} = props;

    submitSucceeded || submitFailed || errSer ? setTimeout(() => {setFetching(false)}, 2000) : null;

    return (
        <form id="productForm" onSubmit={handleSubmit} className="form" >
            <div className="form-group">
                <label>{LanguageRus.page.products.table.name}</label>
                <Field type="text" idName="productName" name={"name"} component={Input} label={LanguageRus.page.products.table.name} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.products.table.article}</label>
                <Field type="text" idName="productArticle" name={"article"} component={Input} label={LanguageRus.page.products.table.article} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.products.table.description}</label>
                <Field type="textarea" idName="productDetail" name={"detail"} component={Textarea} label={LanguageRus.page.products.table.description} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.products.table.property}</label>
                <Field type="textarea" idName="productProperty" name={"property"} component={Textarea} label={LanguageRus.page.products.table.property} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.products.table.price}</label>
                <Field type="text" idName="productPrice" name={"price"} component={Input} label={LanguageRus.page.products.table.price} />
            </div>
            <div className="form-check">
                <label className="form-check-label" htmlFor="productNovelty">{LanguageRus.page.products.table.novelty}</label>
                <Field type="checkbox" idName="productNovelty" name={"novelty"} component={Checkbox} label={LanguageRus.page.products.table.novelty} />
            </div>
            <div className="form-group">
                <Field type="file" idName="productFiles" name={"image"} change={change} component={File} label={LanguageRus.page.products.table.image} />
            </div>
            <button onClick={() => setFetching(true)} type="submit" className="btn btn-primary" disabled={submitting} >{LanguageRus.page.products.edit.button} {isFetching ? <img src={loading}/> : null}</button>
            {errSer === null && submitSucceeded && isFetching &&
            <p className={'success'}>{LanguageRus.page.products.edit.success}</p>}
        </form>

    )
}

const ProductEditReduxForm = reduxForm({form:"ProductEdit", validate, asyncBlurFields: ['name', 'detail', 'price']})(ProductEditForm);

export default ProductEdit;
