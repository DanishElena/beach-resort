import React, {Fragment} from 'react';
import styles from "./App.css";
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
        <Route path="/rooms/"component={Room} />
        <Route path="/rooms/:single"component={SingleRoom} />
        </Switch>
    </>
  );
}

export default App;
/*<Route component={Error}/>*/