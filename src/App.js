import './App.css'
import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';
import Nav from "./components/Nav/Nav.jsx"
import axios from 'axios';
import { Routes , Route } from "react-router-dom";
import About from './components/About/About';
import Detail from './components/Detail';



function App() {
   //characters inicializa como "characters = []"
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);  //spread me hace una copia del estado
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const characterFiltered = characters.filter(character =>
         character.id !== Number(id))
      setCharacters(characterFiltered)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>

      </div>
   );
}
//Las funciones se ejecutan aquí, pero se pasa por PROPS en cada componente!!! oS / oC
export default App;


