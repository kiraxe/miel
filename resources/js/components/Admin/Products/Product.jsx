import React from "react";
import ButtonPanelContainer from "../../common/ButtonsPanel/ButtonPanelContainer";
import { rus as LanguageRus} from '../Language';

const Product = (props) => {
    let buttons = ['edit','delete'];
    return (
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.detail}</td>
            <td>{props.product.price} {LanguageRus.page.products.rub}</td>
            <td><ButtonPanelContainer page={props.page} buttons={buttons} elementId={props.product.id}  url={props.url}/></td>
        </tr>
    )
};

export default Product;
