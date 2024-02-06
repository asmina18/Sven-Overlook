import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import style from "./footer.module.scss"
export const Footer = () => {
    return (
        <footer>
            <p>&copy; 2021 Hotel Overlook. Alle rettigheder forbeholdt.</p>
            <div className={style.iconsStyle}>
                <FaFacebookSquare />
                <FaTwitterSquare />
            </div>

        </footer>
    )
}