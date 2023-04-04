import { Link, NavLink } from "react-router-dom";
import ButtonLink from "../ButtonLink/ButtonLink";
import Logo from "../../assets/images/logo.png";
import "./Header.scss";

const Header = () => {
    return (
        <header className="site-header">
            <div className="container container--xl">
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-4 pd--xs">
                        <div className="site-header__logo">
                            <Link to="/">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 pd--xs">
                        <nav className="site-header__menu">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/payers">Payers</NavLink>
                            <NavLink to="/approach">Approach</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </nav>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-4 pd--xs">
                        <div className="site-header__buttons">
                            <ButtonLink url="/contact">Contacts</ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
