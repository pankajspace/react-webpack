import React, { Suspense } from "react";
import styled from "styled-components";

import { ErrorBoundary } from "./ErrorBoundary";
const Button = React.lazy(() => import(/* webpackChunkName: "Button" */ './Button'));

const TileContainer = styled.div`
  display: inline-block;
  padding: 3rem;
  border: .1rem solid grey;
  border-radius: 1rem;
  box-shadow: .1rem 0 .1rem red, -.1rem 0 1rem red;;
  background-color: aliceblue;
`;

export function Tile() {
  return (
    <ErrorBoundary>
      <TileContainer>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Button />
        </Suspense>
      </TileContainer>
    </ErrorBoundary>
  )
}

export default Tile;