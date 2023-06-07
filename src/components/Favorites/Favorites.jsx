import Card from "../Card/Card"
import style from "./Favorites.module.css"
import { connect } from "react-redux"

const Favorites = ({myFavorites}) => {
    return (
        <div className={style.container}>{
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