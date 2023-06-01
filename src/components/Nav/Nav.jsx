import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";

const Nav = ({onSearch}) => {
    return(
        <div className={style.container}>
            <button>
                <NavLink to="/Home">Home</NavLink>
            </button>
            <button>
                <NavLink to="/About">About</NavLink>
            </button>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav;