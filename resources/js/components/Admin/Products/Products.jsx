import React from 'react';
import Product from "./Product";
import { rus as LanguageRus} from '../Language';
import ButtonPanelContainer from "../../common/ButtonsPanel/ButtonPanelContainer";

const Products = (props) => {
    return(
        <>
            <div className="title">
                <h1>{LanguageRus.page.products.title}</h1>
            </div>
            <div className="content">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">{LanguageRus.page.products.table.id}</th>
                        <th scope="col">{LanguageRus.page.products.table.image}</th>
                        <th scope="col">{LanguageRus.page.products.table.name}</th>
                        <th scope="col">{LanguageRus.page.products.table.description}</th>
                        <th scope="col">{LanguageRus.page.products.table.price}</th>
                        <th scope="col">{LanguageRus.page.products.table.action}</th>
                    </tr>
                    </thead>
                    <tbody>
                        {props.products ? props.products.map((p, index) => <Product onDelete={props.onDelete} page={props.page} url={props.url} product={p} key={index}/>) : null}
                    </tbody>
                </table>
                <ButtonPanelContainer buttons={['add']} url={props.url}/>
            </div>
        </>
    )
};

export default Products;
