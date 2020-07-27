import React from 'react';
import Order from "./Order";
import { rus as LanguageRus} from '../Language';

const Orders = (props) => {
    return(
        <>
            <div className="title">
                <h1>{LanguageRus.page.orders.title}</h1>
            </div>
            <div className="content">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">{LanguageRus.page.orders.table.id}</th>
                        <th scope="col">{LanguageRus.page.orders.table.action}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.orders ? props.orders.map((p, index) => <Order onDelete={props.onDelete} page={props.page} url={props.url} order={p} key={index}/>) : null}
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default Orders;
