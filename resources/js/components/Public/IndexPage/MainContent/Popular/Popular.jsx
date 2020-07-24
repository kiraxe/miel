import React from "react";
import SliderProducts from "../SliderProducts/SliderProducts";


const Popular = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 popular">
                <div className="title"><h1>Популярные товары</h1></div>
                <div className="text"><p>Какое-то небольшое описание, не более чем на две строки</p></div>
                <SliderProducts isLoggedIn={props.isLoggedIn} popular={props.popular}/>
            </div>
        </div>
    )
}


export default Popular;
