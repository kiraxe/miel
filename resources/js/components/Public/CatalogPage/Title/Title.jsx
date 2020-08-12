import React from "react";
import ReactHtmlParser from "react-html-parser";


const Title = (props) => {

    let background = {
        background: `url(${props.settings.banner_other_page}) no-repeat center center`,
    }

    return (
        <div className="row" style={props.settings.banner_other_page ? background : {}}>
            <div className="col-md-12 title-container" style={props.settings.banner_other_page ? {background: 'none'} : {}}>
                <div className="title"><h1>{ReactHtmlParser(props.settings.title_other_page)}</h1></div>
                <div className="text"><p>{ReactHtmlParser(props.settings.description_other_page)}</p>
                </div>
            </div>
        </div>
    )
}

export default Title;
