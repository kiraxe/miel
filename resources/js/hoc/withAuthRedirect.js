import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    permission: state.auth.permission
});

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {

        render() {
            if (!this.props.isLoggedIn && this.props.permission !== "Admin") return <Redirect to='/login'/>;
            return <Component {...this.props}/>
        }

    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
