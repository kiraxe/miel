import React from "react";


const CatalogTitle = (props) => {

    let page = !!props.page.id ? props.page.id : props.page.page;

    let cat = props.categories ? props.categories.filter(item => {
        let str = item.link.split('/');
        console.log(str);
        return str[str.length - 1] === page ? item : null;
    }) : null;

    console.log(cat);

    return(
        <div className="row catalogTitle">
            <div className="col-md-12">
                <div className="title"><h1>{cat[0] ? cat[0].attributes.name : null}</h1></div>
                <div className="text"><p>Какое-то небольшое описание, не более чем на две строки</p>
                </div>
            </div>
        </div>
    )
}

export default CatalogTitle;
