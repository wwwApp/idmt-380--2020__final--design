import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

export const TwoColumnHero = (props) => {
  const {
    title,
    description,
    image,
    btnText,
    bgColor,
    reverseOrder,
    fullImage,
  } = props;

  return (
    <StyledTwoColumn
      className={`c-two-col-hero ${reverseOrder && `c-two-col-hero--reverse`} ${
        bgColor && `bg--${bgColor}`
      }`}
    >
      <div className="o-container">
        <div className="o-row">
          <div className="c-two-col-hero__col c-two-col-hero__col--left">
            <img
              className={`c-two-col-hero__image ${
                fullImage ? "c-two-col-hero__image--full" : ""
              }`}
              src={image}
              alt=""
            />
          </div>
          <div className="c-two-col-hero__col c-two-col-hero__col--right">
            <div className="c-two-col-hero__col__content">
              <h2 className="c-two-col-hero__title f-heading-2">{title}</h2>
              <p className="c-two-col-hero__desc f-tagline">{description}</p>
              {btnText && (
                <div className="c-two-col-hero__cta">
                  <Button>{btnText}</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledTwoColumn>
  );
};

const StyledTwoColumn = styled.div`
  width: 100vw;
  max-height: 50rem;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    height: 100vh;
  }

  &.c-two-col-hero--reverse {
    .c-two-col-hero__col--left {
      @media only screen and (min-width: 768px) {
        order: 2;
      }
    }
  }

  .o-row {
    width: 100%;
    height: 100%;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  .c-two-col-hero__col {
    display: flex;
    align-items: center;
    position: relative;

    @media only screen and (min-width: 768px) {
      width: 50%;
      height: 100%;
    }
  }

  .c-two-col-hero__col--left {
    justify-content: center;
  }

  .c-two-col-hero__image {
    width: 100%;
    height: auto;
    max-height: 30rem;
    object-fit: cover;

    @media only screen and (min-width: 768px) {
      /* width: 70%; */
      max-height: 80%;
    }

    &.c-two-col-hero__image--full {
      width: 100%;
      height: 100%;
      @media only screen and (min-width: 768px) {
        max-height: none;
      }
    }
  }

  .c-two-col-hero__col__content {
    padding: 3rem 1rem;

    @media only screen and (min-width: 768px) {
      padding: 3rem;
    }
  }

  .c-two-col-hero__title {
    margin-bottom: 1.5rem;
  }

  .c-two-col-hero__desc {
    @media only screen and (min-width: 768px) {
      max-width: 70%;
    }
  }

  .c-two-col-hero__cta {
    margin-top: 2rem;

    > * {
      padding: 0;
    }
  }
`;

TwoColumnHero.defaultProps = {
  title: "Somewhat long title",
  description:
    "Aliquam dictum massa vitae orci interdum consectetur. Ut id justo efficitur.",
  image: "https://picsum.photos/id/237/300/500",
};
