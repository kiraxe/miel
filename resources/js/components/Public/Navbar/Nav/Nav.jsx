import React from "react";
import Links from "./Links";

const Nav = (props) => {
    return (
        <ul>
            <Links dropMenuClose={props.dropMenuClose} categories={props.categories} leftDropMenu={props.leftDropMenu} leftDropMenuHandler={props.leftDropMenuHandler} />
        </ul>
    )
}

export default Nav;
