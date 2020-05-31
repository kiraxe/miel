import React, { Component} from 'react';
import Clientele from "./Clientele";
import ClientEdit from "./ClientEdit/ClientEdit";
import ClientNew from "./ClientNew/ClientNew";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getClientele, addClient, editClient} from "../../../redux/clientele-reducer";
import {getClienteleSelectors, getErrorSelector} from "../../../redux/clientele-selectors";


class ClienteleContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getClientele();
    }

    componentWillUnmount() {
        clearTimeout(this.timerFetching);
    }

    onAddSubmit = (formData) => {
        this.props.addClient(formData);
    }

    onEditSubmit = (formData) => {
        this.props.editClient(formData);
    }

    render() {

        let client = !this.props.match.params.slug ? <Clientele page={this.props.match.params.page} url={this.props.match.url} clientele={this.props.clientele}/> :
                     this.props.match.params.slug === 'edit' && this.props.match.params.id ?  <ClientEdit error={this.props.error} editClient={this.onEditSubmit} client={this.props.clientele ? this.props.clientele.filter(item => item.id == this.props.match.params.id ) : null}/> :
                     this.props.match.params.slug === 'add' ? <ClientNew error={this.props.error}  addClient={this.onAddSubmit}/> : null;

        return (
            <>
                {client}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        clientele: getClienteleSelectors(state),
        error: getErrorSelector(state),
    }
};


export default compose(
    connect(mapStateToProps, {getClientele, addClient, editClient}),
    withRouter,
)(ClienteleContainer);
