import React, { useState, Suspense } from "react";

import "./Button.css";
import { ErrorBoundary } from "./ErrorBoundary";
const Text = React.lazy(() => import('./Text'));

export default function Button() {
  const [showText, setShowText] = useState(false)

  // throw new Error();  //uncomment this to see how ErrorBoundary looks.

  return (
    <ErrorBoundary>
      <button
        className="button"
        onClick={() => setShowText(!showText)}
      >Click Me</button>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        {showText && <Text />}
      </Suspense>
    </ErrorBoundary>
  )
}