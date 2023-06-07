import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import {addFav , removeFav} from "../../Redux/actions";
import { connect } from "react-redux"; //conectar fn con componente
import { useState , useEffect } from "react"; //crear estado local

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, gender, image });
      //pasamos el obj con esas propiedades
    }
  };

  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

  return (
    <div className={style.card}>
      
        <button className={style.favBtn} onClick={handleFavorite}>{isFav ? "❤️" : "🤍" }</button>
   
      <button className={style.closeBtn} onClick={() => onClose(id)}>
        X
      </button>
      <img className={style.img} src={image} alt="" />
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

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))}, //creamos prop con name de la fn //recibe al personaje (objeto)
      removeFav: (id) => {dispatch(removeFav(id))} //despachamos fn cn ejecución
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);