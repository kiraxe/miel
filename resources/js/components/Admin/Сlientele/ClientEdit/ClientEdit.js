import React, {useState} from "react";
import {rus as LanguageRus} from "../../Language";
import {Field, reduxForm} from "redux-form";
import loading from '../../../../assets/images/loading.svg';
import validate from "../Validator/Validate";
import {Input, Textarea} from '../../../common/FormsControls/FormControls';


const ClientEdit = (props) => {
    return (
        <>
            <div className="title"><h1>{LanguageRus.page.clientele.edit.title}</h1></div>
            <div className="content">
                <ClientEditReduxForm errSer={props.error} initialValues={props.client[0]} onSubmit={props.editClient}/>
            </div>
        </>
    )
};

const ClientEditForm = (props) => {

    const [isFetching, setFetching] = useState(false);

    const { handleSubmit, pristine, reset, submitting, errSer, submitSucceeded, submitFailed } = props;

    submitSucceeded || submitFailed || errSer ? setTimeout(() => {setFetching(false)}, 2000) : null;

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.name}</label>
                <Field type="text" idName="clientName" className={"form-control"} name={"name"} component={Input} label={LanguageRus.page.clientele.table.name} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.email}</label>
                <Field type="text" errSer={errSer} idName="clientEmail" className={"form-control"} name={"email"} component={Input} label={LanguageRus.page.clientele.table.email} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.phone}</label>
                <Field type="text" idName="clientPhone" className={"form-control"} name={"phone"} component={Input} label={LanguageRus.page.clientele.table.phone} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.company}</label>
                <Field type="text" idName="clientCompany" className={"form-control"} name={"company"} component={Input} label={LanguageRus.page.clientele.table.company} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.addressK}</label>
                <Field type="text" idName="clientAddressK" className={"form-control"} name={"addressK"} component={Input} label={LanguageRus.page.clientele.table.addressK} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.addressP}</label>
                <Field type="text" idName="clientAddressP" className={"form-control"} name={"addressP"} component={Input} label={LanguageRus.page.clientele.table.addressP} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.inn}</label>
                <Field type="text" idName="clientInn" className={"form-control"} name={"inn"} component={Input} label={LanguageRus.page.clientele.table.inn} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.kpp}</label>
                <Field type="text" idName="clientKpp" className={"form-control"} name={"kpp"} component={Input} label={LanguageRus.page.clientele.table.kpp} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.rs}</label>
                <Field type="text" idName="clientRs" className={"form-control"} name={"rs"} component={Input} label={LanguageRus.page.clientele.table.rs} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.bik}</label>
                <Field type="text" idName="clientBik" className={"form-control"} name={"bik"} component={Input} label={LanguageRus.page.clientele.table.bik} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.ks}</label>
                <Field type="text" idName="clientKs" className={"form-control"} name={"ks"} component={Input} label={LanguageRus.page.clientele.table.ks} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.password}</label>
                <Field idName="clientPassword" className={"form-control"} type={"password"} name={"password"} component={Input} label={LanguageRus.page.clientele.table.password} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.permission}</label>
                <Field id={"clientPermission"} className={"form-control"} name="clientPermission" component={"select"} label={LanguageRus.page.clientele.table.permission}>
                    <option></option>
                    <option value="ff0000">Red</option>
                    <option value="00ff00">Green</option>
                    <option value="0000ff">Blue</option>
                </Field>
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.role}</label>
                <Field id={"clientRole"} className={"form-control"} name={"clientRole"} component={"select"} label={LanguageRus.page.clientele.table.role}>
                    <option></option>
                    <option value="ff0000">Red</option>
                    <option value="00ff00">Green</option>
                    <option value="0000ff">Blue</option>
                </Field>
            </div>
            <button onClick={() => setFetching(true)} type="submit" className="btn btn-primary">{LanguageRus.page.clientele.edit.button} {isFetching ? <img src={loading}/> : null}</button>
            {errSer === null && submitSucceeded && isFetching &&
            <div className={'success'}><div>{LanguageRus.page.clientele.edit.success}</div></div>}
        </form>
    )
}

const ClientEditReduxForm = reduxForm({form:"ClientEdit", validate, asyncBlurFields: ['name', 'email', 'phone'] })(ClientEditForm);

export default ClientEdit;
