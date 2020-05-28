import React from 'react';
import Client from "./Client";
import { rus as LanguageRus} from '../Language';
import ButtonPanelContainer from "../../common/ButtonsPanel/ButtonPanelContainer";

const Clientele = (props) => {
    return(
        <>
            <div className="title">
                <h1>{LanguageRus.page.clientele.title}</h1>
            </div>
            <div className="content">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">{LanguageRus.page.clientele.table.name}</th>
                        <th scope="col">{LanguageRus.page.clientele.table.email}</th>
                        <th scope="col">{LanguageRus.page.clientele.table.phone}</th>
                        <th scope="col">{LanguageRus.page.clientele.table.company}</th>
                        <th scope="col">{LanguageRus.page.clientele.table.addressK}</th>
                        <th scope="col">{LanguageRus.page.clientele.table.addressP}</th>
                        <th scope="col">{LanguageRus.page.clientele.table.inn}</th>
                        <th scope="col">{LanguageRus.page.clientele.table.kpp}</th>
                        <th scope="col">{LanguageRus.page.clientele.table.rs}</th>
                        <th scope="col">{LanguageRus.page.clientele.table.bik}</th>
                        <th scope="col">{LanguageRus.page.clientele.table.ks}</th>
                        <th scope="col">{LanguageRus.page.clientele.table.action}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.clientele ? props.clientele.map(p => <Client page={props.page} url={props.url} client={p} key={p.id}/>) : null}
                    </tbody>
                </table>
                <ButtonPanelContainer buttons={['add']} url={props.url}/>
            </div>
        </>
    )
};

export default Clientele;
