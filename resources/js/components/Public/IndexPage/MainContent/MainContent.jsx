import React from "react";
import Title from "./Title/Title";
import Navigation from "./Navigation/Navigation";
import Popular from "./Popular/Popular";


const MainContent = (props) => {
    return (
        <div id="main-content">
            <div className="container-my">
                <Title/>
                <Navigation/>
                <Popular/>
            </div>
        </div>
    )
}

export default MainContent;
