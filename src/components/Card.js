import React from "react";
import styled from "styled-components";

export default function Card() {
  return <StyledCard className="c-card">Card Text</StyledCard>;
}

const StyledCard = styled.div`
  width: 300px;
  height: 400px;
  background-color: var(--kk-blue);
`;
