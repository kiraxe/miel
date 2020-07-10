import React from "react";
import Social from "./Social/Social";

const Footer = (props) => {
    return(
        <footer>
            <div className="container-my">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <p className="copy">© 2020 МИЭЛЬ</p>
                        <p className="agree"><a href="">Пользовательское соглашение<br/>
                            Согласие на обработку персональных данных</a></p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="phone"><a className="phone" href={`tel:${props.phone}`}><span>{props.phone}</span></a></div>
                        <div className="social">
                            <Social social={props.social}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
