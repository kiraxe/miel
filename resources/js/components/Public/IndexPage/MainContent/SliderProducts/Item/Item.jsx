import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import loading from "../../../../../../assets/images/loading.svg";
import {getCurrentDate, replaceStr} from "../../../../../../utils/GetCurrentData";
import Info from "../../../../CatalogPage/Product/Info/Info";


const Item = (props) => {

    const [price, setPrice] = useState(props.itm.price);
    const [min, setMin] = useState(props.itm.min);
    const [statMin, setStatMin] = useState(props.itm.min);

    const [priceSecond, setPriceSecond] = useState(props.itm.price_second);
    const [minSecond, setMinSecond] = useState(props.itm.min_second);

    const [priceThird, setPriceThird] = useState(props.itm.price_third);
    const [minThird, setMinThird] = useState(props.itm.min_third);

    const [priceQuarterly, setPriceQuarterly] = useState(props.itm.price_quarterly);
    const [minQuarterly, setMinQuarterly] = useState(props.itm.min_quarterly);
    const [statMinQuarterly, setStatMinQuarterly] = useState(props.itm.min_quarterly);

    let from = replaceStr(props.settings.from, '-', '/');
    let to = replaceStr(props.settings.to, '-', '/');

    const [fromDate, setFromDate] = useState(new Date(from));
    const [toDate, setToDate] = useState(new Date(to));


    const [priceVariable, setPriceVariable] = useState(props.itm.price);

    const [currentDate, setCurrentDate] = useState(new Date(getCurrentDate()))

    const [total, setTotal] = useState(props.itm.price * props.itm.min);

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


    let link = props.itm.attributes.map(item => !item.attributes.parent_id ? item.attributes.link : "");


    return (
        <div className={'item'}>
            <div className="itemContainer">
            <NavLink className="productNavLink" to={`/shop/${link[0]}/${props.itm.product_id}`}><div className="images"><img src={props.itm.image} alt="prod" title="pen"/></div></NavLink>
                <div className="content">
                    <div className="title"><h2>{props.itm.name}</h2></div>
                    <div className="article"><p>Арт. {props.itm.article}</p></div>
                    <div className="text">
                        <p style={{height: '35px',display: "inline-block", overflow: 'hidden'}} >{ReactHtmlParser(props.itm.detail)}</p>
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
                        product_id: props.itm.product_id,
                        article: props.itm.article,
                        image:props.itm.image,
                        name: props.itm.name,
                        detail:props.itm.detail,
                        options: null,
                        price: priceVariable,
                        count: currentDate < fromDate || currentDate > toDate ? min : minQuarterly,
                        priceSecond:props.itm.price_second,
                        priceThird:props.itm.price_third,
                        priceQuarterly:props.itm.price_quarterly,
                        min:props.itm.min,
                        minSecond:props.itm.min_second,
                        minThird:props.itm.min_third,
                        minQuarterly:props.itm.min_quarterly,
                        total: total
                    })
                    }>Корзина {props.isFetching ? <img style={{width: '20px'}} src={loading}/> : null}</button> || <button onClick={props.popUpOpen}>Корзина</button> }
                </div>
            </div>
        </div>)
}

export default Item;
