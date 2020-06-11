import React, { Component} from 'react';
import Clientele from "./Clientele";
import ClientEdit from "./ClientEdit/ClientEdit";
import ClientNew from "./ClientNew/ClientNew";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getClientele, addClient, editClient, deleteClient} from "../../../redux/clientele-reducer";
import {getClienteleSelectors, getErrorSelector, getPaginatorSelector} from "../../../redux/clientele-selectors";
import Paginator from "../../common/Paginator/Paginator";


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

    onGetPageClientele = (e) => {
        let page = e.target.getAttribute('page');
        this.props.getClientele(page);
    }

    onDelete = (e) => {
        let elementId = e.currentTarget.getAttribute('data-element');
        this.props.deleteClient(elementId);
    }

    render() {

        let client = !this.props.match.params.slug ? <Clientele onDelete={this.onDelete} page={this.props.match.params.page} url={this.props.match.url} clientele={this.props.clientele}/> :
                     this.props.match.params.slug === 'edit' && this.props.match.params.id ?  <ClientEdit error={this.props.error} editClient={this.onEditSubmit} client={this.props.clientele ? this.props.clientele.filter(item => item.id == this.props.match.params.id ) : null}/> :
                     this.props.match.params.slug === 'add' ? <ClientNew error={this.props.error}  addClient={this.onAddSubmit}/> : null;

        let paginator = this.props.paginator.total_page > 1 ? <Paginator onGetPage={this.onGetPageClientele} paginator={this.props.paginator}/> : null;

        return (
            <>
                {client}
                {!this.props.match.params.slug && paginator}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        clientele: getClienteleSelectors(state),
        paginator: getPaginatorSelector(state),
        error: getErrorSelector(state),
    }
};


export default compose(
    connect(mapStateToProps, {getClientele, addClient, editClient, deleteClient}),
    withRouter,
)(ClienteleContainer);
