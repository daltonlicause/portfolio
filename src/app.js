import React from "react";
import Index from "./pages/index/index";
import D6Website from "./pages/projects/d6Website";
import D6Catalog from "./pages/projects/d6Catalog";
import HeypexGlobal from "./pages/projects/heypexGlobal";
import Outpost from "./pages/projects/2ndStreetOutpost";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => ( 
  <Router>
    <Switch>
      <Route exact path="/">
        <Index />
      </Route>
      <Route path="/d6-website">
        <D6Website />
      </Route>
      <Route path="/d6-catalog">
        <D6Catalog />
      </Route>
      <Route path="/heypex-global">
        <HeypexGlobal />
      </Route>
      <Route path="/2nd-street-outpost">
        <Outpost />
      </Route>
    </Switch>
  </Router>
);

export default App;
