import React, {useState, useEffect} from "react";
import ReactHtmlParser from "react-html-parser";
import {getCurrentDate, isDifferentDates} from "../../../../../utils/GetCurrentData"
import Select from "../Select/Select";

const Info = (props) => {

    const [price, setPrice] = useState(props.price);
    const [min, setMin] = useState(props.min);
    const [statMin, setStatMin] = useState(props.min);

    const [priceSecond, setPriceSecond] = useState(props.priceSecond);
    const [minSecond, setMinSecond] = useState(props.minSecond);

    const [priceThird, setPriceThird] = useState(props.priceThird);
    const [minThird, setMinThird] = useState(props.minThird);

    const [priceQuarterly, setPriceQuarterly] = useState(props.priceQuarterly);
    const [minQuarterly, setMinQuarterly] = useState(props.minQuarterly);
    const [statMinQuarterly, setStatMinQuarterly] = useState(props.minQuarterly);


    const [fromDate, setFromDate] = useState(new Date(props.fromQuarterlyDate));
    const [toDate, setToDate] = useState(new Date(props.toQuarterlyDate));


    const [priceVariable, setPriceVariable] = useState(props.price);

    const [currentDate, setCurrentDate] = useState(new Date(getCurrentDate()))

    const [total, setTotal] = useState(props.price * props.min);

    let tl = props.title ? props.title.join(' ') : null;



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


    return (
        <div className="info">
            <div className="title"><h1>{props.titleSecond ? props.titleSecond : null} <span>{tl}</span></h1></div>
            <div className="article">Арт. {props.article}</div>
            <div className="description">
                <h2>Описание товара</h2>
                <p>{ReactHtmlParser(props.detail)}</p>
            </div>
            <div className="property">
                <h2>Характеристики товара</h2>
                <p>
                    {ReactHtmlParser(props.property)}
                </p>
            </div>
            <div className="form">
                <h2>Заказать товар</h2>
                <form name="formCart" action="" methos="post">
                    <div className="selectContainer">
                        <Select options={props.options}/>
                    </div>
                    <div className="costPanel">
                        <div className="cost"><p>{priceVariable} ₽ / шт.</p></div>
                        <div className="count">
                            <input className="costPanel__hidden" type="hidden"
                                   name="count"/>
                            <div className="remove"><img onClick={removeCountHandler} src="/images/minus.png"/>
                            </div>
                            <div className="number">{currentDate < fromDate || currentDate > toDate ? min : minQuarterly}</div>
                            <div className="add"><img onClick={addCountHandler} src="/images/plus.png"/></div>
                        </div>
                    </div>
                    <div className="total">
                        <input className="total__hedden" type="hidden" name="total"/>
                        <p>Итого: <span>{total}</span> ₽</p>
                    </div>
                    <div className="button">
                        <button>Добавить в корзину</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Info;
