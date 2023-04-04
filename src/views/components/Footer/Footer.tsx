import "./Footer.scss";
import LogoWhite from "../../assets/images/logo-white.png";
import ButtonLink from "../ButtonLink/ButtonLink";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="site-footer bg--secondary pd--m">
            <div className="container">
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-2">
                        <div className="site-footer__widget">
                            <img
                                className="site-footer__logo"
                                src={LogoWhite}
                                alt=""
                            />
                            <h5 className="site-footer__quote">
                                A proven innovation practice that accelerates
                                the launch of Medicare Advantage plans.
                            </h5>
                            <ButtonLink url="/contact">Contact Us</ButtonLink>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-4">
                        <div className="site-footer__widget">
                            <h5 className="site-footer__widget-title">
                                Launch + Grow
                            </h5>
                            <nav className="site-footer__nav">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/payers">Payers</NavLink>
                                <NavLink to="/approach">Approach</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </nav>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-4">
                        <h5 className="site-footer__widget-title">Contact</h5>
                        <p>625 State Street Schenectady, NY 12305</p>
                        <p>LaunchandGrow@mvphealthcare.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
