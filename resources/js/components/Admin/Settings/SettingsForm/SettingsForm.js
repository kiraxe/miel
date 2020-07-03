import React, {useState} from "react";
import {rus as LanguageRus} from "../../Language";
import {Field, reduxForm} from "redux-form";
import loading from '../../../../assets/images/loading.svg';
//import validate from "../Validator/Validate";
import {renderDateTimePicker} from '../../../common/FormsControls/FormControls';



const Settings = (props) => {

    return (
        <>
            <div className="title"><h1>{LanguageRus.page.settings.title}</h1></div>
            <div className="content">
                <SettingsReduxForm errSer={props.error} initialValues={props.settings[0]} onSubmit={props.editSettings}/>
            </div>
        </>
    )
};

const SettingsForm = (props) => {

    const [isFetching, setFetching] = useState(false);

    const { handleSubmit, pristine, reset, submitting, errSer, submitSucceeded, submitFailed} = props;

    submitSucceeded || submitFailed || errSer ? setTimeout(() => {setFetching(false)}, 2000) : null;

    return (
        <form id="settingsForm" onSubmit={handleSubmit} className="form" >

            <div className="form-group">
                <label>{LanguageRus.page.settings.from}</label>
                <Field type="text" idName="settingsFrom" name={"from"} showTime={false} component={renderDateTimePicker} label={LanguageRus.page.settings.from} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.settings.to}</label>
                <Field type="text" idName="settingsTo" name={"to"} showTime={false} component={renderDateTimePicker} label={LanguageRus.page.settings.to} />
            </div>
            <button onClick={() => setFetching(true)} type="submit" className="btn btn-primary" disabled={submitting} >{LanguageRus.page.settings.button} {isFetching ? <img src={loading}/> : null}</button>
            {errSer === null && submitSucceeded && isFetching &&
            <p className={'success'}>{LanguageRus.page.settings.success}</p>}
        </form>

    )
}

const SettingsReduxForm = reduxForm({form:"SettingsForm"})(SettingsForm);

export default Settings;
