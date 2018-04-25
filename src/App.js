import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import Header from "./elements/header";

import './App.css';


const App = () => (
  <Router>
    <div className="container">
        <Header />




      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />


    </div>
  </Router>
);


const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;