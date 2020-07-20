import React from "react";
import Slider from "react-slick";
import {SampleNextArrow, SamplePrevArrow} from "./Arrows/Arrows";
import { NavLink} from 'react-router-dom';


const SliderProducts = (props) => {

    const element = (item, key) => {
        let link = item.attributes.map(item => item.attributes.parent_id ? item.attributes.link : "");
        return <NavLink className="productNavLink" key={key} to={`/${link[link.length - 1]}/${item.product_id}`}><div className="item">
            <div className="itemContainer">
                <div className="images"><img src={item.image} alt="prod" title="pen"/></div>
                <div className="content">
                    <div className="title"><h2>{item.name}</h2></div>
                    <div className="article"><p>{item.article}</p></div>
                    <div className="text">
                        <p>{item.detail}</p>
                    </div>
                </div>
                <div className="costPanel">
                    <div className="cost"><p>{item.price} ₽ / шт.</p></div>
                    <div className="count">
                        <div className="remove"><img src="images/minus.png"/></div>
                        <div className="number">50</div>
                        <div className="add"><img src="images/plus.png"/></div>
                    </div>
                </div>
                <div className="button">
                    <button>Корзина</button>
                </div>
            </div>
        </div>
        </NavLink>
    }

    let elements = props.popular ? props.popular.map((item, key) => element(item, key)) : props.novelty ? props.novelty.map((item, key) => element(item, key)): null;

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
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
