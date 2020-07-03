import React, {useEffect, useState} from "react";
import {rus as LanguageRus} from "../../Language";
import {Field, FieldArray, reduxForm} from "redux-form";
import loading from '../../../../assets/images/loading.svg';
//import validate from "../Validator/Validate";
import {Input, inputMultiple} from '../../../common/FormsControls/FormControls';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


const OptionEdit = (props) => {
    return (
        <>
            <div className="title"><h1>{LanguageRus.page.options.edit.title}</h1></div>
            <div className="content">
                <OptionEditReduxForm errSer={props.error} initialValues={props.option[0]} option={props.option[0]} onSubmit={props.editOption}/>
            </div>
        </>
    )
};

const OptionEditForm = (props) => {

    const [isFetching, setFetching] = useState(false);

    const [key, setKey] = useState('name');

    const { handleSubmit, pristine, reset, submitting, errSer, submitSucceeded, submitFailed, option, initialize } = props;

    submitSucceeded || submitFailed || errSer ? setTimeout(() => {setFetching(false)}, 2000) : null;

    useEffect(() => {

        if(option) {
            initialize({...option, name: option.description.name});
        }

    },[option]);

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
                    <FieldArray title={'Значение'} name="optionval" component={inputMultiple} />
                </Tab>
            </Tabs>
            <button onClick={() => setFetching(true)} type="submit" className="btn btn-primary">{LanguageRus.page.options.edit.button} {isFetching ? <img src={loading}/> : null}</button>
            {errSer === null && submitSucceeded && isFetching &&
            <div className={'success'}><div>{LanguageRus.page.options.edit.success}</div></div>}
        </form>
    )
}

const OptionEditReduxForm = reduxForm({form:"OptionEdit"})(OptionEditForm);

export default OptionEdit;
