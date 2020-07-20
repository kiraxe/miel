import React, {useState, useEffect} from "react";
import {Field, reduxForm} from "redux-form";
import loading from '../../../../assets/images/loading.svg';
import validate from '../PopupFormLogin/Validator/Validate';
import {rus as LanguageRus} from "../../../Admin/Language";
import {Input, Hidden} from '../../../common/FormsControls/FormControls';
import ErrorsAlert from "../../../Errors/ErrorsAlert";
import {Redirect} from 'react-router-dom';


const PopupFormLogin = (props) => {
    return <ClientPopupLoginReduxForm isLoggedIn={props.isLoggedIn} errSer={props.error} isFetching={props.isFetching} onSubmit={props.onLogin}/>
};


const ClientPopupFormLogin = (props) => {

    const [isFetching, setFetching] = useState(false);

    const [passwordVisibility, setPasswordVisibility] = useState('view');

    const { handleSubmit, pristine, reset, submitting, errSer, submitSucceeded, submitFailed, err, change, isLoggedIn} = props;

    let userFeedback;

    if (errSer) {
        userFeedback = (<ErrorsAlert error={errSer} />)
    }

    let redirect = submitSucceeded && isLoggedIn ? (<Redirect to={"/account/company_data"}/>) : null;


    submitSucceeded || submitFailed || errSer ? setTimeout(() => {setFetching(false)}, 2000) : null;

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
                    </div>
                </div>
                <div className="button">
                    <button onClick={() => setFetching(true)} type="submit" disabled={submitting}>Войти {isFetching ? <img src={loading}/> : null}</button>
                </div>
            </form>}
        </>
    )
}

const ClientPopupLoginReduxForm = reduxForm({form:"PopupForm", validate, asyncBlurFields: ['name', 'login']})(ClientPopupFormLogin);

export default PopupFormLogin;

