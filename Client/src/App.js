import './App.css'
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx"
import About from './components/About/About';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import { Routes , Route , useLocation , useNavigate } from "react-router-dom";
import { useState , useEffect } from 'react';



function App() {

   const location = useLocation();
   const navigate = useNavigate();
   
   const [access, setAccess] = useState(false);

   const login = (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      !access && navigate('/'); //No me deja ingresar manualmente
   }, [access]);                //Nos obliga a completar el Login
   

   
   //characters inicializa como "characters = []"
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
         character.id !== id)
      setCharacters(characterFiltered)
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch}/>
            // Con ternario:
            // location.pathname !== '/'
            // ? <Nav onSearch={onSearch}/>
            // : null 
         }
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/Favorites' element={<Favorites/>}/>
         </Routes>

      </div>
   );
}
//Las funciones se ejecutan aquí, pero se pasa por PROPS en cada componente!!! oS / oC
export default App;


