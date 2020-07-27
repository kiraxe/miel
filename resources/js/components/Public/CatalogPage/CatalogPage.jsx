import React, {useState, useEffect} from "react";
import Title from "./Title/Title";
import Navigation from "./Navigation/Navigation";
import CatalogTitle from "./CatalogTitle/CatalogTitle";
import Catalog from "./Catalog/Catalog";
import LoadMore from "./LoadMore/LoadMore";
import Separator from "./Separator";
import SliderProducts from "../IndexPage/MainContent/SliderProducts/SliderProducts";
import Item from "../IndexPage/MainContent/SliderProducts/Item/Item";

const CatalogPage = (props) => {
    return (
        <div id="main-content">
            <div className="container-my">
                <Title/>
            </div>
            <div className="container-my">
                <div className="row">
                    <div className="col-xl-3 left">
                        <div className="container-my">
                            <div className="row">
                                <Navigation onPageHandler={props.onPageHandler} dropLeftNavigationRun={props.dropLeftNavigationRun} leftDropMenuHandler={props.leftDropMenuHandler} categories={props.categories}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-xl-9 center">
                        <div className="container-my">
                            <CatalogTitle/>
                            <Catalog isFetching={props.isFetching} settings={props.settings} addCartHandler={props.addCartHandler} isLoggedIn={props.isLoggedIn} initialize={props.initialize} products={props.products}/>
                            {props.products.length !== props.totalProduct && <LoadMore onLoadHandler={props.onLoadHandler}/> || null}
                            <Separator/>
                            <div className="row">
                                <div className="col-md-12 novelty">
                                    <div className="title"><h1>Новинки</h1></div>
                                    <div className="text"><p>Какое-то небольшое описание, не более чем на две строки</p>
                                    </div>
                                    <SliderProducts isFetching={props.isFetching} settings={props.settings} addCartHandler={props.addCartHandler} isLoggedIn={props.isLoggedIn} novelty={props.novelty} slidesToShow={3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogPage;
