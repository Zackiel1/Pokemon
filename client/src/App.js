import React, { useState } from 'react';
import { Home, Landing, Form, Detail } from "./views";
import Nav from './components/Nav/Nav.jsx';
import { Route, useLocation } from 'react-router-dom';
import axios from "axios";

function App() {

  const location = useLocation();

  const [pokemonName, setPokemonName] = useState([]);

  const onSearch = async (name) => {
    if(!name) return window.alert("no hay ningun nombre")
    console.log(name)
    await axios.get(`http://localhost:3001/pokemons/?name=${name}`)
    .then(response => {
      setPokemonName((pokemonName) => [...pokemonName, response.data[0]])
    })
    .catch(err => window.alert("Pokemon name not exist"))
  }

  return (
    <div>
      
      {location.pathname !== '/' && <Nav onSearch={onSearch} />}

      <Route exact path='/' component={Landing} />
      <Route path='/home' render={() => <Home pokemonName={pokemonName}/>} />
      <Route path='/detail/:detailId' render={() => <Detail />}/>
      <Route path='/createPokemon' render={() => <Form />}/>
      
    </div>
  );
}

export default App;


