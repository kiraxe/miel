import React from 'react';
import Navbar from "../../Navbar/Navbar";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import MainContent from "../MainContent/MainContent";

const Main = (props) => {
    return (
        <main id="public">
            <Navbar/>
            <div id="wrapper">
                <Header/>
                <MainContent/>
                <Footer/>
            </div>
        </main>
    )
}


export default Main;
