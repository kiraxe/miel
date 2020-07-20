import React, {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getSettingsSelectors} from "../../../redux/Public/public-selectors";
import {getIdSelector} from "../../../redux/auth-selectors";
import ManagerInfo from "./ManagerInfo/ManagerInfo";
import Navigation from "./Navigation/Navigation";
import {getClientSelectors, getErrorSelector} from "../../../redux/Public/account-selectors";
import {getAccount , editAccount} from "../../../redux/Public/account-reducer";
import AccountForm from "./AccountForm/AccountForm";

class  AccountContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAccount(this.props.auth_client_id);
    }


    onEditSubmit = (formData) => {
        this.props.editAccount(formData);
    }

    render() {

        return (
            <div id="main-content">
                <div className="container-my">
                    <div className="row">
                        <div className="col-md-12 title-container">
                            <div className="title"><h1>Личный <span>кабинет</span></h1></div>
                        </div>
                    </div>
                </div>
                <div className="container-my">
                    <div className="row">
                        <div className="col-md-4 col-lg-3 col-xl-3 left">
                            <div className="container-my">
                                <Navigation/>
                                <ManagerInfo settings={this.props.settings}/>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-9 col-xl-9 center">
                            <div className="container-my">
                                {this.props.match.params.page === 'company_data' &&
                                <div className="row">
                                    <div className="title"><h1>Данные компании</h1></div>
                                    <div className="text">
                                        <p>Осноной текст для текстовых блоков Осноной текст для текстовых блоков Осноной
                                            текст для текстовых блоков Осноной текст для текстовых Осноной текст для
                                            текстовых блоков Осноной текст для текстовых блоков Осноной текст для
                                            текстовых блоков.</p>
                                    </div>
                                </div>}
                                {this.props.match.params.page === 'company_data' && <div className="row">
                                    <AccountForm error={this.props.error} client={this.props.client} editAccount={this.onEditSubmit} />
                                </div> || <div className="row">Страница находится в разработке</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        settings: getSettingsSelectors(state),
        client: getClientSelectors(state),
        auth_client_id: getIdSelector(state),
        error: getErrorSelector(state)
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {getAccount , editAccount})
)(AccountContainer);
