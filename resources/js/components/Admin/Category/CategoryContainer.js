import React, { Component} from 'react';
import Categories from "./Categories";
import CategoryEdit from "./CategoryEdit/CategoryEdit";
import CategoryNew from "./CategoryNew/CategoryNew";
import Paginator from '../../common/Paginator/Paginator';
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getCategory, addCategory, editCategory, deleteCategory} from "../../../redux/category-reducer"
import {getCategorySelectors, getErrorSelector, getPaginatorSelector, getSelectSelector} from "../../../redux/category-selectors";



class CategoryContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCategory(1);
    }

    onAddSubmit = (formData) => {
        this.props.addCategory(formData);
    }

    onEditSubmit = (formData) => {

        let action = false;
        let page = this.props.paginator.current_page;

        this.props.categories.some(item => item.category_id === formData.category_id ? action = item.attributes.name !== formData.name: null);

        this.props.editCategory(formData, action, page);
    }

    onGetPageCategory = (e) => {
        let page = e.target.getAttribute('page');
        this.props.getCategory(page);
    }

    onDelete = (e) => {
        let elementId = e.currentTarget.getAttribute('data-element');
        this.props.deleteCategory(elementId);
    }

    render() {

        let categories = !this.props.match.params.slug ? <Categories onDelete={this.onDelete} page={this.props.match.params.page} url={this.props.match.url} categories={this.props.categories}/>:
                       this.props.match.params.slug === 'edit' && this.props.match.params.id ?  <CategoryEdit error={this.props.error} id={this.props.match.params.id} select={this.props.select} editCategory={this.onEditSubmit} category={this.props.categories ? this.props.categories.filter(item => item.category_id == this.props.match.params.id ) : null}/> :
                       this.props.match.params.slug === 'add' ? <CategoryNew id={this.props.match.params.id} error={this.props.error} select={this.props.select} addCategory={this.onAddSubmit}/> : null;

        let paginator = this.props.paginator.total_page > 1 ? <Paginator onGetPage={this.onGetPageCategory} paginator={this.props.paginator}/> : null;

        return (
            <>
                {categories}
                {!this.props.match.params.slug && paginator}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        categories: getCategorySelectors(state),
        paginator: getPaginatorSelector(state),
        select: getSelectSelector(state),
        error: getErrorSelector(state),
    }
};


export default compose(
    connect(mapStateToProps, {getCategory, addCategory, editCategory, deleteCategory}),
    withRouter,
)(CategoryContainer);
