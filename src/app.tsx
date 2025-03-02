import * as React from "react";
import Index from "./pages/index/index";
import OCDashboard from './pages/projects/ocDashboard';
import OCNotifier from './pages/projects/ocNotifier';
import D6Website from "./pages/projects/d6Website";
import D6Catalog from "./pages/projects/d6Catalog";
import HeypexGlobal from "./pages/projects/heypexGlobal";
import Outpost from "./pages/projects/2ndStreetOutpost";
import VGANChocolates from "./pages/projects/vganChocolates";
import PageNotFound from "./pages/404";
import ScrollToTop from "./components/scrollToTop";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => ( 
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route index path="/" element={<Index />} />
      <Route path="/oc-dashboard" element={<OCDashboard />} />
      <Route path="/oc-notifier" element={<OCNotifier />} />
      <Route path="/d6-catalog" element={<D6Catalog />} />
      <Route path="/d6-website" element={<D6Website />} />
      <Route path="/d6-catalog" element={<D6Catalog />} />
      <Route path="/heypex-global" element={<HeypexGlobal />} />
      <Route path="/2nd-street-outpost" element={<Outpost />} />
      <Route path="/vgan-chocolates" element={<VGANChocolates />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
