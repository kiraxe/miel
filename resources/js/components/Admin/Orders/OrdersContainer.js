import React, {Component} from 'react';
import Paginator from '../../common/Paginator/Paginator';
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getOrdersSelectors, getOrdersErrorSelector, getOrdersPaginatorSelector} from '../../../redux/orders-selectors'
import {getOrders, deleteOrder, showOrder} from "../../../redux/orders-reducer";
import OrderShow from "./OrderShow/OrderShow";
import Orders from "./Orders"


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

    onDelete = (e) => {
        let elementId = e.currentTarget.getAttribute('data-element');
        this.props.deleteOrder(elementId);
    }

    render() {

        let orders = !this.props.match.params.slug ? <Orders onDelete={this.onDelete} page={this.props.match.params.page} url={this.props.match.url} orders={this.props.orders}/>:
            this.props.match.params.slug === 'show' && this.props.match.params.id ?  <OrderShow error={this.props.error} id={this.props.match.params.id}  order={this.props.orders ? this.props.orders.filter(item => item.order_id == this.props.match.params.id ) : null}/> : null

        let paginator = this.props.paginator.total_page > 1 ? <Paginator onGetPage={this.onGetPageOrders} paginator={this.props.paginator}/> : null;

        return (
            <>
                {orders}
                {!this.props.match.params.slug && paginator}
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
    connect(mapStateToProps, {getOrders, deleteOrder, showOrder}),
    withRouter,
)(OrdersContainer);
