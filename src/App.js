import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import TinderCards from "./Components/TinderCards/TinderCards";
import SwipeButtons from "./Components/SwipeButtons/SwipeButtons";


function App() {
  return (
    <div className='app'>
       <Router>
        <Switch>
          <Route path="/">
            <Header />
            <TinderCards/>
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
