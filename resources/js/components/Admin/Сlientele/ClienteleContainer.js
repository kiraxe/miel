import React, { Component} from 'react';
import Clientele from "./Clientele";
import ClientEdit from "./ClientEdit/ClientEdit";
import ClientNew from "./ClientNew/ClientNew";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getClientele, addClient, editClient} from "../../../redux/clientele-reducer"


class ClienteleContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isFetching: false}
        this.timerFetching = null;
    }

    componentDidMount() {
        this.props.getClientele();
    }

    componentWillUnmount() {
        clearTimeout(this.timerFetching);
    }

    onAddSubmit = (formData) => {
        this.setState({isFetching: true});
        this.props.addClient(formData);
        setTimeout(() => {this.setState({isFetching: false})}, 2000);
    }

    onEditSubmit = (formData) => {
        this.setState({isFetching: true});
        this.props.editClient(formData);
        setTimeout(() => {this.setState({isFetching: false})}, 2000);
    }

    render() {

        let client = !this.props.match.params.slug ? <Clientele page={this.props.match.params.page} url={this.props.match.url} clientele={this.props.clientele}/> :
                     this.props.match.params.slug === 'edit' && this.props.match.params.id ?  <ClientEdit isFetching={this.state.isFetching} editClient={this.onEditSubmit} client={this.props.clientele ? this.props.clientele.filter(item => item.id == this.props.match.params.id ) : null}/> :
                     this.props.match.params.slug === 'add' ? <ClientNew isFetching={this.state.isFetching} addClient={this.onAddSubmit}/> : null;

        return (
            <>
                {client}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        clientele: state.clienteleAdmin.clientele,
        error: state.clienteleAdmin.error,
    }
};


export default compose(
    connect(mapStateToProps, {getClientele, addClient, editClient}),
    withRouter,
)(ClienteleContainer);
