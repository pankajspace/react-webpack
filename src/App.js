import React, { Suspense } from "react";

import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
const Tile = React.lazy(() => import(/* webpackChunkName: "Tile" */ './components/Tile'));

export default function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Tile />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}