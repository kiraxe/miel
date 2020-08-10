import React from "react";
import ReactHtmlParser from "react-html-parser";

const Title = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 title-container">
                <div className="title"><h1>Сувенирная продукция <span>МИЭЛЬ</span></h1></div>
                <div className="text"><p>{ReactHtmlParser(props.settings.description_main_page)}</p></div>
            </div>
        </div>
    )
}

export default Title;
