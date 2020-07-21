import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import loglist from "./components/log-list.component";
import EditLog from "./components/edit-log.component";
import CreateLog from "./components/create-log.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
    <div className ='container'>
    <Navbar/> 
    <br/>
      <Route path="/" exact component={loglist} />
      <Route path="/edit/:id" component={EditLog} />
      <Route path="/create" component={CreateLog} />
      <Route path="/user" component={CreateUser} />
    </div>
    </Router>
  );
}

export default App;
