import React from "react";

const MenuItem = (props) => {
    return (
        <>
            <div className="menu-item">
                <div>
                    <a href="#">
                        <p className="title">Весь каталог</p>
                        <p className="text">Более 100 наименований</p>
                    </a>
                </div>
            </div>
            <div className="menu-item">
                <div>
                    <a href="#">
                        <p className="title">Для офиса</p>
                        <p className="text">30 наименований</p>
                    </a>
                </div>
            </div>
            <div className="menu-item">
                <div>
                    <a href="#">
                        <p className="title">Для агентов</p>
                        <p className="text">23 наименования</p>
                    </a>
                </div>
            </div>
            <div className="menu-item">
                <div>
                    <a href="#">
                        <p className="title">Для клиентов</p>
                        <p className="text">15 наименований</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default MenuItem;
