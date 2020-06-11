import React from 'react';
import Category from "./Category";
import { rus as LanguageRus} from '../Language';
import ButtonPanelContainer from "../../common/ButtonsPanel/ButtonPanelContainer";

const Categories = (props) => {
    return(
        <>
            <div className="title">
                <h1>{LanguageRus.page.categories.title}</h1>
            </div>
            <div className="content">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">{LanguageRus.page.categories.table.id}</th>
                        <th scope="col">{LanguageRus.page.categories.table.image}</th>
                        <th scope="col">{LanguageRus.page.categories.table.name}</th>
                        <th scope="col">{LanguageRus.page.categories.table.parent}</th>
                        <th scope="col">{LanguageRus.page.categories.table.action}</th>
                    </tr>
                    </thead>
                    <tbody>
                        {props.categories ? props.categories.map((p, index) => <Category onDelete={props.onDelete} page={props.page} url={props.url} category={p} key={index}/>) : null}
                    </tbody>
                </table>
                <ButtonPanelContainer buttons={['add']} url={props.url}/>
            </div>
        </>
    )
};

export default Categories;
