import React, { Component} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {deleteProduct} from "../../../redux/products-reducer";
import {deleteClient} from "../../../redux/clientele-reducer";
import ButtonPanel from "./ButtonPanel";


class ButtonPanelContainer extends React.Component {

    render() {

        const onDelete = (e) => {
            let elementId = e.currentTarget.getAttribute('data-element');
            let elementPage = e.currentTarget.getAttribute('data-page');
            if (elementPage == "products") {
                this.props.deleteProduct(elementId);
            } else if (elementPage == "clientele") {
                this.props.deleteClient(elementId);
            }
        }


        return <ButtonPanel
            buttons={this.props.buttons}
            elementId={this.props.elementId}
            url={this.props.url}
            delete={onDelete}
            page={this.props.page}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.productsAdmin,
        clientele: state.clienteleAdmin,
    }
};

export default compose(
    connect(mapStateToProps, {deleteProduct, deleteClient}),
)(ButtonPanelContainer);
