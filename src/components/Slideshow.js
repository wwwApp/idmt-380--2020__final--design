import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  overflow: hidden;
  position: relative;

  .c-slider__items {
    @media only screen and (max-width: 768px) {
      padding-bottom: 5rem;
    }
  }

  .c-slider__dots {
    position: absolute;
    left: 0;
    width: 100%;
    padding: 0 2rem;
    max-width: 1200px;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 4px;

    display: flex !important;
    flex-direction: row-reverse;
    transform: rotate(180deg);

    li.slick-active {
      .c-slider__dot {
        height: 5rem;
      }
    }
  }

  .c-slider__dot {
    width: 0.25rem;
    height: 3rem;
    background-color: var(--kk-black);
    margin-left: 1.5rem;

    transition: height 0.3s ease-in-out;

    &:hover {
      height: 5rem;
    }
  }

  .slick-arrow {
    position: absolute;
    width: 3rem;
    height: 3rem;
    bottom: 0;
    z-index: 2;

    &:before {
      color: var(--kk-black);
      font-size: 2.5rem;
    }
  }

  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 0;
  }
`;

export const Slideshow = (props) => {
  const slider = useRef(null);
  let dots;

  useEffect(() => {
    dots = slider.current.querySelectorAll(".c-slider__dot");
  });

  const settings = {
    arrows: props.showControls ? true : false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    className: "c-slider__items",
    dotsClass: "c-slider__dots",
    customPaging: (i) => {
      return (
        <button className="c-slider__dot" aria-current="false">
          <span className="u-sr-only">Slide {i + 1}</span>
        </button>
      );
    },
    beforeChange: (oldIndex, newIndex) => {
      dots[oldIndex].setAttribute("aria-current", false);
      dots[newIndex].setAttribute("aria-current", true);
    },
  };

  return (
    <StyledSlider className={`c-slider ${props.customClass}`} ref={slider}>
      <Slider {...settings}>
        {props.children.map((item, index) => {
          return (
            <div key={index} className="c-slider__item">
              {item}
            </div>
          );
        })}
      </Slider>
    </StyledSlider>
  );
};

Slideshow.defaultProps = {
  customClass: "",
};
