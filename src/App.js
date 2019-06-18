import React, { Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/layout/NavBar'

const Home = lazy(() =>  import('./components/pages/Home'))
const Header = lazy(() => import('./components/pages/Header'))
const Products = lazy(() => import('./components/products/Products'))
const Cart = lazy(() => import('./components/cart/Cart'))
const Register = lazy(() => import('./components/auth/Registration'))
const Login = lazy(() => import('./components/auth/Login'))

function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<h1>Loading...</h1>} >
        <Switch>
          <Route 
            exact 
            path='/' 
            component={Header} 
          />
          <Route 
            exact 
            path='/products/:filter' 
            render={props => <Products {...props} />} 
          />
          <Route 
            exact 
            path='/products' 
            render={props => <Products {...props} />} 
          />
          <Route 
            exact 
            path="/cart" 
            component={Cart} 
          />
          <Route
            exact
            path="/register"
            component={Register}
            />
          <Route
            exact
            path="/login"
            component={Login}
            />
        </Switch>
      </Suspense>
    </div>
  );
}

export default connect(
  null,
  null
)(App);
