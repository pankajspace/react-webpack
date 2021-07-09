import React from "react";

import { ErrorBoundary } from "./ErrorBoundary";

export function About() {
  return (
    <ErrorBoundary>
      <div> About Us </div>
    </ErrorBoundary>
  )
}

export default About;
