import React, { Component} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Public from "./Public";

class PublicContainer extends Component {

    render() {
        return (
            <>
                <Public/>
            </>
            )
    }
}

let mapStateToProps = (state) => {
    return {

    }
};

export default compose(
    connect(mapStateToProps)
)(PublicContainer);
