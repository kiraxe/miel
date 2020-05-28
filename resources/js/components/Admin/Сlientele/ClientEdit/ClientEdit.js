import React from "react";
import {rus as LanguageRus} from "../../Language";
import {Field, reduxForm} from "redux-form";
import loading from '../../../../../../public/images/loading.svg';


const ClientEdit = (props) => {
    return (
        <>
            <div className="title"><h1>{LanguageRus.page.clientele.edit.title}</h1></div>
            <div className="content">
                <ClientEditReduxForm isFetching={props.isFetching} initialValues={props.client[0]} onSubmit={props.editClient}/>
            </div>
        </>
    )
};

const ClientEditForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="form">
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.name}</label>
                <Field id="clientName" className={"form-control"} placeholder={LanguageRus.page.clientele.table.name} name={"name"} component={"input"} label={LanguageRus.page.clientele.table.name} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.email}</label>
                <Field id="clientEmail" className={"form-control"} placeholder={LanguageRus.page.clientele.table.email} name={"email"} component={"input"} label={LanguageRus.page.clientele.table.email} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.phone}</label>
                <Field id="clientPhone" className={"form-control"} placeholder={LanguageRus.page.clientele.table.phone} name={"phone"} component={"input"} label={LanguageRus.page.clientele.table.phone} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.company}</label>
                <Field id="clientCompany" className={"form-control"} placeholder={LanguageRus.page.clientele.table.company} name={"company"} component={"input"} label={LanguageRus.page.clientele.table.company} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.addressK}</label>
                <Field id="clientAddressK" className={"form-control"} placeholder={LanguageRus.page.clientele.table.addressK} name={"addressK"} component={"input"} label={LanguageRus.page.clientele.table.addressK} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.addressP}</label>
                <Field id="clientAddressP" className={"form-control"} placeholder={LanguageRus.page.clientele.table.addressP} name={"addressP"} component={"input"} label={LanguageRus.page.clientele.table.addressP} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.inn}</label>
                <Field id="clientInn" className={"form-control"} placeholder={LanguageRus.page.clientele.table.inn} name={"inn"} component={"input"} label={LanguageRus.page.clientele.table.inn} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.kpp}</label>
                <Field id="clientKpp" className={"form-control"} placeholder={LanguageRus.page.clientele.table.kpp} name={"kpp"} component={"input"} label={LanguageRus.page.clientele.table.kpp} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.rs}</label>
                <Field id="clientRs" className={"form-control"} placeholder={LanguageRus.page.clientele.table.rs} name={"rs"} component={"input"} label={LanguageRus.page.clientele.table.rs} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.bik}</label>
                <Field id="clientBik" className={"form-control"} placeholder={LanguageRus.page.clientele.table.bik} name={"bik"} component={"input"} label={LanguageRus.page.clientele.table.bik} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.ks}</label>
                <Field id="clientKs" className={"form-control"} placeholder={LanguageRus.page.clientele.table.ks} name={"ks"} component={"input"} label={LanguageRus.page.clientele.table.ks} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.clientele.table.password}</label>
                <Field id="clientPassword" className={"form-control"} placeholder={LanguageRus.page.clientele.table.password} type={"password"} name={"password"} component={"input"} label={LanguageRus.page.clientele.table.password} />
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
            <button type="submit" className="btn btn-primary">{LanguageRus.page.clientele.edit.button} {props.isFetching ? <img src={loading}/> : null}</button>
        </form>
    )
}

const ClientEditReduxForm = reduxForm({form:"ClientEdit"})(ClientEditForm);

export default ClientEdit;
