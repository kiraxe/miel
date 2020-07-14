import React, {useState, useEffect} from "react";
import {Field, reduxForm} from "redux-form";
import loading from '../../../../assets/images/loading.svg';
import validate from "../../../Admin/Сlientele/Validator/Validate";
import {rus as LanguageRus} from "../../../Admin/Language";
import {Input} from '../../../common/FormsControls/FormControls';


const PopupForm = (props) => {

    return <ClientPopupReduxForm errSer={props.error} isFetching={props.isFetching} onSubmit={props.addClient}/>
};


const ClientPopupForm = (props) => {

    const [isFetching, setFetching] = useState(false);

    const { handleSubmit, pristine, reset, submitting, errSer, submitSucceeded, submitFailed } = props;

    submitSucceeded || submitFailed || errSer ? setTimeout(() => {setFetching(false)}, 2000) : null;

    return (
        <form onSubmit={handleSubmit} name="accountForm">
            <div className="accountForm">
                <div className="section">
                    <p><Field type="text" errSer={errSer} idName="clientEmail" name={"email"} component={Input} label={"E-mail контактного лица"} /></p>
                    <p>
                        <Field idName="clientPassword" type={"password"} name={"password"} component={Input} label={LanguageRus.page.clientele.table.password} />
                        <label className="passwordAction"></label>
                    </p>
                    <p><Field type="text" idName="clientName" name={"name"} component={Input} label={"Ф.И.О контактного лица"} /></p>
                    <p><Field type="text" idName="clientPhone" name={"phone"} component={Input} label={"Телефон контактного лица"} /></p>
                    <p><Field type="text" idName="clientAddressK" name={"addressK"} component={Input} label={"Адрес для курьерской доставки"} /></p>
                    <p><Field type="text" idName="clientAddressP" name={"addressP"} component={Input} label={"Почтовый адрес для документов"} /></p>
                </div>
                <div className="section">
                    <p><Field type="text" idName="clientCompany" name={"company"} component={Input} label={"Название компании"} /></p>
                    <p><Field type="text" idName="clientInn" name={"inn"} component={Input} label={LanguageRus.page.clientele.table.inn} /></p>
                    <p><Field type="text" idName="clientKpp" name={"kpp"} component={Input} label={LanguageRus.page.clientele.table.kpp} /></p>
                    <p><Field type="text" idName="clientRs" name={"rs"} component={Input} label={LanguageRus.page.clientele.table.rs} /></p>
                    <p><Field type="text" idName="clientBik" name={"bik"} component={Input} label={LanguageRus.page.clientele.table.bik} /></p>
                    <p><Field type="text" idName="clientKs" name={"ks"} component={Input} label={LanguageRus.page.clientele.table.ks} /></p>
                </div>
            </div>
            <div className="button">
                <input type="submit" value="Зарегистрироваться" name="submit" onClick={() => setFetching(true)}  disabled={submitting}/>
                {errSer === null && submitSucceeded && isFetching &&
                <div className={'success'}>{LanguageRus.page.clientele.new.success}</div>}
                <p>Нажимая «Сохранить», я соглашаюсь с <span>офертой</span></p>
            </div>
        </form>
    )
}

const ClientPopupReduxForm = reduxForm({form:"PopupForm", validate, asyncBlurFields: ['name', 'email', 'phone']})(ClientPopupForm);

export default PopupForm;

