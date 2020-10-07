import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Project1 from "./projectPages/Project1";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/project1" component={Project1}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
     </Router> 
  );
}

export default App;
