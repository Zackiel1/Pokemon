import React from 'react';
import { Home, Landing, Form, Detail, AllPokemons } from "./views";
import Nav from './components/Nav/Nav.jsx';
import { Route, useLocation } from 'react-router-dom';
import style from './App.module.css'


function App() {

  const location = useLocation();

  return (
    <div className={style.app}>
      
      {location.pathname !== '/' && <Nav />}

      <Route exact path='/' component={Landing} />
      <Route path='/home' render={() => <Home />} />
      <Route path='/AllPokemons' render={() => <AllPokemons />} />
      <Route path='/detail/:namePoke' render={() => <Detail />}/>
      <Route path='/createPokemon' render={() => <Form />}/>
      
    </div>
  );
}

export default App;


