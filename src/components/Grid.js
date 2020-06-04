import React from "react";
import styled from "styled-components";

export const Grid = (props) => {
  return (
    <StyledGrid
      className={`c-grid c-grid--${props.colClass} ${props.customClass}`}
    >
      <div className="o-container">
        <div className="c-grid__inner o-row">{props.children}</div>
      </div>
    </StyledGrid>
  );
};

const StyledGrid = styled.div`
  .c-grid__inner > * {
    margin: 1rem;
    width: 100%;

    @media only screen and (min-width: 600px) {
      width: calc(50% - 2rem);
    }
  }

  &.c-grid--three-col {
    .c-grid__inner > * {
      @media only screen and (min-width: 992px) {
        width: calc(33.3333% - 2rem);
      }
    }
  }
`;

Grid.defaultProps = {
  colClass: "two-col",
  customClass: "",
};
