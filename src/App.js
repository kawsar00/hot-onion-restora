import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import foodItemDetails from './Components/foodItemDetails/foodItemDetails';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
       <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/foodItem/:key">
          <foodItemDetails></foodItemDetails>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
