import React, {useState, useEffect} from "react";
import Item from "./Item";


const Select = (props) => {

    let options = props.options ? props.options.map((item, key) => <Item onOptionHandler={props.onOptionHandler} key={key} option={item}/>): null;
    return(
        <>
            {options}
        </>
    )
}

export default Select;
