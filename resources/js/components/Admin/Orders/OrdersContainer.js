import React, {Component} from 'react';
import Paginator from '../../common/Paginator/Paginator';
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getOrdersSelectors, getOrdersErrorSelector, getOrdersPaginatorSelector} from '../../../redux/orders-selectors'
import {getOrders, deleteOrder, showOrder, editOrder} from "../../../redux/orders-reducer";
import OrderShow from "./OrderShow/OrderShow";
import Orders from "./Orders"
import OrderEdit from "./OrderEdit/OrderEdit";
import Export from "./Export/Export";


class OrdersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getOrders(1);
    }

    onGetPageOrders = (e) => {
        let page = e.target.getAttribute('page');
        this.props.getOrders(page);
    }

    onEditSubmit = (formData) => {
        this.props.editOrder(formData);
    }

    onDelete = (e) => {
        let elementId = e.currentTarget.getAttribute('data-element');
        this.props.deleteOrder(elementId);
    }

    onExport = (e) => {
        //e.preventDefault();
    }

    render() {

        let orders = !this.props.match.params.slug ? <Orders onDelete={this.onDelete} page={this.props.match.params.page} url={this.props.match.url} orders={this.props.orders}/>:
            this.props.match.params.slug === 'show' && this.props.match.params.id ?  <OrderShow error={this.props.error} id={this.props.match.params.id}  order={this.props.orders ? this.props.orders.filter(item => item.order_id == this.props.match.params.id ) : null}/> :
            this.props.match.params.slug === 'edit' && this.props.match.params.id ?  <OrderEdit editOrder={this.onEditSubmit} error={this.props.error} id={this.props.match.params.id}  order={this.props.orders ? this.props.orders.filter(item => item.order_id == this.props.match.params.id ) : null}/> : null

        let paginator = this.props.paginator.total_page > 1 ? <Paginator onGetPage={this.onGetPageOrders} paginator={this.props.paginator}/> : null;

        return (
            <>
                {orders}
                {!this.props.match.params.slug && paginator}
                <Export onExport={this.onExport}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        orders: getOrdersSelectors(state),
        error: getOrdersErrorSelector(state),
        paginator: getOrdersPaginatorSelector(state)
    }
};


export default compose(
    connect(mapStateToProps, {getOrders, deleteOrder, showOrder, editOrder}),
    withRouter,
)(OrdersContainer);
