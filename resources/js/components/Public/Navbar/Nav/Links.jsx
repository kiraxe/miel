import React from "react";

const Links = () => {
    return(
        <>
            <li>
                <a className="leftDropMenuRun" href="#"><span>ГК «МИЭЛЬ»</span>Весь Каталог</a>
                <ul className="leftDropMenu">
                    <li><a href="#">Канцелярия</a></li>
                    <li><a href="#">Канцелярия</a></li>
                    <li><a href="#">Канцелярия</a></li>
                    <li><a href="#">Канцелярия</a></li>
                </ul>
            </li>
            <li><a href="#">Для офисов</a></li>
            <li><a href="#">Для агентов</a></li>
            <li><a href="#">Для клиентов</a></li>
        </>
    )
}

export default Links;
