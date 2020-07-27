import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import ProductsContainer from "./Products/ProductsContainer";
import ClienteleContainer from "./Сlientele/ClienteleContainer";
import CategoryContainer from "./Category/CategoryContainer";
import SettingsContainer from "./Settings/SettingsContainer";
import OptionsContainer from "./Options/OptionsContainer";
import OrdersContainer from "./Orders/OrdersContainer";

const Admin = (props) => {
    return (
        <div id="admin">
            <Header/>
            <Sidebar currentUser={props.currentUser} logout={props.logout}/>
            <main id="adminMain" className="col-sm-9 offset-sm-3 col-lg-10 offset-lg-2">
                <div className="row">
                    <div className="col-lg-12">
                        {props.page == 'products' ? <ProductsContainer/> : null}
                        {props.page == 'categories' ? <CategoryContainer/> : null}
                        {props.page == 'clientele' ? <ClienteleContainer/> : null}
                        {props.page == 'options' ? <OptionsContainer/> : null}
                        {props.page == 'orders' ? <OrdersContainer/> : null}
                        {props.page == 'settings' ? <SettingsContainer/> : null}
                    </div>
                </div>
            </main>
        </div>
    )
};

export default Admin;
