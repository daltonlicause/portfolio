import React from "react";
import Index from "./pages/index/index";
import D6Website from "./pages/projects/d6Website";
import D6Catalog from "./pages/projects/d6Catalog";
import HeypexGlobal from "./pages/projects/heypexGlobal";
import Outpost from "./pages/projects/2ndStreetOutpost";
import VGANChocolates from "./pages/projects/vganChocolates";
import PageNotFound from "./pages/404"
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
 
import {
  Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => ( 
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/d6-website" component={D6Website} />
      <Route path="/d6-catalog" component={D6Catalog} />
      <Route path="/heypex-global" component={HeypexGlobal} />
      <Route path="/2nd-street-outpost" component={Outpost} />
      <Route path="/vgan-chocolates" component={VGANChocolates} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
);

export default App;
