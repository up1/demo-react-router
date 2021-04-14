import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Hello from "./components/Hello";
import Thankyou from "./components/Thankyou";

const App = () => (
  <Router>
    <Route exact path="/" component={Hello} />
    <Route path="/thankyou" component={Thankyou} />
  </Router>
);

render(<App />, document.getElementById("root"));

export default App;
