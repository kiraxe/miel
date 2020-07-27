import React, {useState, useEffect} from "react";
import Navigation from "../Navigation/Navigation";
import Title from "./Title/Title";
import Image from "./Image/Image";
import Info from "./Info/Info";

const Product = (props) => {

    let title = props.product ? props.product.name.split(' ') : null;
    let titleSecond = title ? title.shift() : null;

    return (
        <>
        {title &&
        <div id="main-content">
            <div className="container-my hidden-title">
                <Title title={title} titleSecond={titleSecond}/>
            </div>
            <div className="container-my">
                <div className="row">
                    <div className="col-lg-3 col-xl-3 left">
                        <div className="container-my">
                            <div className="row">
                                <Navigation onPageHandler={props.onPageHandler} dropLeftNavigationRun={props.dropLeftNavigationRun} leftDropMenuHandler={props.leftDropMenuHandler} categories={props.categories}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-xl-9 center">
                        <div className="container-my">
                            <div className="row productCard">
                                <Image image={props.product.image}/>
                                <div className="col-md-6 col-lg-7 productCardContent">
                                    <Info
                                        title={title}
                                        titleSecond={titleSecond}
                                        product_id={props.product.product_id}
                                        image={props.product.image}
                                        article={props.product.article}
                                        detail={props.product.detail}
                                        property={props.product.property}
                                        options={props.product.options}
                                        price={props.product.price}
                                        priceSecond={props.product.price_second}
                                        priceThird={props.product.price_third}
                                        priceQuarterly={props.product.price_quarterly}
                                        min={props.product.min}
                                        minSecond={props.product.min_second}
                                        minThird={props.product.min_third}
                                        minQuarterly={props.product.min_quarterly}
                                        fromQuarterlyDate={props.fromQuarterlyDate}
                                        toQuarterlyDate={props.toQuarterlyDate}
                                        isLoggedIn={props.isLoggedIn}
                                        addCartHandler={props.addCartHandler}
                                        isFetching={props.isFetching}
                                        popUpOpen={props.popUpOpen}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> || null}
        </>
    )
}

export default Product
