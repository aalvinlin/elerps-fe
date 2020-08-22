import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import QuickMatch from "./components/QuickMatch";
import Battle from "./components/Battle";
import Help from "./components/Help";

const App = () => {

  return (
    
    <Switch>
      
      <Route path="/quick_match">
        <QuickMatch />
      </Route>

      <Route path="/battle">
        <Battle />
      </Route>

      <Route path="/help">
        <Help />
      </Route>

      <Route>
        <Home />
      </Route>

    </Switch>
  )

};

export default App;