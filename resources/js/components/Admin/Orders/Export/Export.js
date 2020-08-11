import React from "react";


const Export = (props) => {
    return (
        <div style={{marginTop: '30px', cursor: 'pointer'}}className="export">
            <a onClick={props.onExport} href="/api/export" target="_blank">Скачать xls файл</a>
        </div>
    )
}

export default Export;
