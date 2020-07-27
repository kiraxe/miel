import React, {useState, useEffect} from "react";
import Item from "./Item/Item";
import preloader from '../../../../assets/images/preloader.svg';
import SliderProducts from "../../IndexPage/MainContent/SliderProducts/SliderProducts";

const Catalog = (props) => {

    const [load, setLoad] = useState(false);


    useEffect(() => {
        !props.initialize ? setLoad(true) : setLoad(false);
    })

    let active = load ? 'active' : "";

    let products = props.products ? props.products.map((item, key) => <Item popUpOpen={props.popUpOpen} key={key} isFetching={props.isFetching} settings={props.settings} addCartHandler={props.addCartHandler} isLoggedIn={props.isLoggedIn} item={item}/>) : null;

    return (
        <div className="row catalog">
            <div className={`preloader ${active}`}><img src={preloader}/></div>
            {products}
        </div>
    )
}

export default Catalog;
