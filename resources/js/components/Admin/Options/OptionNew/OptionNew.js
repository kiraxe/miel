import React, {useState} from "react";
import {rus as LanguageRus} from "../../Language";
import {Field, reduxForm} from "redux-form";
import loading from '../../../../assets/images/loading.svg';
//import validate from "../Validator/Validate";
import {Input, Textarea} from '../../../common/FormsControls/FormControls';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const OptionNew = (props) => {

    return (
        <>
            <div className="title"><h1>{LanguageRus.page.options.new.title}</h1></div>
            <div className="content">
                <OptionNewReduxForm errSer={props.error} isFetching={props.isFetching} onSubmit={props.addOption}/>
            </div>
        </>
    )
};


const OptionNewForm = (props) => {

    const [isFetching, setFetching] = useState(false);

    const [key, setKey] = useState('name');

    const { handleSubmit, pristine, reset, submitting, errSer, submitSucceeded, submitFailed } = props;

    submitSucceeded || submitFailed || errSer ? setTimeout(() => {setFetching(false)}, 2000) : null;

    return (
        <form onSubmit={handleSubmit} className="form">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="name" title="Название и тип">
                    <div className="form-group">
                        <label>{LanguageRus.page.options.table.name}</label>
                        <Field type="text" idName="optionName" className={"form-control"} name={"name"} component={Input} label={LanguageRus.page.options.table.name} />
                    </div>
                    <div className="form-group">
                        <label>{LanguageRus.page.options.table.type}</label>
                        <Field id={"optionType"} className={"form-control"} name={"type"} component={"select"} label={LanguageRus.page.options.table.type}>
                            <option value="0">Тип</option>
                            <option value="Select">Select</option>
                        </Field>
                    </div>
                </Tab>
                <Tab eventKey="value" title="Значения">

                </Tab>
            </Tabs>
            <button onClick={() => setFetching(true)} type="submit" className="btn btn-primary" disabled={submitting}>{LanguageRus.page.options.new.button} {isFetching ? <img src={loading}/> : null}</button>
            {errSer === null && submitSucceeded && isFetching &&
            <div className={'success'}>{LanguageRus.page.options.new.success}</div>}
        </form>
    )
}

const OptionNewReduxForm = reduxForm({form:"OptionNew"})(OptionNewForm);

export default OptionNew;
