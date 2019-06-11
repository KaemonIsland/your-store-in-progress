import React, { Suspense, lazy } from 'react';
import NavBar from './components/layout/NavBar'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Cart from './components/cart/cart';
const Home = lazy(() =>  import('./components/pages/Home'))
const Products = lazy(() => import('./components/products/Products'))


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Suspense fallback={<h1>Loading...</h1>} >
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
        </Suspense>
      </Switch>
      <Cart />
    </div>
  );
}

export default connect(
  null,
  null
)(App);
