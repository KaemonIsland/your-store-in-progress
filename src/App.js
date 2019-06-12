import React, { Suspense, lazy } from 'react'
import NavBar from './components/layout/NavBar'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

const Home = lazy(() =>  import('./components/pages/Home'))
const Products = lazy(() => import('./components/products/Products'))
const Cart = lazy(() => import('./components/cart/cart'))

function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<h1>Loading...</h1>} >
        <Switch>
          <Route exact path='/' component={Home} />
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
