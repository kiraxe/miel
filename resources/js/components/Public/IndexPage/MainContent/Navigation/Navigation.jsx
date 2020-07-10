import React from "react";
import MenuItem from "./MenuItem/MenuItem";


const Navigation = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 navigation">
                <MenuItem categories={props.categories}/>
            </div>
        </div>
    )
}

export default Navigation;
