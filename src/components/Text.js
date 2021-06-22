import React, { useState } from "react";

import "./Text.scss";

export default function Text() {

  import("../utils/utils").then(utils => {
    let sum = utils.sum(5, 10);
    setResult(sum);
  });

  const [result, setResult] = useState(0);

  return (
    <>
      <div className="text">Sum is: {result} </div>
    </>
  )
}