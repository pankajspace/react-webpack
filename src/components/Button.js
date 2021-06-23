import React, { useState, Suspense } from "react";

import "./Button.css";

const Text = React.lazy(() => import('./Text'));

export default function Button() {
  const [showText, setShowText] = useState(false)

  return (
    <>
      <button
        className="button"
        onClick={() => setShowText(!showText)}
      >Click Me</button>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        {showText && <Text />}
      </Suspense>
    </>
  )
}