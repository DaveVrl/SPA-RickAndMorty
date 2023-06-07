import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";

const Nav = ({onSearch}) => {
    return(
        <div className={style.container}>
            <button className={style.btn}>
                <NavLink className={style.navlink} to="/Home">Home</NavLink>
            </button>
            <SearchBar onSearch={onSearch}/>
            <button className={style.btn}>
                <NavLink className={style.navlink} to="/About">About</NavLink>
            </button>
            <button className={style.btn}>
                <NavLink className={style.navlink} to="./Favorites">Favorites</NavLink> 
            </button>
        </div>
    )
}

export default Nav;