import dotenv from 'dotenv';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';

// import { auth } from 'auth-server';

import { useStateValue } from './components/StateProvider';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import Orders from './components/Orders/Orders';

import './App.css';

dotenv.config();
// const promise = loadStripe(
//   process.env.STRIPE_PRIVATE_KEY
// );

function App() {

  //const [{}, dispatch] = useStateValue();

  // useEffect(() => {
    
  //   auth.onAuthStateChanged(authUser => {
  //     console.log('The user is: ', authUser);

  //     if (authUser) {
  //       // user just / already logged in

  //       dispatch({
  //         type: 'SET_USER',
  //         user: authUser,
  //         })

  //     } else {
  //       // user logged out
  //       dispatch({
  //         type: 'SET_USER',
  //         user: null,
  //       })
  //     }
  //   })
  // }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            {/* <Elements stripe={promise}> */}
              <Payment />
            {/* </Elements> */}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
