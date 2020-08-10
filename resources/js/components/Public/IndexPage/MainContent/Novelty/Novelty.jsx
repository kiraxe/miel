import React from "react";
import SliderProducts from "../SliderProducts/SliderProducts";
import ReactHtmlParser from "react-html-parser";

const Novelty = (props) => {
    let category = props.categories ? props.categories.filter(item => {if(item.link === "new") return  item} ): null;
    return (
        <div className="noveltyBlock">
            <div className="container-my">
                <div className="row">
                    <div className="col-md-12 novelty">
                        <div className="title"><h1>Новинки</h1></div>
                        <div className="text"><p>{category.length > 0 ? ReactHtmlParser(category[0].text) : ""}</p></div>
                        <SliderProducts cart={props.cart} popUpOpen={props.popUpOpen} isFetching={props.isFetching} settings={props.settings} addCartHandler={props.addCartHandler} isLoggedIn={props.isLoggedIn} novelty={props.novelty}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Novelty;
