import React from "react";

const MenuItem = (props) => {

    return (
        <nav>
            {props.categories ? props.categories.map((item, key) => <div key={key} className="menu-item"><div style={{backgroundImage: `url(${item.image})`}}><a href={`${item.link}`}><p className="title">{item.attributes.name}</p><p className="text">{item.attributes.description}</p></a></div></div>) : null}
        </nav>
            )
}

export default MenuItem;
