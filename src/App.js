import './App.css';
import Header from './Header.js'
import React, { useEffect } from 'react'
import Home from './Home.js'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Checkout from './Checkout.js'
import Login from './Login.js'
import { auth } from './firebase'
import { useStateValue } from './StateProvider.js';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders.js'

function App() {

  const promise=loadStripe('pk_test_51ISbIiHjsrQ2MELrukLyhiKfRSeftGssCAhaML561OHPRn1edM2VJO9Ts7XcQ4Q33k09EuYiFm3vdQjLBzg4QlbD001KR441Iy');
  const [{},dispatch]=useStateValue();
  useEffect(() => {
      auth.onAuthStateChanged(authUser=>{
        console.log("USER IS ", authUser);
        if(authUser)
        {
            dispatch({
              type:"SET_USER",
              user:authUser,
            })
        }
        else{
          dispatch({
            type: "SET_USER",
            user: null,
          })
        }
      })
  }, [])

  return (

    <Router>
    
    <div className="app">
      
      <Switch>

      <Route path="/login">
        
        <Login/>

      </Route>

      <Route path="/checkout">
        <Header/>
        <Checkout/>

      </Route>
      <Route path="/payment">
        <Header/>
        <Elements stripe={promise}>
        <Payment/>
        </Elements>
      </Route>
      <Route path="/orders">
        <Header/>
        <Orders/>
      </Route>
      <Route path="/">
        <Header/>
        <Home/>

      </Route>

      </Switch>
        
    </div>
    </Router>
  );
}

export default App;
