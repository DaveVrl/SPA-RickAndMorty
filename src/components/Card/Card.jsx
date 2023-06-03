import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.card}>
         <button className={style.closeBtn} onClick={() => onClose(id)}>X</button>
         <img className={style.img} src={image} alt='' />
         <div className={style.containerh3}>
         <NavLink className={style.navlink} to={`/detail/${id}`}>
         <h3 className={style.name}>{name}</h3>
         </NavLink>
         <h3>{status}</h3>
         <h3>{species}</h3>
         <h3>{gender}</h3>
         <h3 className={style.origin}>{origin}</h3>
         </div>
      </div>
   );
}
