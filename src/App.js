import React, { Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/layout/NavBar'

const Home = lazy(() =>  import('./components/pages/Home'))
const Header = lazy(() => import('./components/pages/Header'))
const Products = lazy(() => import('./components/products/Products'))
const Cart = lazy(() => import('./components/cart/Cart'))

function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<h1>Loading...</h1>} >
        <Switch>
          <Route exact path='/' component={Header} />
          <Route exact path='/products' component={Products} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default connect(
  null,
  null
)(App);
