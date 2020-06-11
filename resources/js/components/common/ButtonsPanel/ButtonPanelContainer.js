import React, { Component} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import ButtonPanel from "./ButtonPanel";


class ButtonPanelContainer extends React.Component {

    render() {
        return <ButtonPanel
            buttons={this.props.buttons}
            elementId={this.props.elementId}
            url={this.props.url}
            delete={this.props.onDelete}
            page={this.props.page}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.productsAdmin,
        clientele: state.clienteleAdmin,
        category:state.categoriesAdmin,
    }
};

export default compose(
    connect(mapStateToProps),
)(ButtonPanelContainer);
