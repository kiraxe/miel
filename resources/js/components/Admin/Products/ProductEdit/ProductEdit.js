import React, {useState, useEffect} from "react";
import {rus as LanguageRus} from "../../Language";
import {Field, FieldArray, reduxForm} from "redux-form";
import loading from '../../../../assets/images/loading.svg';
import validate from "../Validator/Validate";
import {
    Input,
    Textarea,
    File,
    Checkbox,
    Select,
    optionMultiple,
    inputMultiple
} from '../../../common/FormsControls/FormControls';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const ProductEdit = (props) => {
    let attributes = props.product[0] && props.product[0].attributes ? props.product[0].attributes.map(item => item.category_id) : props.product[0] && props.product[0].categories_id ? props.product[0].categories_id.split(','): null;

    return (
        <>
            <div className="title"><h1>{LanguageRus.page.products.edit.title}</h1></div>
            <div className="content">
                <ProductEditReduxForm errSer={props.error} product={props.product[0]} attributes={attributes} select={props.select} options={props.options}/*initialValues={props.product[0]}*/ onSubmit={props.editProduct}/>
            </div>
        </>
    )
};

const ProductEditForm = (props) => {

    const [isFetching, setFetching] = useState(false);

    const [key, setKey] = useState('general');

    const { handleSubmit, pristine, reset, submitting, errSer, submitSucceeded, submitFailed, change, select, options, attributes, initialize, product} = props;

    useEffect(() => {
        initialize({...product, categories_id: attributes});
    }, [product]);

    submitSucceeded || submitFailed || errSer ? setTimeout(() => {setFetching(false)}, 3000) : null;

    return (
        <form id="productForm" onSubmit={handleSubmit} className="form" >


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
                        <label>{LanguageRus.page.products.table.description_min}</label>
                        <Field type="textarea" idName="productDetailMin" name={"detail_min"} component={Textarea} label={LanguageRus.page.products.table.description_min} />
                    </div>
                    <div className="form-group">
                        <label>{LanguageRus.page.products.table.description}</label>
                        <Field type="textarea" idName="productDetail" name={"detail"} component={Textarea} label={LanguageRus.page.products.table.description} />
                    </div>
                    <div className="form-group">
                        <label>{LanguageRus.page.products.table.property}</label>
                        <Field type="textarea" idName="productProperty" name={"property"} component={Textarea} label={LanguageRus.page.products.table.property} />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="productNovelty">{LanguageRus.page.products.table.novelty}</label>
                        <Field type="checkbox" idName="productNovelty" name={"novelty"} component={Checkbox} label={LanguageRus.page.products.table.novelty} />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="productPopular">{LanguageRus.page.products.table.popular}</label>
                        <Field type="checkbox" idName="productPopular" name={"popular"} component={Checkbox} label={LanguageRus.page.products.table.popular} />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="productActive">{LanguageRus.page.products.table.active}</label>
                        <Field type="checkbox" idName="productActive" name={"active"} component={Checkbox} label={LanguageRus.page.products.table.active} />
                    </div>
                </Tab>
                <Tab eventKey="price" title="Цена">
                    <div className="form-group">
                        <label>{LanguageRus.page.products.table.price}</label>
                        <Field type="text" idName="productPrice" name={'price'} component={Input} label={LanguageRus.page.products.table.price} />
                    </div>
                    <div className="form-group">
                        <label>{LanguageRus.page.products.table.min}</label>
                        <Field type="text" idName="productMin" name={'min'} component={Input} label={LanguageRus.page.products.table.min} />
                    </div>

                    <div className="form-group">
                        <label>{LanguageRus.page.products.table.price_second}</label>
                        <Field type="text" idName="productPriceSecond" name={'price_second'} component={Input} label={LanguageRus.page.products.table.price_second} />
                    </div>
                    <div className="form-group">
                        <label>{LanguageRus.page.products.table.min_second}</label>
                        <Field type="text" idName="productMinSecond" name={'min_second'} component={Input} label={LanguageRus.page.products.table.min_second} />
                    </div>

                    <div className="form-group">
                        <label>{LanguageRus.page.products.table.price_third}</label>
                        <Field type="text" idName="productPriceThird" name={'price_third'} component={Input} label={LanguageRus.page.products.table.price_third} />
                    </div>
                    <div className="form-group">
                        <label>{LanguageRus.page.products.table.min_third}</label>
                        <Field type="text" idName="productMinThird" name={'min_third'} component={Input} label={LanguageRus.page.products.table.min_third} />
                    </div>

                    <div className="form-group">
                        <label>{LanguageRus.page.products.table.price_quarterly}</label>
                        <Field type="text" idName="productPriceQuarterly" name={'price_quarterly'} component={Input} label={LanguageRus.page.products.table.price_quarterly} />
                    </div>
                    <div className="form-group">
                        <label>{LanguageRus.page.products.table.min_quarterly}</label>
                        <Field type="text" idName="productMinQuarterly" name={'min_quarterly'} component={Input} label={LanguageRus.page.products.table.min_quarterly} />
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
                <Tab eventKey="slider" title="Слайдер">
                    <div className="form-group">
                        <Field type="file" idName="productSlider" multiple={true} name={"slider"} change={change} component={File} label={LanguageRus.page.products.table.slider} />
                    </div>
                </Tab>
                <Tab eventKey="option" title="Опции">
                    <FieldArray title={'Значение'} name="option" product={product} options={options} component={optionMultiple} type={"select"} />
                </Tab>
            </Tabs>

            <button onClick={() => setFetching(true)} type="submit" className="btn btn-primary" disabled={submitting} >{LanguageRus.page.products.edit.button} {isFetching ? <img src={loading}/> : null}</button>
            {errSer === null && submitSucceeded && isFetching &&
            <p className={'success'}>{LanguageRus.page.products.edit.success}</p>}
        </form>

    )
}

const ProductEditReduxForm = reduxForm({form:"ProductEdit", validate, asyncBlurFields: ['name', 'detail', 'article', 'price']})(ProductEditForm);

export default ProductEdit;
