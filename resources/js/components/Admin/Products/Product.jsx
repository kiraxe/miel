import React from "react";
import ButtonPanelContainer from "../../common/ButtonsPanel/ButtonPanelContainer";
import { rus as LanguageRus} from '../Language';
import ReactHtmlParser from "react-html-parser";

const Product = (props) => {
    let buttons = ['edit','delete'];
    return (
        <tr>
            <td>{props.product.product_id}</td>
            <td>{props.product.image && <img src={props.product.image}/> || <img src={"/storage/no-image.jpg"}/>}</td>
            <td>{props.product.name}</td>
            <td>{ReactHtmlParser(props.product.detail)}</td>
            <td>{props.product.price} {LanguageRus.page.products.rub}</td>
            <td><ButtonPanelContainer onDelete={props.onDelete} page={props.page} buttons={buttons} elementId={props.product.product_id}  url={props.url}/></td>
        </tr>
    )
};

export default Product;
