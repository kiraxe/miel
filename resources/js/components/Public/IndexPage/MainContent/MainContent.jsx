import React from "react";
import Title from "./Title/Title";
import Navigation from "./Navigation/Navigation";
import Popular from "./Popular/Popular";
import Novelty from "./Novelty/Novelty";

const MainContent = (props) => {
    return (
        <div id="main-content">
            <div className="container-my">
                <Title/>
                <Navigation categories={props.categories}/>
                <Popular cart={props.cart} popUpOpen={props.popUpOpen} isFetching={props.isFetching} settings={props.settings} addCartHandler={props.addCartHandler} isLoggedIn={props.isLoggedIn} popular={props.popular} categories={props.categories} />
            </div>
            <Novelty cart={props.cart} popUpOpen={props.popUpOpen} isFetching={props.isFetching} settings={props.settings} addCartHandler={props.addCartHandler} isLoggedIn={props.isLoggedIn} novelty={props.novelty} categories={props.categories}/>
        </div>
    )
}

export default MainContent;
