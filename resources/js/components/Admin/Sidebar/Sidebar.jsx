import React,  {Component, Fragment} from "react";
import Navbar from "./Navbar/Navbar";

const Sidebar = (props) => {
    return (
        <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
            <div className="profile-sidebar">
                <div className="profile-usertitle">
                    <div className="profile-usertitle-name">{props.currentUser}</div>
                    <div className="profile-usertitle-status"><span className="indicator label-success"></span>Online
                    </div>
                </div>
                <div className="clear"></div>
            </div>
            <div className="divider"></div>
            <Navbar
                logout={props.logout}
            />
        </div>
    )
}

export default Sidebar;
