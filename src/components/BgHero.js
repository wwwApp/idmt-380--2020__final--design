import * as React from "react";
import styled from "styled-components";

export const BgHero = (props) => {
  const { bgColor, bgSize } = props;

  return (
    <HeroWrapper className="c-bg-hero">
      <div
        className="c-bg-hero__inner"
        style={bgColor && { backgroundColor: `${bgColor}` }}
      >
        <div className={`c-bg-hero__main`}>{props.children}</div>
        <div
          className="c-bg-hero__bottom"
          style={bgSize && { height: `${100 - bgSize}%` }}
        ></div>
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  .c-bg-hero__inner {
    position: relative;
    background-color: var(--kk-neutral);
    display: flex;
    flex-direction: column;
  }

  .c-bg-hero__main {
    z-index: 1;
  }

  .c-bg-hero__bottom {
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--kk-white);
    z-index: 0;
  }
`;
