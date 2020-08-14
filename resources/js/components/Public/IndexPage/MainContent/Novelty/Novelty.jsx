import React from "react";
import SliderProducts from "../SliderProducts/SliderProducts";
import ReactHtmlParser from "react-html-parser";
import Item from "../SliderProducts/Item/Item";

const Novelty = (props) => {

    let category = props.categories ? props.categories.filter(item => {if(item.link === "new") return  item} ): null;

    let elements = props.novelty ? props.novelty.map((item, key) => !item.active ? <Item cart={props.cart} popUpOpen={props.popUpOpen} isFetching={props.isFetching} settings={props.settings} addCartHandler={props.addCartHandler} isLoggedIn={props.isLoggedIn} key={key} itm={item} /> : null): null;

    return (
        <div className="noveltyBlock">
            <div className="container-my">
                <div className="row">
                    <div className="col-md-12 novelty">
                        <div className="title"><h1>Новинки</h1></div>
                        <div className="text"><p>{category.length > 0 ? ReactHtmlParser(category[0].text) : ""}</p></div>
                        <SliderProducts cart={props.cart} popUpOpen={props.popUpOpen} isFetching={props.isFetching} settings={props.settings} addCartHandler={props.addCartHandler} isLoggedIn={props.isLoggedIn} elements={elements}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Novelty;
