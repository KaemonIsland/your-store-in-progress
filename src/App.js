import React from 'react';
import NavBar from './components/layout/NavBar'
import { connect } from 'react-redux'

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default connect(
  null,
  null
)(App);
