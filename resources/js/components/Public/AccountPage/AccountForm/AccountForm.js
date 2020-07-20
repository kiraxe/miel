import React, {useEffect, useState} from "react";
import {rus as LanguageRus} from "../../../Admin/Language";
import {Field, reduxForm} from "redux-form";
import loading from '../../../../assets/images/loading.svg';
import validate from "../AccountForm/Validator/Validate";
import {Input} from '../../../common/FormsControls/FormControls';
import ErrorsAlert from "../../../Errors/ErrorsAlert";


const AccountForm = (props) => {
    return <AccountFormReduxForm errSer={props.error} client={props.client} onSubmit={props.editAccount}/>
};

const AccountFormEdit = (props) => {

    const [isFetching, setFetching] = useState(false);


    const [clientInfo, setClientInfo] = useState({})

    const { handleSubmit, pristine, reset, submitting, errSer, submitSucceeded, submitFailed, client, initialize } = props;

    submitSucceeded || submitFailed || errSer ? setTimeout(() => {setFetching(false)}, 2000) : null;

    let userFeedback;

    if (errSer) {
        userFeedback = (<ErrorsAlert error={errSer} />)
    }

    useEffect(() => {

        client ? setClientInfo({...client}) : null;

        errSer ? initialize({...clientInfo}) : initialize({...client});

    }, [client]);


    return (

        <form onSubmit={handleSubmit} name="accountForm">
            {errSer && <div className="error">
                {userFeedback}
            </div>}
            <div className="accountForm">
                <div className="section">
                    <p><Field type="text" idName="clientAccountLogin" className={"form-control"} name={"login"} component={Input} label={'Логин'} /></p>
                    <p><Field idName="clientAccountPassword" className={"form-control"} type={"password"} name={"password"} component={Input} label={'Пароль'} /></p>
                    <p><Field type="text" idName="clientAccountName" className={"form-control"} name={"name"} component={Input} label={'Ф.И.О контактного лица'} /></p>
                    <p><Field type="text" idName="clientAccountPhone" className={"form-control"} name={"phone"} component={Input} label={'Телефон контактного лица'} /></p>
                    <p><Field type="text" idName="clientAccountEmail" className={"form-control"} name={"email"} component={Input} label={'E-mail контактного лица'} /></p>
                    <p><Field type="text" idName="clientAccountAddressK" className={"form-control"} name={"addressK"} component={Input} label={'Адрес для курьерской доставки'} /></p>
                    <p><Field type="text" idName="clientAccountAddressP" className={"form-control"} name={"addressP"} component={Input} label={'Почтовый адрес для документов'} /></p>

                </div>
                <div className="section">
                    <p><Field type="text" idName="clientAccountCompany" className={"form-control"} name={"company"} component={Input} label={'Название компании'} /></p>
                    <p><Field type="text" idName="clientAccountInn" className={"form-control"} name={"inn"} component={Input} label={LanguageRus.page.clientele.table.inn} /></p>
                    <p><Field type="text" idName="clientAccountKpp" className={"form-control"} name={"kpp"} component={Input} label={LanguageRus.page.clientele.table.kpp} /></p>
                    <p><Field type="text" idName="clientAccountRs" className={"form-control"} name={"rs"} component={Input} label={LanguageRus.page.clientele.table.rs} /></p>
                    <p><Field type="text" idName="clientAccountBik" className={"form-control"} name={"bik"} component={Input} label={LanguageRus.page.clientele.table.bik} /></p>
                    <p><Field type="text" idName="clientAccountKs" className={"form-control"} name={"ks"} component={Input} label={LanguageRus.page.clientele.table.ks} /></p>
                </div>
            </div>
            <div className="button">
                <button onClick={() => setFetching(true)} type="submit" >Сохранить {isFetching ? <img src={loading}/> : null}</button>
                <p>Нажимая «Сохранить», я соглашаюсь с <span>офертой</span></p>
            </div>
        </form>
    )
}

const AccountFormReduxForm = reduxForm({form:"AccountForm", validate, asyncBlurFields: ['login','name', 'email', 'phone'] })(AccountFormEdit);

export default AccountForm;
