import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
const App = () => {
  return (<>
      <Router>
          <Route path='/chat' exact component={Chat} />
          <Route path='/' exact component={Join} />
      </Router>
  </>);
};
export default App;
