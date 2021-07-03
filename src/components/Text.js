import React, { useState } from "react";

import "./Text.scss";
import { ErrorBoundary } from "./ErrorBoundary";

export function Text() {
  import(/* webpackChunkName: "utils" */ "../utils/utils").then(utils => {
    let sum = utils.sum(5, 10);
    setResult(sum);
  });

  const [result, setResult] = useState(0);
  
  // throw new Error();  //uncomment this to see how ErrorBoundary looks.

  return (
    <ErrorBoundary>
      <div className="text">Sum is: {result} </div>
    </ErrorBoundary>
  )
}

export default Text;