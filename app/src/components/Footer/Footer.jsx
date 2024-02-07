import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import style from "./footer.module.scss"


export const Footer = () => {
    return (
        <footer>
            <div className={style.footerContainer}>
                <div className={style.copyright}>
                    <h2>&copy; 2021 Hotel Overlook. Alle rettigheder forbeholdt.</h2>
                </div>
                {/* ⁡⁣⁣⁢Здесь я использовала инлайн стилизацию ⁡*/}
                <div className={style.iconsStyle}>
                    <FaTwitterSquare style={{ fontSize: '35px' }} />
                    <FaFacebookSquare style={{ fontSize: '35px',borderRadius: '20px ' }} />
                </div>

                <div className={style.footerNav}>
                    <ul>
                        <li>
                            <Link to="/">Forside</Link>
                        </li>
                        <li>
                            <a href="/hotel">Hoteller & Destinationer</a>
                        </li>
                        <li>
                            <a href="/room">Værelser</a>
                        </li>
                        <li>
                            <a href="/reservation">Reservation</a>
                        </li>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    );
};
