import React from 'react';
import Message from "./Message";
import { rus as LanguageRus} from '../Language';

const Messages = (props) => {
    return(
        <>
            <div className="title">
                <h1>{LanguageRus.page.messages.title}</h1>
            </div>
            <div className="content">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">{LanguageRus.page.messages.table.id}</th>
                        <th scope="col">{LanguageRus.page.messages.table.message}</th>
                        <th scope="col">{LanguageRus.page.messages.table.company}</th>
                        <th scope="col">{LanguageRus.page.messages.table.name}</th>
                        <th scope="col">{LanguageRus.page.messages.table.date}</th>
                        <th scope="col">{LanguageRus.page.messages.table.action}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.messages ? props.messages.map((p, index) => <Message onDelete={props.onDelete} page={props.page} url={props.url} message={p} key={index}/>) : null}
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default Messages;
