import React from "react";
import Slider from "react-slick";
import {SampleNextArrow, SamplePrevArrow} from "./Arrows/Arrows";
import {NavLink} from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Item from "./Item/Item";


const SliderProducts = (props) => {

    let elements = props.popular ? props.popular.map((item, key) => <Item cart={props.cart} popUpOpen={props.popUpOpen} isFetching={props.isFetching} settings={props.settings} addCartHandler={props.addCartHandler} isLoggedIn={props.isLoggedIn} key={key} itm={item} />) : props.novelty ? props.novelty.map((item, key) => <Item popUpOpen={props.popUpOpen} isFetching={props.isFetching} settings={props.settings} addCartHandler={props.addCartHandler} isLoggedIn={props.isLoggedIn} key={key} itm={item} />): null;

    let slidesToShow = props.slidesToShow ? props.slidesToShow : null;

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: slidesToShow ? slidesToShow : 4,
        slidesToScroll: 1,
        variableWidth: false,
        prevArrow: <SampleNextArrow/>,
        nextArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }

        ]
    }
    return (
        <div className="sliderProducts">
            <Slider {...settings}>
                {elements}
            </Slider>
        </div>
    )
}

export default SliderProducts;
