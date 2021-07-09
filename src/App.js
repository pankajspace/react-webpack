import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
const Tile = React.lazy(() => import(/* webpackChunkName: "Tile" */ './components/Tile'));
const About = React.lazy(() => import(/* webpackChunkName: "About" */ './components/About'));

export default function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Tile />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </div>
  )
}
