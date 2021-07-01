import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import StudentData from "./features/studentData/StudentData";
import Students from "./features/students/Students";
// import Assignments from "./features/assignments/Assignments";
import Home from "./features/home/Home";
import Student from "./features/students/Student";

function App() {
  const students = useSelector((state) => state.students);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/assignments">Opdrachten</Link>
            </li> */}
            <li>
              <Link to="/students">Studenten</Link>
            </li>
            <li>
              <Link to="/data">Brongegevens</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          {students.map((student) => (
            <Route key={student.id} path={"/" + student.name}>
              <Student student={student} />
            </Route>
          ))}
          <Route path="/data">
            <StudentData />
          </Route>
          <Route path="/students">
            <Students />
          </Route>
          {/* <Route path="/assignments">
            <Assignments />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
