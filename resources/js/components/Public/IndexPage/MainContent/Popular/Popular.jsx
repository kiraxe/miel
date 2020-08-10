import React from "react";
import SliderProducts from "../SliderProducts/SliderProducts";
import ReactHtmlParser from "react-html-parser";

const Popular = (props) => {
    let category = props.categories ? props.categories.filter(item => {if(item.link === "popular_product") return  item} ): null;

    return (
        <div className="row">
            <div className="col-md-12 popular">
                <div className="title"><h1>Популярные товары</h1></div>
                <div className="text"><p>{category.length > 0 ? ReactHtmlParser(category[0].text) : ""}</p></div>
                <SliderProducts cart={props.cart} popUpOpen={props.popUpOpen} isFetching={props.isFetching} settings={props.settings} addCartHandler={props.addCartHandler} isLoggedIn={props.isLoggedIn} popular={props.popular}/>
            </div>
        </div>
    )
}


export default Popular;
