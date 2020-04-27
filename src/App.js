import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ImageDetails from './components/ImageDetails';
import MainPage from './components/MainPage';
import Category from './components/Category';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';



function App() {
  return (
    <div>
      <BrowserRouter>
      <h1 className="header">Cocktails</h1>
          <NavBar/>
          <Switch>
            <Route path="/alcoholic" render={() => <Category url='a=Alcoholic' type='Alcoholic' />}></Route>
            <Route path="/non-alcoholic" component={() => <Category url='a=Non_Alcoholic' type='Non-Alcoholic' />}></Route>
            <Route path="/ordinary-drink" component={() => <Category url='c=Ordinary_Drink' type='Ordinary_Drink' />}></Route>
            <Route path="/cocktail-glass" component={() => <Category url='g=Cocktail_glass' type='Cocktail_glass' />}></Route>
            <Route path="/champagne-flute" component={() => <Category url='g=Champagne_flute' type='Champagne_flute' />}></Route>
            <Route path="/details/:id" component={ImageDetails}></Route>
            <Route path="/category" component={Category}></Route>
            <Route exact path="/" component={MainPage}></Route>
            <Route component= {NotFound} />
          </Switch>
          
      </BrowserRouter>
    </div>

  );
}

export default App;
