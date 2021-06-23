import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import SingleRoom from "./pages/SingleRoom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route path="/rooms/:slug" component={SingleRoom} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
