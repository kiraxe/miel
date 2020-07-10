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
                        <div className="phone"><a className="phone"
                                                  href="tel:+78005001990"><span>8 (800) 500-19-90</span></a></div>
                        <div className="social">
                            <Social/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
