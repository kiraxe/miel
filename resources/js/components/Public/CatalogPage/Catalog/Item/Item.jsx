import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import loading from "../../../../../assets/images/loading.svg";
import {getCurrentDate, replaceStr} from "../../../../../utils/GetCurrentData";


const Item = (props) => {

    const [price, setPrice] = useState(props.item.price);
    const [min, setMin] = useState(props.item.min);
    const [statMin, setStatMin] = useState(props.item.min);

    const [priceSecond, setPriceSecond] = useState(props.item.price_second);
    const [minSecond, setMinSecond] = useState(props.item.min_second);

    const [priceThird, setPriceThird] = useState(props.item.price_third);
    const [minThird, setMinThird] = useState(props.item.min_third);

    const [priceQuarterly, setPriceQuarterly] = useState(props.item.price_quarterly);
    const [minQuarterly, setMinQuarterly] = useState(props.item.min_quarterly);
    const [statMinQuarterly, setStatMinQuarterly] = useState(props.item.min_quarterly);

    let from = replaceStr(props.settings.from, '-', '/');
    let to = replaceStr(props.settings.to, '-', '/');

    const [fromDate, setFromDate] = useState(new Date(from));
    const [toDate, setToDate] = useState(new Date(to));

    const [priceVariable, setPriceVariable] = useState(props.item.price);

    const [currentDate, setCurrentDate] = useState(new Date(getCurrentDate()))

    const [total, setTotal] = useState(props.item.price * props.item.min);

    const addCountHandler = () => {
        if (currentDate < fromDate || currentDate > toDate ) {
            setMin(min + 1);
        } else {
            setMinQuarterly(minQuarterly + 1);
        }
    }


    const removeCountHandler = () => {
        if (currentDate < fromDate || currentDate > toDate ) {
            if (min <= statMin) {
                setMin(statMin);
            } else {
                setMin(min - 1);
            }
        } else {
            if (minQuarterly <= statMinQuarterly) {
                setMinQuarterly(statMinQuarterly);
            } else {
                setMinQuarterly(minQuarterly - 1);
            }
        }
    }

    useEffect(() => {
        if (currentDate < fromDate || currentDate > toDate ) {
            if (min >= minSecond && min < minThird) {
                setPriceVariable(priceSecond);
                setTotal(min * priceSecond);
            } else if (min >= minThird) {
                setPriceVariable(priceThird);
                setTotal(min * priceThird);
            } else {
                setPriceVariable(price);
                setTotal(min * price);
            }
        } else {
            setPriceVariable(priceQuarterly);
            setTotal(minQuarterly * priceQuarterly);
        }
    })


    let link = props.item.attributes.map(item => !item.attributes.parent_id ? item.attributes.link : "");

    return (
        <div className="item col-sm-6 col-md-4">
            <div className="itemContainer">
                <NavLink className="productNavLink" to={`/shop/${link[0]}/${props.item.product_id}`}><div className="images"><img src={props.item.image} alt="prod" title="pen"/></div></NavLink>
                <div className="content">
                    <div className="title"><h2>{props.item.name}</h2></div>
                    <div className="article"><p>Арт. {props.item.article}</p></div>
                    <div className="text">
                        <p>{ReactHtmlParser(props.item.detail)}</p>
                    </div>
                </div>
                <div className="costPanel">
                    <div className="cost"><p>{priceVariable} ₽ / шт.</p></div>
                    <div className="count">
                        <div className="remove"><img onClick={removeCountHandler} src="/images/minus.png"/></div>
                        <div className="number">{currentDate < fromDate || currentDate > toDate ? min : minQuarterly}</div>
                        <div className="add"><img onClick={addCountHandler} src="/images/plus.png"/></div>
                    </div>
                </div>
                <div className="button">
                    {props.isLoggedIn && <button style={{display: 'flex'}} onClick={() => props.addCartHandler({
                        product_id: props.item.product_id,
                        article: props.item.article,
                        image:props.item.image,
                        name: props.item.name,
                        options: null,
                        price: priceVariable,
                        count: currentDate < fromDate || currentDate > toDate ? min : minQuarterly,
                        priceSecond:props.item.price_second,
                        priceThird:props.item.price_third,
                        priceQuarterly:props.item.price_quarterly,
                        min:props.item.min,
                        minSecond:props.item.min_second,
                        minThird:props.item.min_third,
                        minQuarterly:props.item.min_quarterly,
                        total: total
                    })
                    }>Корзина {props.isFetching ? <img style={{width: '20px'}} src={loading}/> : null}</button> || <button onClick={props.popUpOpen}>Корзина</button> }
                </div>
            </div>
        </div>
    )
}

export default Item;
