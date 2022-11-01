import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Trigger from './components/pages/trigger'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' exact component={Trigger} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
