import React, {useState, useEffect} from "react";

const Item = (props) => {

    const [selectHead, setSelectHead] = useState(false);
    const [selectText, setSelectText] = useState('');


    let onSelectHandler = (e) => {
        if (selectHead) {
            setSelectHead(false);
        } else {
            setSelectHead(true);
        }

    }

    let onselectItemHandler = (e) => {
        setSelectHead(false);
        props.onOptionHandler({
            id: props.option.option_id,
            name: props.option.name,
            value: e.target.innerText
        });
        setSelectText(e.target.innerText);
    }


    let stl = {
        display: 'none'
    }

    let open = selectHead ? "open" : "";

    return(
        <div className="select">
            <input className="select__input" type="hidden" name="color"/>
            <div onClick={onSelectHandler} className={`select__head ${open}`}>{props.option.name}: <span>{selectText !== "" ? selectText : ""}</span></div>
            <ul className="select__list" style={!selectHead ? stl : {display: 'block'}}>
                <li onClick={onselectItemHandler} style={{height: '44px'}} className="select__item"></li>
                {props.option ? props.option.value.map((item, key) => <li onClick={onselectItemHandler} key={key} className="select__item">{item.name}</li>) : null}
            </ul>
        </div>
    )
}

export default Item;
