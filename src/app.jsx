import React from "react";
import Index from "./pages/index";
import D6Website from "./pages/d6-website";
import D6Catalog from "./pages/d6-catalog";
import HeypexGlobal from "./pages/heypex-global";
import Outpost from "./pages/2nd-street-outpost";

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
