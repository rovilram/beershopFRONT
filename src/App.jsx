import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Beers from './components/Beers/Beers';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="App_Wrapper">
    <Header />
    <Router>
      <Switch>

        <Route exact path="/" component={Home} />

        <Route path="/shop" component={Shop} />

        <Route path="/beers/:id" component={Beers} />

        <Route path="/beers/" component={Shop} />

      </Switch>

    </Router>
    <Footer />
  </div>
);
export default App;
