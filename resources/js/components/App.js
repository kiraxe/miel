//React, React-> Component, ReactDOM
import React, { Component} from 'react';
//React Router DOM
import { Route, Switch } from 'react-router-dom';
//Components
import LoginContainer from "./Login/LoginContainer";
import RegisterPage from './Register/RegisterPage';
import Preloader from "./common/Preloader/Preloader";
import {withSuspense} from "../hoc/withSuspense";

/**********************/
/* MAIN APP COMPONENT */
/**********************/

const AdminContainer = React.lazy(() => import('./Admin/AdminContainer'));

const PublicContainer = React.lazy(() => import('./Public/PublicContainer'));

export default class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render(){

        if (!this.props.app.initialized) {
            return <Preloader/>
        }

        return(
              <>
                  <Switch>

                      <Route exact path="/" render={withSuspense(PublicContainer)}/>

                      <Route path="/account/:page?/" render={withSuspense(PublicContainer)}/>

                      <Route exact path="/login" render={() => (<LoginContainer />)}/>

                      <Route path='/admin/:page?/:slug?/:id?' render={withSuspense(AdminContainer)}/>

                  </Switch>
              </>
        )

    }

}

