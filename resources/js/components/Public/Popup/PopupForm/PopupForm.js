import React, {useState, useEffect} from "react";
import {Field, reduxForm} from "redux-form";
import loading from '../../../../assets/images/loading.svg';
import validate from './Validator/Validate';
import {rus as LanguageRus} from "../../../Admin/Language";
import {Input, Hidden} from '../../../common/FormsControls/FormControls';
import {Redirect} from "react-router-dom";
import ErrorsAlert from "../../../Errors/ErrorsAlert";


const PopupForm = (props) => {
    return <ClientPopupReduxForm isLoggedIn={props.isLoggedIn} errSer={props.errorReg} isFetching={props.isFetching} onSubmit={props.addClient}/>
};


const ClientPopupForm = (props) => {

    const [isFetching, setFetching] = useState(false);

    const [passwordVisibility, setPasswordVisibility] = useState('view');

    const { handleSubmit, pristine, reset, submitting, errSer, submitSucceeded, submitFailed, change, isLoggedIn } = props;

    submitSucceeded || submitFailed || errSer ? setTimeout(() => {setFetching(false)}, 2000) : null;

    useEffect(() => {
        submitSucceeded && isLoggedIn ? setFetching(false) : null;
    })

    const passVisHandler = (e) => {
        if (e.target.previousSibling.getAttribute('type') === 'password'){
            e.target.classList.remove('view');
            setPasswordVisibility('');
            e.target.previousSibling.setAttribute('type', 'text');
        } else {
            setPasswordVisibility('view');
            e.target.previousSibling.setAttribute('type', 'password');
        }
    }

    let userFeedback;

    if (errSer) {
        userFeedback = (<ErrorsAlert error={errSer} />)
    }

    let redirect = submitSucceeded && isLoggedIn ? (<Redirect to={"/account"}/>) : null;

    return (
        <>
        {redirect && redirect ||
        <form onSubmit={handleSubmit} name="accountForm">
            {errSer && <div className="error">
                {userFeedback}
            </div>}
            <div className="accountForm">
                <div className="section">
                    <p><Field type="hidden" idName="clientHidden" change={change} name={"type"} component={Hidden} label={""} val={"client"} /></p>
                    <p><Field type="text" idName="clientLogin" name={"login"} component={Input} label={"Логин"} /></p>
                    <p>
                        <Field idName="clientPassword" type={"password"} name={"password"} component={Input} label={LanguageRus.page.clientele.table.password} />
                        <label onClick={passVisHandler} className={`passwordAction ${passwordVisibility}`}></label>
                    </p>
                    <p><Field type="text" idName="clientName" name={"name"} component={Input} label={"Ф.И.О контактного лица"} /></p>
                    <p><Field type="text" idName="clientPhone" name={"phone"} component={Input} label={"Телефон контактного лица"} /></p>
                    <p><Field type="text" idName="clientEmail" name={"email"} component={Input} label={"E-mail контактного лица"} /></p>
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
                <button onClick={() => setFetching(true)} type="submit" disabled={submitting}>Зарегистрироваться {isFetching ? <img src={loading}/> : null}</button>
                <p>Нажимая «Сохранить», я соглашаюсь с <span>офертой</span></p>
            </div>
        </form>}
        </>
    )
}

const ClientPopupReduxForm = reduxForm({form:"PopupForm", validate, asyncBlurFields: ['name', 'email', 'phone']})(ClientPopupForm);

export default PopupForm;

