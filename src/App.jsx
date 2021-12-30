import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';
import NotFound from './components/NotFound';

function App() {
  useEffect(() => {
    fetch('http://localhost:9000/movies/')
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  // your code here ...
  return <></>;
}

export default App;
