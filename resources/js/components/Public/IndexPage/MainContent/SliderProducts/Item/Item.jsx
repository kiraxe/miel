import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import loading from "../../../../../../assets/images/loading.svg";
import {getCurrentDate, replaceStr} from "../../../../../../utils/GetCurrentData";


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

    const [className, setClassName] = useState('');

    useEffect(() => {

        setPrice(props.itm.price);
        setMin(props.itm.min);
        setStatMin(props.itm.min);
        setPriceSecond(props.itm.price_second);
        setMinSecond(props.itm.min_second);
        setPriceThird(props.itm.price_third);
        setMinThird(props.itm.min_third);
        setPriceQuarterly(props.itm.price_quarterly);
        setMinQuarterly(props.itm.min_quarterly);
        setStatMinQuarterly(props.itm.min_quarterly);

        let from = replaceStr(props.settings.from, '-', '/');
        let to = replaceStr(props.settings.to, '-', '/');

        setFromDate(new Date(from));
        setToDate(new Date(to));

        setPriceVariable(props.itm.price);
        setCurrentDate(new Date(getCurrentDate()));

        setTotal(props.itm.price * props.itm.min)


    }, [props.itm.price])

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

        if (props.cart) {
            for (const element of props.cart) {
                if (element.product_id === props.itm.product_id) {
                    setClassName("active");
                    break;
                }
            }
        }

    })

    let onButtonActive = (e) => {
        //e.target.setAttribute('class', 'active');
        //setClassName('active');
    }


    let link = props.itm.attributes.map(item => !item.attributes.parent_id ? item.attributes.link : "");

    const handleChange = (e) => {
        if (currentDate < fromDate || currentDate > toDate ) {
            setMin(Number(e.target.value));
        } else {
            setMinQuarterly(Number(e.target.value));
        }
    }

    const handlerBlur = (e) => {
        if (currentDate < fromDate || currentDate > toDate ) {
            if (e.target.value < statMin && min < statMin) {
                setMin(Number(statMin));
            }
        } else {
            if (minQuarterly < statMinQuarterly && e.target.value < statMinQuarterly) {
                setMinQuarterly(Number(statMinQuarterly));
            }
        }
    }

    const handlerKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.target.blur();
            if (currentDate < fromDate || currentDate > toDate ) {
                if (e.target.value < statMin && min < statMin) {
                    setMin(Number(statMin));
                }
            } else {
                if (minQuarterly < statMinQuarterly && e.target.value < statMinQuarterly) {
                    setMinQuarterly(Number(statMinQuarterly));
                }
            }
        }
    }

    return (
        <div className={'item'}>
            <div className="itemContainer">
            <NavLink className="productNavLink" to={`/shop/${link[0]}/${props.itm.product_id}`}><div className="images"><img src={props.itm.image} alt="prod" title="pen"/></div></NavLink>
                <div className="content">
                    <div className="title"><h2>{props.itm.name}</h2></div>
                    <div className="article"><p>Арт. {props.itm.article}</p></div>
                    <div className="text">
                        <p style={{height: '53px',display: "inline-block", overflow: 'hidden'}} >{ReactHtmlParser(props.itm.detail_min)}</p>
                    </div>
                </div>
                <div className="costPanel">
                    <div className="cost"><p>{parseFloat(priceVariable)} ₽ / шт.</p></div>
                    <div className="count">
                        <div className="remove"><img onClick={removeCountHandler} src="/images/minus.png"/></div>
                        <div className="number"><input onBlur={handlerBlur} onKeyDown={handlerKeyDown} onChange={handleChange} type="text" maxLength="5" value={currentDate < fromDate || currentDate > toDate ? min : minQuarterly}/></div>
                        <div className="add"><img onClick={addCountHandler} src="/images/plus.png"/></div>
                    </div>
                </div>
                <div className="button">
                    {props.isLoggedIn && <button className={className} style={{display: 'flex'}} onClick={(e) => {props.addCartHandler({
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
                    });
                    onButtonActive(e);
                    }
                    }>Корзина {props.isFetching ? <img style={{width: '20px'}} src={loading}/> : null}</button> || <button className={className} onClick={props.popUpOpen}>Корзина</button> }
                </div>
            </div>
        </div>)
}

export default Item;
