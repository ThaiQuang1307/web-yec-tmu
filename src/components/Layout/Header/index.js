import { Link, NavLink } from "react-router-dom"
import logo from "../../../images/logo.png"
import {
    BiChevronDown,
    BiSearchAlt2
} from "react-icons/bi";
// import { BsList } from "react-icons/bs";
import "./Header.scss"
import MenuResponsive from "../../MenuResponsive";

function Header() {

    const checkActive = ({ isActive }) => isActive ? "menu-active" : ""

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__wrap">
                        {/* logo  */}
                        <div className="header__logo">
                            <div className="header__logo--img">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                            <span className="header__logo--text">
                                <strong>
                                    clb nhà kinh tế trẻ
                                    <br />
                                    young economists club
                                </strong>
                            </span>
                        </div>

                        {/* menu  */}
                        <nav className="header__menu">
                            <ul className="menu__list--level1">
                                <li className="menu__item">
                                    <NavLink to="/tin-tuc" className={({ isActive }) => checkActive({ isActive })}>
                                        Tin tức
                                        <BiChevronDown />
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/su-kien" className={({ isActive }) => checkActive({ isActive })}>
                                        Sự kiện
                                        <BiChevronDown />
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/case-study" className={({ isActive }) => checkActive({ isActive })}>
                                        Case study
                                        <BiChevronDown />
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/tuyen-dung" className={({ isActive }) => checkActive({ isActive })}>
                                        Tuyển dụng
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/humans" className={({ isActive }) => checkActive({ isActive })}>
                                        Humans
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>

                        <div className="header__action">
                            {/* icon search */}
                            <div className="header__icon">
                                <BiSearchAlt2 />
                            </div>

                            {/* icon menu responsive */}
                            <div className="icon-menu-responsive">
                                <MenuResponsive />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header