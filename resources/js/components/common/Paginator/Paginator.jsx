import React from 'react';
import {ItemPrev, Items, ItemNext} from "./Items";

const Paginator = (props) => {

    return(
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <ItemPrev {...props}/>
                    <Items {...props} />
                    <ItemNext {...props}/>
                </ul>
            </nav>
        </>
    )
}


export default Paginator;
