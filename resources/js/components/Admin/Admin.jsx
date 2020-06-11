import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import ProductsContainer from "./Products/ProductsContainer";
import ClienteleContainer from "./Сlientele/ClienteleContainer";
import CategoryContainer from "./Category/CategoryContainer";

const Admin = (props) => {
    return (
        <>
            <Header/>
            <Sidebar currentUser={props.currentUser} logout={props.logout}/>
            <main id="adminMain" className="col-sm-9 offset-sm-3 col-lg-10 offset-lg-2">
                <div className="row">
                    <div className="col-lg-12">
                        {props.page == 'products' ? <ProductsContainer/> : null}
                        {props.page == 'categories' ? <CategoryContainer/> : null}
                        {props.page == 'clientele' ? <ClienteleContainer/> : null}
                    </div>
                </div>
            </main>
        </>
    )
};

export default Admin;
