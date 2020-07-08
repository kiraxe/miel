import React, { Component} from 'react';
import Options from "./Options";
import OptionEdit from "./OptionEdit/OptionEdit";
import OptionNew from "./OptionNew/OptionNew";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getOptions, addOption, editOption, deleteOption} from "../../../redux/option-reducer";
import {getOptionsSelectors, getErrorSelector, getPaginatorSelector} from "../../../redux/option-selectors";
import Paginator from "../../common/Paginator/Paginator";



class OptionsContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getOptions();
    }

    componentWillUnmount() {
        clearTimeout(this.timerFetching);
    }

    onAddSubmit = (formData) => {
        this.props.addOption(formData);
    }

    onEditSubmit = (formData) => {
        this.props.editOption(formData);
    }

    onGetPageOptions = (e) => {
        let page = e.target.getAttribute('page');
        this.props.getOptions(page);
    }

    onDelete = (e) => {
        let elementId = e.currentTarget.getAttribute('data-element');
        this.props.deleteOption(elementId);
    }

    render() {

        let option = !this.props.match.params.slug ? <Options onDelete={this.onDelete} page={this.props.match.params.page} url={this.props.match.url} options={this.props.options}/> :
            this.props.match.params.slug === 'edit' && this.props.match.params.id ?  <OptionEdit error={this.props.error} editOption={this.onEditSubmit} option={this.props.options ? this.props.options.filter(item => item.option_id == this.props.match.params.id ) : null}/> :
                this.props.match.params.slug === 'add' ? <OptionNew error={this.props.error}  addOption={this.onAddSubmit}/> : null;

        let paginator = this.props.paginator.total_page > 1 ? <Paginator onGetPage={this.onGetPageOptions} paginator={this.props.paginator}/> : null;

        return (
            <>
                {option}
                {!this.props.match.params.slug && paginator}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        options: getOptionsSelectors(state),
        paginator: getPaginatorSelector(state),
        error: getErrorSelector(state),
    }
};


export default compose(
    connect(mapStateToProps, {getOptions, addOption, editOption, deleteOption}),
    withRouter,
)(OptionsContainer);
