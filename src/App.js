import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Rooms, Error, SingleRoom } from 'pages';
import NavBar from 'components/NavBar';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/rooms' component={Rooms} />
          <Route path='/rooms/:slug' component={SingleRoom} />
          <Route path='*' component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
