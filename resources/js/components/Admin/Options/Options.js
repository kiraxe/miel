import React from 'react';
import Option from "./Option";
import { rus as LanguageRus} from '../Language';
import ButtonPanelContainer from "../../common/ButtonsPanel/ButtonPanelContainer";

const Options = (props) => {
    return(
        <>
            <div className="title">
                <h1>{LanguageRus.page.options.title}</h1>
            </div>
            <div className="content">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">{LanguageRus.page.options.table.id}</th>
                        <th scope="col">{LanguageRus.page.options.table.name}</th>
                        <th scope="col">{LanguageRus.page.options.table.type}</th>
                        <th scope="col">{LanguageRus.page.options.table.action}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.options ? props.options.map((p, index) => <Option onDelete={props.onDelete} page={props.page} url={props.url} option={p} key={index}/>) : null}
                    </tbody>
                </table>
                <ButtonPanelContainer buttons={['add']} url={props.url}/>
            </div>
        </>
    )
};

export default Options;
