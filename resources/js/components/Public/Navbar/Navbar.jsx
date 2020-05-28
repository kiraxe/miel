import React, { Component} from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Navbar extends Component {

    render() {

        const logoutBtnClicked = () => {
            //Perform Logout and then reach the publicpage anyway (success, fail)
            //this.props.logout();
        };

        //SHOW LINKS based on userLogin status
        //let authLinks;

        /*if (!this.props.initialized){//NOT LOGGED IN
          authLinks = (
            <>
              <NavLink className="nav-item nav-link" to="/register">Регистрация</NavLink>
              <NavLink className="nav-item nav-link" to="/login">Вход</NavLink>
            </>
          )
        } else {//LOGGED IN
          authLinks = (
            <>
              <NavLink className="nav-item nav-link" to="/account">Личный кабинет</NavLink>
              <button className="ml-5 btn btn-danger" onClick={logoutBtnClicked}>Выход</button>
            </>
          )
        }*/

        return (
          <nav role="navigation">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div className="navbar-nav">

                 </div>
              </div>
          </nav>

        );
    }
}

//passes match, history, location to Component
export default withRouter(Navbar);
