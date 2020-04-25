import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ImageDetails from './components/ImageDetails';
import MainPage from './components/MainPage';
import Category from './components/Category';
import Alcoholic from './components/Alcoholic';
import NonAlcoholic from './components/Non-Alcoholic';
import CocktailsGlass from './components/Cocktail-glass';
import OrdinaryDrinks from './components/Ordinary-drink';
import ChampagneFlute from './components/Champagne-flute';



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
            <Route path="/cocktail-glass" component={CocktailsGlass}></Route>
            <Route path="/ordinary-drink" component={OrdinaryDrinks}></Route>
            <Route path="/champagne-flute" component={ChampagneFlute}></Route>
            {/* <Route path="category/alcoholic" render={(props) => <Category url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic' type='Alcoholic' />}></Route>
            <Route path="/non-alcoholic" component={() => <Category url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic' type='Non-Alcoholic' />}></Route>
            <Route path="/ordinary-drink" component={() => <Category url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink' type='Ordinary_Drink' />}></Route>
            <Route path="/cocktail-glass" component={() => <Category url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass' type='Cocktail_glass' />}></Route>
            <Route path="/champagne-flute" component={() => <Category url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute' type='Champagne_flute' />}></Route> */}
            <Route path="/details" component={ImageDetails}></Route>
            <Route path="/category" component={Category}></Route>
            <Route path="/" component={MainPage}></Route>
          </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
