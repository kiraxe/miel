import React from "react";


const CatalogTitle = (props) => {

    let page = !!props.page.id ? props.page.id : props.page.page;

    let cat = props.categories ? props.categories.filter((item, key) => page === item.link ? item : null) : null;


    console.log(cat);

    return(
        <div className="row catalogTitle">
            <div className="col-md-12">
                <div className="title"><h1>Весь каталог</h1></div>
                <div className="text"><p>Какое-то небольшое описание, не более чем на две строки</p>
                </div>
            </div>
        </div>
    )
}

export default CatalogTitle;
