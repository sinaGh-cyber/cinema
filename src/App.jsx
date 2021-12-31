
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';
import NotFound from './components/NotFound';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path={'/'} component={Movies} />
          <Route path={'/movies/:movie_id'} component={MovieDetail}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
