import React from "react";


const LoadMore = (props) => {
    return(
        <div className="row loadMore">
            <div className="col-md-12">
                <div className="buttonLoadMore">
                    <button onClick={props.onLoadHandler}>Показать еще</button>
                </div>
            </div>
        </div>
    )
}

export default LoadMore;
