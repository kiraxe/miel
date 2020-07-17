import React, {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getSettingsSelectors} from "../../../redux/Public/public-selectors";
import ManagerInfo from "./ManagerInfo/ManagerInfo";
import Navigation from "./Navigation/Navigation";

class  AccountContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
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
                                <div className="row">
                                    <div className="title"><h1>Данные компании</h1></div>
                                    <div className="text">
                                        <p>Осноной текст для текстовых блоков Осноной текст для текстовых блоков Осноной
                                            текст для текстовых блоков Осноной текст для текстовых Осноной текст для
                                            текстовых блоков Осноной текст для текстовых блоков Осноной текст для
                                            текстовых блоков.</p>
                                        <p>Осноной текст для текстовых блоков Осноной текст для текстовых блоков Осноной
                                            текст для текстовых блоков Осноной текст для текстовых Осноной текст для
                                            текстовых блоков Осноной текст для текстовых блоков Осноной текст для
                                            текстовых блоков.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <form name="accountForm">
                                        <div className="accountForm">
                                            <div className="section">
                                                <p><input type="text" placeholder="Логин" name="login"/></p>
                                                <p>
                                                    <input className="password" type="password" placeholder="Пароль"
                                                           name="password"/>
                                                        <label className="passwordAction"></label>
                                                </p>
                                                <p><input type="text" placeholder="Ф.И.О контактного лица" name="name"/>
                                                </p>
                                                <p><input type="text" placeholder="Телефон контактного лица"
                                                          name="phone"/></p>
                                                <p><input type="text" placeholder="E-mail контактного лица"
                                                          name="email"/></p>
                                                <p><input type="text" placeholder="Адрес для курьерской доставки"
                                                          name="address"/></p>
                                                <p><input type="text" placeholder="Почтовый адрес для документов"
                                                          name="addressP"/></p>
                                            </div>
                                            <div className="section">
                                                <p><input type="text" placeholder="Название компании" name="company"/>
                                                </p>
                                                <p><input type="text" placeholder="ИНН" name="inn"/></p>
                                                <p><input type="text" placeholder="КПП" name="kpp"/></p>
                                                <p><input type="text" placeholder="Р/С" name="pc"/></p>
                                                <p><input type="text" placeholder="БИК" name="bik"/></p>
                                                <p><input type="text" placeholder="К/С" name="ks"/></p>
                                            </div>
                                        </div>
                                        <div className="button">
                                            <input type="submit" value="Сохранить" name="submit"/>
                                            <p>Нажимая «Сохранить», я соглашаюсь с <span>офертой</span></p>
                                        </div>
                                    </form>
                                </div>
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
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps)
)(AccountContainer);
