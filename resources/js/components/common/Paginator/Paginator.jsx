import React from 'react';
import {ItemPrev, Items, ItemNext, ItemFirst, ItemLast} from "./Items";

const Paginator = (props) => {

    return(
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <ItemFirst {...props}/>
                    <ItemPrev {...props}/>
                    <Items {...props} />
                    <ItemNext {...props}/>
                    <ItemLast {...props}/>
                </ul>
            </nav>
        </>
    )
}


export default Paginator;
