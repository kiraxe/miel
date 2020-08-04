import React, {useState, useEffect} from "react";
import {Field, reduxForm} from "redux-form";
import loading from '../../../../assets/images/loading.svg';
import validate from '../PopupFormLogin/Validator/Validate';
import {rus as LanguageRus} from "../../../Admin/Language";
import {Input, Hidden, Textarea} from '../../../common/FormsControls/FormControls';
import ErrorsAlert from "../../../Errors/ErrorsAlert";
import {Redirect} from 'react-router-dom';


const PopupFormMessage = (props) => {
    return <ClientPopupMessageReduxForm isLoggedIn={props.isLoggedIn} errSer={props.error} isFetching={props.isFetching} onSubmit={props.onLogin}/>
};


const ClientPopupFormMessage = (props) => {

    const [isFetching, setFetching] = useState(false);

    const [passwordVisibility, setPasswordVisibility] = useState('view');

    const { handleSubmit, pristine, reset, submitting, errSer, submitSucceeded, submitFailed, err, change, isLoggedIn} = props;

    let userFeedback;

    if (errSer) {
        userFeedback = (<ErrorsAlert error={errSer} />)
    }

    let redirect = submitSucceeded && isLoggedIn ? (<Redirect to={"/account/company_data"}/>) : null;


    submitSucceeded || submitFailed || errSer ? setTimeout(() => {setFetching(false)}, 2000) : null;

    return (
        <>
            {redirect && redirect ||
            <form onSubmit={handleSubmit} name="accountFormMessage">
                {errSer && <div className="error">
                    {userFeedback}
                </div>}
                <div className="accountForm">
                    <div className="section">
                        <p><Field type="hidden" idName="clientHidden" change={change} name={"type"} component={Hidden} label={""} val={"client"} /></p>
                        <p><Field type="text" idName="clientMessage" name={"message"} component={Textarea} label={"message"} /></p>
                    </div>
                </div>
                <div className="button">
                    <button onClick={() => setFetching(true)} type="submit" disabled={submitting}>Отправить {isFetching ? <img src={loading}/> : null}</button>
                </div>
            </form>}
        </>
    )
}

const ClientPopupMessageReduxForm = reduxForm({form:"PopupForm", validate, asyncBlurFields: ['message']})(ClientPopupFormMessage);

export default PopupFormMessage;

