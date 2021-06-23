import React, { Suspense } from "react";

import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
const Button = React.lazy(() => import('./components/Button'));

export default function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Button />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}