import React, { Suspense } from "react";

import "./App.css";

const Button = React.lazy(() => import('./components/Button'));

export default function App() {
  return (
    <div className="app">
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Button />
      </Suspense>
    </div>
  )
}