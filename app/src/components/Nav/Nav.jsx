
import { NavLink } from "react-router-dom";
import style from "./nav.module.scss"
import logo from "../../assets/logo.svg"


export const Nav = () => {

    const activeStyle = ({ isActive, isPending }) => {
        return {
            color: isActive ? "#FF0000" : "",
        }
    }

    return (
        <>
            <nav className={style.navCantainer}>
                <div className={style.logoStyle}>
                    <img src={logo} alt="logoNav" />
                </div>
                <ul>
                    <NavLink to="/" style={activeStyle}>FORSIDE</NavLink>
                    <NavLink to="/hotel" style={activeStyle}>HOTELLER & DESTINATIONER</NavLink>
                    <NavLink to="/room" style={activeStyle}> VÆRELSE</NavLink>
                    <NavLink to="/reservation" style={activeStyle}> RESERVATION</NavLink>
                    <NavLink to="/login" style={activeStyle}>LOGIN</NavLink>
                </ul>
            </nav>
        </>
    )
}