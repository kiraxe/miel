import React, {useState, useEffect} from "react";
import ReactHtmlParser from "react-html-parser";
import {getCurrentDate, isDifferentDates, replaceStr} from "../../../../../utils/GetCurrentData"
import Select from "../Select/Select";
import loading from "../../../../../assets/images/loading.svg";

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

    let from = replaceStr(props.fromQuarterlyDate, '-', '/');
    let to = replaceStr(props.toQuarterlyDate, '-', '/');

    const [fromDate, setFromDate] = useState(new Date(from));
    const [toDate, setToDate] = useState(new Date(to));

    const [priceVariable, setPriceVariable] = useState(props.price);

    const [currentDate, setCurrentDate] = useState(new Date(getCurrentDate()))

    const [total, setTotal] = useState(props.price * props.min);


    let tl = props.title ? props.title.join(' ') : null;


    const [options, setOptions] = useState(props.options ? props.options.map(item => {

        return {
            id:item.option_id,
            name: item.name,
            value: ""
        }
    }
    ): null
    )

    const addCountHandler = () => {
        if (currentDate < fromDate || currentDate > toDate ) {
            setMin(min + 1);
        } else {
            setMinQuarterly(minQuarterly + 1);
        }
    }

    const onOptionHandler = (option) => {
        let newArr = options ? options.map(item => item && item.id !== option.id ? item : null) : null;
        let arr = [...newArr, option];
        let result = arr.filter(item => {
            return item !== undefined && item !== null;
        });
        setOptions(result);
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

        setPrice(props.price);
        setMin(props.min);
        setStatMin(props.min);
        setPriceSecond(props.priceSecond);
        setMinSecond(props.minSecond);
        setPriceThird(props.priceThird);
        setMinThird(props.minThird);
        setPriceQuarterly(props.priceQuarterly);
        setMinQuarterly(props.minQuarterly);
        setStatMinQuarterly(props.minQuarterly);

        let from = replaceStr(props.fromQuarterlyDate, '-', '/');
        let to = replaceStr(props.toQuarterlyDate, '-', '/');

        setFromDate(new Date(from));
        setToDate(new Date(to));

        setPriceVariable(props.price);
        setCurrentDate(new Date(getCurrentDate()));

        setTotal(props.price * props.min)


    }, [props.price])

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

    let titleToCart = props.titleSecond ? props.titleSecond : "";
    titleToCart += " " + tl;

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
                <div className="formCart">
                    <div className="selectContainer">
                        <Select onOptionHandler={onOptionHandler} options={props.options}/>
                    </div>
                    <div className="costPanel">
                        <div className="cost"><p><span style={{fontSize: '20px', color: '#2C373E'}}>{priceVariable}</span> ₽ / шт.</p></div>
                        <div className="count">
                            <input className="costPanel__hidden" type="hidden"
                                   name="count"/>
                            <div className="remove"><img onClick={removeCountHandler} src="/images/minus.png"/>
                            </div>
                            <div className="number"><input onBlur={handlerBlur} onKeyDown={handlerKeyDown} onChange={handleChange} type="text" maxLength="5" value={currentDate < fromDate || currentDate > toDate ? min : minQuarterly}/></div>
                            <div className="add"><img onClick={addCountHandler} src="/images/plus.png"/></div>
                        </div>
                    </div>
                    <div className="total">
                        <input className="total__hedden" type="hidden" name="total"/>
                        <p>Итого: <span>{total.toFixed(2)}</span> ₽</p>
                    </div>
                    <div className="button">
                        {props.isLoggedIn && <button onClick={() => props.addCartHandler({
                            product_id: props.product_id,
                            article: props.article,
                            image: props.image,
                            name: titleToCart,
                            options: options,
                            price: priceVariable,
                            count: currentDate < fromDate || currentDate > toDate ? min : minQuarterly,
                            priceSecond:props.priceSecond,
                            priceThird:props.priceThird,
                            priceQuarterly:props.priceQuarterly,
                            min:props.min,
                            minSecond:props.minSecond,
                            minThird:props.minThird,
                            minQuarterly:props.minQuarterly,
                            total: total
                        })
                        }>Добавить в корзину {props.isFetching ? <img src={loading}/> : null}</button> || <button onClick={props.popUpOpen}>Добавить в корзину</button> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;
