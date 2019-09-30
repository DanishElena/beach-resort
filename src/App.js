import React from 'react';
import {Home} from "./Components/Home";
import {Room} from "./Components/Room";
import {SingleRoom} from "./Components/SingleRoom";
import {Route, Switch} from "react-router-dom";
import {Navbar} from "./Components/Navbar";


function App() {
  return (
    <>
        <Navbar/>
        <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/rooms/"component={Room} />
        <Route exact path="/rooms/:slug"component={SingleRoom} />
        </Switch>
    </>
  );
}

export default App;
/*<Route component={Error}/>*/