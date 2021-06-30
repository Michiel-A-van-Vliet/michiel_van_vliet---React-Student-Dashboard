import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import CounterApp from "./features/counter/CounterApp";
import StudentData from "./features/studentData/StudentData";
import Students from "./features/students/Students";
import Home from "./features/home/Home";
// import Chart from "./features/chart/Chart";
import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <Home />
    //   <StudentData />
    //   {/* <Chart /> */}
    // </div>

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/students">Studenten</Link>
            </li>
            <li>
              <Link to="/data">Brongegevens</Link>
            </li>
          </ul>
        </nav>
        <hr />

        <Switch>
          <Route path="/data">
            <StudentData />
          </Route>
          <Route path="/students">
            <Students />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
