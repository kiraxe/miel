import React from "react";


export const Items = ({paginator, onGetPageProducts, props}) => {

    let elements = [];
    let prev = null;
    let next = null;
    let start = null;
    let end = null;

    if (paginator.total_page > 1) {

        prev = paginator.current_page - 1;
        next = paginator.total_page - paginator.current_page;

        if (prev < Math.floor((paginator.per_page / 2))) start = 1;
        else start = paginator.current_page - Math.floor((paginator.per_page / 2));

        end = start + paginator.per_page - 1;

        if (end > paginator.total_page) {
            start -= (end - paginator.total_page);
            end = paginator.total_page;
            if (start < 1) start = 1;
        }
    }

    for (let i = start; i <= end; i++) {
        if (i === paginator.current_page) elements.push(<li key={i} className="page-item active"><a page={paginator.current_page} className="page-link" href="#">{i}</a></li>);
        else elements.push(<li key={i} className="page-item"><a onClick={onGetPageProducts} page={i} className="page-link" href="#">{i}</a></li>);
    }

    return <>{elements}</>

}

export const ItemPrev = ({paginator, onGetPageProducts, props}) => {
    return <>{paginator.current_page !== 1 && <li className="page-item"><a onClick={onGetPageProducts} page={paginator.current_page - 1} className="page-link" href="#">&laquo;</a></li>}</>
}

export const ItemNext = ({paginator, onGetPageProducts, props}) => {
    return <>{paginator.current_page !== paginator.total_page && <li className="page-item"><a onClick={onGetPageProducts} page={paginator.current_page + 1} className="page-link" href="#">&raquo;</a></li>}</>
}

