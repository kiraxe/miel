import React, {useState} from "react";
import {rus as LanguageRus} from "../../Language";
import {Field, reduxForm} from "redux-form";
import loading from '../../../../assets/images/loading.svg';
//import Validator from "../Validator/Validate.js";
import {Input, Textarea} from '../../../common/FormsControls/FormControls';
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
                <label>{LanguageRus.page.settings.description_main_page}</label>
                <Field type="text" idName="settingsDescriptionMainPage" name={"description_main_page"} component={Textarea} label={LanguageRus.page.settings.description_main_page} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.settings.description_other_page}</label>
                <Field type="text" idName="settingsDescriptionOtherPage" name={"description_other_page"} component={Textarea} label={LanguageRus.page.settings.description_other_page} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.settings.phone}</label>
                <Field type="text" idName="settingsPhone" name={"phone"} component={Input} label={LanguageRus.page.settings.phone} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.settings.email}</label>
                <Field type="text" idName="settingsEmail" name={"email"} component={Input} label={LanguageRus.page.settings.email} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.settings.worktime}</label>
                <Field type="text" idName="settingsWorktime" name={"worktime"} component={Input} label={LanguageRus.page.settings.worktime} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.settings.phone_manager}</label>
                <Field type="text" idName="settingsPhoneManager" name={"phone_manager"} component={Input} label={LanguageRus.page.settings.phone_manager} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.settings.manager_name}</label>
                <Field type="text" idName="settingsManagerName" name={"manager_name"} component={Input} label={LanguageRus.page.settings.manager_name} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.settings.manager_email}</label>
                <Field type="text" idName="settingsManagerEmail" name={"manager_email"} component={Input} label={LanguageRus.page.settings.manager_email} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.settings.youtube}</label>
                <Field type="text" idName="settingsYoutube" name={"youtube"} component={Input} label={LanguageRus.page.settings.youtube} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.settings.facebook}</label>
                <Field type="text" idName="settingsFacebook" name={"facebook"} component={Input} label={LanguageRus.page.settings.facebook} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.settings.vk}</label>
                <Field type="text" idName="settingsVk" name={"vk"} component={Input} label={LanguageRus.page.settings.vk} />
            </div>
            <div className="form-group">
                <label>{LanguageRus.page.settings.instagram}</label>
                <Field type="text" idName="settingsInstagram" name={"instagram"} component={Input} label={LanguageRus.page.settings.instagram} />
            </div>
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
