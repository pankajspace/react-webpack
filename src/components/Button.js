import React, { useState } from "react";

import "./Button.css";
import Text from "./Text";

export default function Button() {
  const [showText, setShowText] = useState(false)

  return (
    <>
      <button
        className="button"
        onClick={() => setShowText(!showText)}
      >Click Me</button>
      {showText && <Text />}
    </>
  )
}