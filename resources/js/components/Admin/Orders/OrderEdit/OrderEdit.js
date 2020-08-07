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

const OrderEdit = (props) => {

    return (
        <>
            <div className="title"><h1>{LanguageRus.page.orders.edit.title}</h1></div>
            <div className="content">
                <OrderEditReduxForm errSer={props.error} order={props.order[0]}  onSubmit={props.editOrder}/>
            </div>
        </>
    )
};

const OrderEditForm = (props) => {

    const [isFetching, setFetching] = useState(false);

    const [key, setKey] = useState('general');

    const { handleSubmit, pristine, reset, submitting, errSer, submitSucceeded, submitFailed, initialize, order} = props;

    useEffect(() => {
        initialize({...order});
    }, [order]);

    submitSucceeded || submitFailed || errSer ? setTimeout(() => {setFetching(false)}, 3000) : null;

    return (
        <form id="ordersForm" onSubmit={handleSubmit} className="form" >


            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="general" title="Статус">
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="ordersStatus">{LanguageRus.page.orders.table.status}</label>
                        <Field type="checkbox" idName="ordersStatus" name={"status"} component={Checkbox} label={LanguageRus.page.orders.table.status} />
                    </div>
                </Tab>
            </Tabs>

            <button onClick={() => setFetching(true)} type="submit" className="btn btn-primary" disabled={submitting} >{LanguageRus.page.orders.edit.button} {isFetching ? <img src={loading}/> : null}</button>
            {errSer === null && submitSucceeded && isFetching &&
            <p className={'success'}>{LanguageRus.page.orders.edit.success}</p>}
        </form>

    )
}

const OrderEditReduxForm = reduxForm({form:"OrderEdit"})(OrderEditForm);

export default OrderEdit;
