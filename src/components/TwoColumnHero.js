import React from "react";
import styled from "styled-components";

export const TwoColumnHero = (props) => {
  const { title, description, image, fullImage } = props;

  return (
    <StyledTwoColumn className={`c-two-col-hero`}>
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
            </div>
          </div>
        </div>
      </div>
    </StyledTwoColumn>
  );
};

const StyledTwoColumn = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 50rem;
  background-color: var(--kk-neutral);
  overflow: hidden;

  .o-row {
    width: 100%;
    height: 100%;
    flex-direction: column;
    flex-wrap: no-wrap;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  .c-two-col-hero__col {
    width: 100%;
    height: 50%;
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
    max-height: 80%;
    object-fit: cover;

    @media only screen and (min-width: 768px) {
      width: 70%;
    }

    &.c-two-col-hero__image--full {
      width: 100%;
      height: 100%;
      max-height: none;
    }
  }

  .c-two-col-hero__col__content {
    padding: 3rem;
  }

  .c-two-col-hero__title {
    margin-bottom: 1.5rem;
  }

  .c-two-col-hero__desc {
    max-width: 70%;
  }
`;

TwoColumnHero.defaultProps = {
  title: "Somewhat long title",
  description:
    "Aliquam dictum massa vitae orci interdum consectetur. Ut id justo efficitur.",
  image: "https://picsum.photos/id/237/300/500",
};
