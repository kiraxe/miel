import React, { Component} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {logout} from "../../redux/auth-reducer";
import Admin from "./Admin";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class AdminContainer extends Component {

    render() {
        return (
            <Admin
                currentUser={this.props.currentUser}
                logout={this.props.logout}
                page={this.props.match.params.page}
            />

        )
    }
}

let mapStateToProps = (state) => {
    return {
        adminPage: state.adminPage,
        currentUser: state.auth.name,
    }
};

export default compose(
    connect(mapStateToProps, {logout}),
    withAuthRedirect
)(AdminContainer);


