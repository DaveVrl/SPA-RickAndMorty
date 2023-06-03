import axios from "axios";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";


const Detail = () => {
    //useState me da un array de 2 posiciones
    //character ininicializa "character = {}"
    const [character, setCharacter] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
    // El ?. es el operador de encadenamiento opcional de JS, que permite acceder a props anidadas sin generar un error si una de ellas es null o undefined.
    
     return(
        <div>{
            character && <div>
                <h2>{character?.name}</h2>
                <h2>{character?.status}</h2>
                <h2>{character?.species}</h2>
                <h2>{character?.gender}</h2>
                <h2>{character?.origin?.name}</h2>
                <img src={character?.image} alt={character?.name}/>
            </div>
        }
        </div>
    )
}

export default Detail;