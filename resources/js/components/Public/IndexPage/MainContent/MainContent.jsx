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
                <Popular popular={props.popular}/>
            </div>
            <Novelty novelty={props.novelty}/>
        </div>
    )
}

export default MainContent;
