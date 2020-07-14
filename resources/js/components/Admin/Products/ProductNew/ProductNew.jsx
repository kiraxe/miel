import React, {useState} from "react";
import {rus as LanguageRus} from "../../Language";
import {Field, FieldArray, reduxForm} from "redux-form";
import loading from '../../../../assets/images/loading.svg';
import validate from "../Validator/Validate";
import {File, Input, Textarea, Checkbox, Select, optionMultiple} from '../../../common/FormsControls/FormControls';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const ProductNew = (props) => {

    return (
        <>
            <div className="title"><h1>{LanguageRus.page.products.new.title}</h1></div>
            <div className="content">
                <ProductNewReduxForm errSer={props.error} onSubmit={props.addProduct} select={props.select}/>
            </div>
        </>
    )
}

const ProductNewForm = (props) => {

    const [isFetching, setFetching] = useState(false);

    const [key, setKey] = useState('general');

    const { handleSubmit, pristine, reset, submitting, errSer, submitSucceeded, submitFailed, change, select, options} = props;

    submitSucceeded || submitFailed || errSer ? setTimeout(() => {setFetching(false)}, 2000) : null;

    return (
        <form onSubmit={handleSubmit} className="form">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="general" title="Основные">
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
                        <Field type="text" idName="productPrice" name={'price'} component={Input} label={LanguageRus.page.products.table.price} />
                    </div>
                    <div className="form-group">
                        <label>{LanguageRus.page.products.table.percent}</label>
                        <Field type="text" idName="productPercent" name={'percent'} component={Input} label={LanguageRus.page.products.table.percent} />
                    </div>
                    <div className="form-group">
                        <label>{LanguageRus.page.products.table.minfree}</label>
                        <Field type="text" idName="productMinfree" name={'minfree'} component={Input} label={LanguageRus.page.products.table.minfree} />
                    </div>
                    <div className="form-group">
                        <label>{LanguageRus.page.products.table.min}</label>
                        <Field type="text" idName="productMin" name={'min'} component={Input} label={LanguageRus.page.products.table.min} />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="productNovelty">{LanguageRus.page.products.table.novelty}</label>
                        <Field type="checkbox" idName="productNovelty" name={"novelty"} component={Checkbox} label={LanguageRus.page.products.table.novelty} />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="productPopular">{LanguageRus.page.products.table.popular}</label>
                        <Field type="checkbox" idName="productPopular" name={"popular"} component={Checkbox} label={LanguageRus.page.products.table.popular} />
                    </div>
                </Tab>
                <Tab eventKey="category" title="Категории">
                    <div className="form-group">
                        <label>{LanguageRus.page.products.table.categories}</label>
                        <Field type={"select-multiple"} idName="propductCategories" multiple={true} name={'categories_id'} ourCategory={null} select={select} component={Select}/>
                    </div>
                </Tab>
                <Tab eventKey="image" title="Картинка">
                    <div className="form-group">
                        <Field type="file" idName="productFiles" name={"image"} change={change} component={File} label={LanguageRus.page.products.table.image} />
                    </div>
                </Tab>
                <Tab eventKey="option" title="Опции">
                    <FieldArray title={'Значение'} name="option" options={options} component={optionMultiple} type={"select"} />
                </Tab>
            </Tabs>

            <button onClick={() => setFetching(true)} type="submit" className="btn btn-primary" disabled={submitting} >{LanguageRus.page.products.edit.button} {isFetching ? <img src={loading}/> : null}</button>
            {errSer === null && submitSucceeded && isFetching &&
            <p className={'success'}>{LanguageRus.page.products.edit.success}</p>}
        </form>
    )
}

const ProductNewReduxForm = reduxForm({form:"ProductNew", validate, asyncBlurFields: ['name', 'detail', 'price']})(ProductNewForm);

export default ProductNew;
