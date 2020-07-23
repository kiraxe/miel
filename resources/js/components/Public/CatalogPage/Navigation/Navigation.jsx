import React from "react";
import Links from "./Links";


const Navigation = (props) => {
    return (
        <nav>
            <ul className="leftNavigation">
                <Links onPageHandler={props.onPageHandler} dropLeftNavigationRun={props.dropLeftNavigationRun} leftDropMenuHandler={props.leftDropMenuHandler} categories={props.categories} />
            </ul>
        </nav>
    )
}

export default Navigation;
