import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from "react-router-dom";
import './App.scss';

export default function App() {
  return (
    <div>
      <header>Notice Board</header>
      <Router>
        <div>
          <nav className="navMenu">
            <ul>
              <li>
                <NavLink to="/home" activeClassName="selected">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="selected">About</NavLink>
              </li>
              <li>
                <NavLink to="/users" activeClassName="selected">Users</NavLink>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch className="router">
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

