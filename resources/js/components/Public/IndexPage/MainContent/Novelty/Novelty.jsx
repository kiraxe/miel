import React from "react";
import SliderProducts from "../SliderProducts/SliderProducts";


const Novelty = (props) => {
    return (
        <div className="noveltyBlock">
            <div className="container-my">
                <div className="row">
                    <div className="col-md-12 novelty">
                        <div className="title"><h1>Новинки</h1></div>
                        <div className="text"><p>Какое-то небольшое описание, не более чем на две строки</p></div>
                        <SliderProducts novelty={props.novelty}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Novelty;
