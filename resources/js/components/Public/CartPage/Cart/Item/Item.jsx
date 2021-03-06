import React, {useState, useEffect} from "react";
import ReactHtmlParser from "react-html-parser";
import {getCurrentDate, replaceStr} from "../../../../../utils/GetCurrentData";

const Item = (props) => {

    const [price, setPrice] = useState(props.item.price);
    const [min, setMin] = useState(props.item.count);
    const [statMin, setStatMin] = useState(props.item.min);

    const [priceSecond, setPriceSecond] = useState(props.item.priceSecond);
    const [minSecond, setMinSecond] = useState(props.item.minSecond);

    const [priceThird, setPriceThird] = useState(props.item.priceThird);
    const [minThird, setMinThird] = useState(props.item.minThird);

    const [priceQuarterly, setPriceQuarterly] = useState(props.item.priceQuarterly);
    const [minQuarterly, setMinQuarterly] = useState(props.item.count);
    const [statMinQuarterly, setStatMinQuarterly] = useState(props.item.minQuarterly);

    let from = replaceStr(props.settings.from, '-', '/');
    let to = replaceStr(props.settings.to, '-', '/');

    const [fromDate, setFromDate] = useState(new Date(from));
    const [toDate, setToDate] = useState(new Date(to));

    const [priceVariable, setPriceVariable] = useState(props.item.price);

    const [currentDate, setCurrentDate] = useState(new Date(getCurrentDate()))

    const [total, setTotal] = useState(props.item.total);

    useEffect(() => {

        setPrice(props.item.price);
        setMin(props.item.count);
        setStatMin(props.item.min);
        setPriceSecond(props.item.priceSecond);
        setMinSecond(props.item.minSecond);
        setPriceThird(props.item.priceThird);
        setMinThird(props.item.minThird);
        setPriceQuarterly(props.item.priceQuarterly);
        setMinQuarterly(props.item.count);
        setStatMinQuarterly(props.item.minQuarterly);

        let from = replaceStr(props.settings.from, '-', '/');
        let to = replaceStr(props.settings.to, '-', '/');

        setFromDate(new Date(from));
        setToDate(new Date(to));

        setPriceVariable(props.item.price);
        setCurrentDate(new Date(getCurrentDate()));

        setTotal(props.item.total);


    }, [props.item.price])


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
        props.editCartHandler({
            product_id: props.item.product_id,
            article: props.item.article,
            image:props.item.image,
            name: props.item.name,
            detail:props.item.detail,
            options: props.item.options,
            price: priceVariable,
            count: currentDate < fromDate || currentDate > toDate ? min : minQuarterly,
            priceSecond:props.item.priceSecond,
            priceThird:props.item.priceThird,
            priceQuarterly:props.item.priceQuarterly,
            min:props.item.min,
            minSecond:props.item.minSecond,
            minThird:props.item.minThird,
            minQuarterly:props.item.minQuarterly,
            total: total
        });
    },[total])

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

    return(
        <div className="item">
            <div className="itemPartFirst">
                <div className="images"><img style={{width: '100px'}} src={props.item.image}/></div>
                <div className="content">
                    <div className="itemTitle"><h2>{props.item.name}</h2></div>
                    <div className="article">Арт. {props.item.article}</div>
                    <div className="itemText"><p style={{height: '52px',display: "inline-block", overflow: 'hidden'}}>{ReactHtmlParser(props.item.detail)}</p></div>
                </div>
            </div>
            <div className="itemPartSecond">
                <div className="costPanelItem">
                    <div className="costPanel">
                        <div className="cost"><p>{parseFloat(priceVariable)} ₽ / шт.</p></div>
                        <div className="count">
                            <div className="remove"><img onClick={removeCountHandler} src="/images/minus.png"/></div>
                            <div className="number"><input onBlur={handlerBlur} onKeyDown={handlerKeyDown} onChange={handleChange} type="text" maxLength="5" value={currentDate < fromDate || currentDate > toDate ? min : minQuarterly}/></div>
                            <div className="add"><img onClick={addCountHandler} src="/images/plus.png"/></div>
                        </div>
                    </div>
                    <div className="price">Итого: {parseFloat(total.toFixed(2))} ₽</div>
                </div>
            </div>
            <div className="cross"><img onClick={() => props.deleteCartHandler(props.item.product_id)} src="/images/cross.svg"/></div>
        </div>
    )
}

export default Item;
