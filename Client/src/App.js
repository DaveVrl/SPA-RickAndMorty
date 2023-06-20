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

const URL = 'http://localhost:3001/rickandmorty/login/';


function App() {

   const location = useLocation();
   const navigate = useNavigate();
   
   const [access, setAccess] = useState(false);

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`);
         const { access } = data;

         setAccess(data);
         access && navigate('/home');
         
      } catch (error) {
         console.log(error.message)
      }
   }

   useEffect(() => {
      !access && navigate('/'); //No me deja ingresar manualmente
   }, [access]);                //Nos obliga a completar el Login
   

   
   //characters inicializa como "characters = []"
   const [characters, setCharacters] = useState([]);

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            };

      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
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


