import Card from "../Card/Card"
import style from "./Favorites.module.css"
import { connect } from "react-redux"
import { filterCards, orderCards } from "../../Redux/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"

const Favorites = ({myFavorites}) => {
    
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    return (
        <div className={style.container}>
            <div className={style.selectContainer}>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>
            </div>
            <div className={style.containerCards}>{
            myFavorites?.map(character => {
                return (
                    <Card
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    gender={character.gender}
                    origin={character.origin}
                    image={character.image}
                    onClose={character.onClose}
                    />
                )
            })
            }</div>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
       myFavorites: state.myFavorites
    }
 }

export default connect(
    mapStateToProps,
    null
 )(Favorites);