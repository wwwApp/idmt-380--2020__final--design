import React from "react";
import styled from "styled-components";

export default function Card(props) {
  return (
    <StyledGrid className={`c-grid c-grid--${props.colClass}`}>
      <div className="o-container">
        <div className="c-grid__inner o-row">{props.children}</div>
      </div>
    </StyledGrid>
  );
}

const StyledGrid = styled.div`
  .c-grid__inner > * {
    margin: 1rem;
    width: 100%;

    @media only screen and (min-width: 600px) {
      width: 45%;
    }
  }

  &.c-grid--three-col {
    .c-grid__inner > * {
      @media only screen and (min-width: 992px) {
        width: 30%;
      }
    }
  }
`;
