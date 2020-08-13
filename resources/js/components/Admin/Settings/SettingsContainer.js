import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getSettings, editSettings} from "../../../redux/settings-reducer";
import {withRouter} from "react-router-dom";
import SettingsForm from "../Settings/SettingsForm/SettingsForm";
import {getErrorSelector, getSettingsSelectors} from "../../../redux/settings-selectors";

class SettingsContainer extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSettings();
    }

    onEditSubmit = (formData) => {
        console.log(formData);
        this.props.editSettings(formData);
    }

    render() {

        let settings = <SettingsForm error={this.props.error} editSettings={this.onEditSubmit} settings={this.props.settings}/>
        return (
            <>
                {settings}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        settings: getSettingsSelectors(state),
        error: getErrorSelector(state),
    }
};

export default compose(
    connect(mapStateToProps, {getSettings, editSettings}),
    withRouter,
)(SettingsContainer);


