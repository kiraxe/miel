import React, {Component} from "react";
import {connect} from 'react-redux';
import Login from "./Login";
import {login} from "../../redux/auth-reducer";
import {getHandler} from "../../redux/login-reducer";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {getErrorSelector, getIsLoggedInSelector} from "../../redux/app-selectors";
import {getEmailSelector, getPasswordSelector, getNewHandlerChange} from "../../redux/login-selectors";

class LoginContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isFetching: false}
        this.timerFetching = null;
    }

    componentWillUnmount() {
        clearTimeout(this.timerFetching);
    }

    render() {

        const isFetching = this.state.isFetching;

        const handleChange = (e) => {
            this.props.getHandler({[e.target.name] : e.target.value });
        };

        const onSubmit = (e) => {
            e.preventDefault();
            this.setState({isFetching: true});
            this.props.login(this.props.email, this.props.password);
            this.timerFetching = setTimeout(() => {this.setState({isFetching: false})}, 2000);
        };

        if (this.props.isLoggedIn) {
            return <Redirect to={"/admin"}/>
        }

        return (
            <Login
                email={this.props.email}
                password={this.props.password}
                handleChange={handleChange}
                onSubmit={onSubmit}
                error={this.props.error}
                isFetching={this.state.isFetching}
            />
        )
    }
}

let mapStateForProps = (state) => {
  return {
      email: getEmailSelector(state),
      password: getPasswordSelector(state),
      error: getErrorSelector(state),
      newHandlerChange: getNewHandlerChange(state),
      isLoggedIn: getIsLoggedInSelector(state)
  }
};

export default compose(
    connect(mapStateForProps, {login, getHandler})
)(LoginContainer);

