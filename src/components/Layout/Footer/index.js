import { Link } from "react-router-dom"
import {
    BiLogoFacebook,
    BiLogoLinkedin,
    BiLogoInstagram,
    BiLogoTiktok,
    BiLogoYoutube,
    BiCopyright
} from "react-icons/bi";
import "./Footer.scss"

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__content">
                        <div className="footer__contact">
                            <ul>
                                <li>
                                    <Link to="#">
                                        <BiLogoFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <BiLogoLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <BiLogoInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <BiLogoTiktok />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <BiLogoYoutube />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__copyright">
                            <p>
                                Copyright <BiCopyright /> 2023 CLB Nhà Kinh tế trẻ - YEC - TMU
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer