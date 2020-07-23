import React from "react";

const Item = (props) => {
    return(
        <div className="select">
            <input className="select__input" type="hidden" name="color"/>
            <div className="select__head">{props.option.name}: <span></span></div>
            <ul className="select__list" style={{display: 'none'}}>
                {props.option ? props.option.value.map((item, key) => <li key={key} className="select__item">{item.name}</li>) : null}
            </ul>
        </div>
    )
}

export default Item;
