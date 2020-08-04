import React, {Component} from 'react';
import Paginator from '../../common/Paginator/Paginator';
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getMessagesSelectors, getMessagesErrorSelector, getMessagesPaginatorSelector} from '../../../redux/messageAdmin-selectros'
import {getMessages, deleteMessage, showMessage} from "../../../redux/messageAdmin-reducer";
import MessageShow from "./MessageShow/MessageShow";
import Messages from "./Messages"


class MessagesContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMessages(1);
    }

    onGetPageMessages = (e) => {
        let page = e.target.getAttribute('page');
        this.props.getMessages(page);
    }

    onDelete = (e) => {
        let elementId = e.currentTarget.getAttribute('data-element');
        this.props.deleteMessage(elementId);
    }

    render() {

        let messages = !this.props.match.params.slug ? <Messages onDelete={this.onDelete} page={this.props.match.params.page} url={this.props.match.url} messages={this.props.messages}/>:
            this.props.match.params.slug === 'show' && this.props.match.params.id ?  <MessageShow error={this.props.error} id={this.props.match.params.id} message={this.props.messages ? this.props.messages.filter(item => item.message_id == this.props.match.params.id ) : null}/> : null

        let paginator = this.props.paginator.total_page > 1 ? <Paginator onGetPage={this.onGetPageMessages} paginator={this.props.paginator}/> : null;

        return (
            <>
                {messages}
                {!this.props.match.params.slug && paginator}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        messages: getMessagesSelectors(state),
        error: getMessagesErrorSelector(state),
        paginator: getMessagesPaginatorSelector(state)
    }
};


export default compose(
    connect(mapStateToProps, {getMessages, deleteMessage, showMessage}),
    withRouter,
)(MessagesContainer);
