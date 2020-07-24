import React, {useState, useEffect} from "react";
import Item from "./Item/Item";
import preloader from '../../../../assets/images/preloader.svg';

const Catalog = (props) => {

    const [load, setLoad] = useState(false);


    useEffect(() => {
        !props.initialize ? setLoad(true) : setLoad(false);
    })

    let active = load ? 'active' : "";

    return (
        <div className="row catalog">
            <div className={`preloader ${active}`}><img src={preloader}/></div>
            <Item isLoggedIn={props.isLoggedIn} products={props.products}/>
        </div>
    )
}

export default Catalog;
