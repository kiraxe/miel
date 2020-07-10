import React from 'react';
import ErrorsAlert from '../Errors/ErrorsAlert';
import {rus as languageRu} from './Language';
import loading from '../../assets/images/loading.svg';
const Login = (props) => {
    //HANDLE INPUT ERRORS
    const error = props.error;
    let userFeedback;

    if (error) {
        userFeedback = (<ErrorsAlert error={error} />)
    }

    return (
        <div id="login">
            <div id="loginAdmin">
                <div className="container">
                    <div className="row">
                        <div className="error col-md-12">
                            {userFeedback}
                        </div>
                        <div className="loginAdmin__title col-md-12">
                            <h1>{languageRu.login}</h1>
                        </div>
                        <div className="loginAdmin__form col-md-12">
                            <form onSubmit={props.onSubmit} >
                                <div className="form-group">
                                    <label htmlFor="emailInput">{languageRu.form.email}</label>
                                    <input onChange={props.handleChange} type="email" name="email" value={props.email} className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder={languageRu.form.email}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">{languageRu.form.password}</label>
                                    <input onChange={props.handleChange} type="password" name="password" value={props.password} className="form-control" id="password" placeholder={languageRu.form.password}/>
                                </div>
                                <button type="submit" className="btn btn-primary">{languageRu.form.login} {props.isFetching ? <img src={loading}/> : null}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;
