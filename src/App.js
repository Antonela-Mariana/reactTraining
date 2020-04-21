import React from 'react';
import './App.css';
import List from './components/List';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import OrdinaryDrinks from './components/Ordinary-drink';
import CocktailsGlass from './components/Cocktail-glass';
import ChampagneFlute from './components/Champagne-flute';
import NonAlcoholic from './components/Non-Alcoholic';
import Alcoholic from './components/Alcoholic';
import NavBar from './components/NavBar';
import ImageDetails from './components/ImageDetails';

function App() {
  return (
    <div>
      {/* <List/> */}
      <h1 className="header">Cocktails</h1>
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route path="/alcoholic" component={Alcoholic}></Route>
            <Route path="/non-alcoholic" component={NonAlcoholic}></Route>
            <Route path="/ordinary-drink" component={OrdinaryDrinks}></Route>
            <Route path="/cocktail-glass" component={CocktailsGlass}></Route>
            <Route path="/champagne-flute" component={ChampagneFlute}></Route>
            <Route path="/details-img" component={ImageDetails}></Route>
            <Route path="/" component={List}></Route>
          </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
