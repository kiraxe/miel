import React from "react";
import {rus as LanguageRus} from "../../Language";
import {Field, reduxForm} from "redux-form";
import loading from '../../../../../../public/images/loading.svg';


const ProductEdit = (props) => {

    return (
        <>
            <div className="title"><h1>{LanguageRus.page.products.edit.title}</h1></div>
            <div className="content">
                <ProductEditReduxForm isFetching={props.isFetching} initialValues={props.product[0]} onSubmit={props.editProduct}/>
            </div>
        </>
    )
};

const ProductEditForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className="form">
            <div className="form-group">
                <label>{LanguageRus.page.products.table.name}</label>
                <Field id="productName" className={"form-control"} placeholder={LanguageRus.page.products.table.name} name={"name"} component={"input"} label={LanguageRus.page.products.table.name} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.products.table.description}</label>
                <Field id="productDetail" className={"form-control"} placeholder={LanguageRus.page.products.table.description} name={"detail"} component={"textarea"} label={LanguageRus.page.products.table.description} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.products.table.price}</label>
                <Field id="productPrice" className={"form-control"} placeholder={LanguageRus.page.products.table.price} name={"price"} component={"input"} label={LanguageRus.page.products.table.price} />
            </div>
            <button type="submit" className="btn btn-primary">{LanguageRus.page.products.edit.button} {props.isFetching ? <img src={loading}/> : null}</button>
        </form>
    )
}

const ProductEditReduxForm = reduxForm({form:"ProductEdit"})(ProductEditForm);

export default ProductEdit;
