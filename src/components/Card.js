import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export default function Card(props) {
  const { data, noText } = props;
  const ref = useRef(null);

  useEffect(() => {
    const cardRef = ref.current;
    let newHeight;
    if (noText) {
      newHeight = `${cardRef.offsetWidth * 1}px`;
    } else {
      newHeight = `${cardRef.offsetWidth * 1.35}px`;
    }
    cardRef.style.height = newHeight;
  });

  return (
    <StyledCard
      className={`c-card ${noText ? "c-card--no-text" : ""}`}
      ref={ref}
    >
      <a href="#" class="c-card__link">
        <div className="c-card__image-wrapper">
          <img src={data.image} alt="Card Image" />
        </div>

        <div className="c-card__tag-wrapper">
          {data.tag ? <span className="c-card__tag">{data.tag}</span> : null}
        </div>
        <div className={`c-card__text-wrapper ${noText ? "u-sr-only" : ""}`}>
          <h3 className="c-card__title f-heading-3">{data.title}</h3>
          <p className="c-card__desc">{data.description}</p>
          {
            // button can come here
          }
        </div>
      </a>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 18rem;
  position: relative;
  background-color: var(--kk-neutral);

  .c-card__link {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .c-card__image-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .c-card__tag-wrapper {
    min-width: 2rem;
    min-height: 0.2rem;
    background-color: var(--kk-black);
    position: absolute;
    top: 1rem;
    left: -0.75rem;
    z-index: 3;
    color: var(--kk-white);
    display: flex;
  }

  .c-card__tag {
    text-align: center;
    padding: 0.25rem 0.75rem;
  }

  .c-card__text-wrapper {
    max-height: 10rem;
    padding: 1.5rem 1rem;
    width: 100%;
    color: var(--kk-white);
    z-index: 2;
    text-align: center;
    background: linear-gradient(
      0deg,
      var(--kk-black) 0%,
      rgba(78, 78, 78, 0.6474964985994398) 43%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .c-card__title {
    margin-bottom: 1rem;
  }

  .c-card__desc {
  }
`;
