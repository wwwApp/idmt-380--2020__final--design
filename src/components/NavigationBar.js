import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledNavBar = styled.div`
  width: 100vw;
  position: relative;

  @media only screen and (min-width: 600px) {
  }

  .c-nav__inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
  }

  .c-nav__logo {
    font-size: 1.25rem;
    font-weight: 700;
  }

  .c-nav__items {
    display: none;

    position: absolute;
    padding: 2rem;
    left: 0;
    top: 96px;
    flex-direction: column;
    width: 100vw;
    height: calc(100vh - 96px);
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    z-index: 999;
    background-color: var(--kk-white);
    font-size: 2rem;

    @media only screen and (min-width: 768px) {
      justify-content: flex-end;
      position: static;
      height: auto;
      width: auto;
      padding: 0;
      flex-direction: row;
      display: flex;
      overflow: unset;
      font-size: 1rem;
    }
  }

  .c-nav__item {
    display: flex;

    &:not(:last-child) {
      margin-bottom: 2rem;

      @media only screen and (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 0.75rem;
      }
    }

    a {
      padding: 0.5rem;
      transition: all 0.5s;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -0.25rem;
        width: 100%;
        height: 0;
        background-color: var(--kk-black);
        transition: height 0.3s ease-in;
      }

      &:hover {
        /* box-shadow: 0px 0px var(--kk-white), 2px 2px var(--kk-black); */

        &:after {
          height: 0.2rem;
        }
      }

      &.active {
        /* background-color: var(--kk-black); */
        /* color: var(--kk-white); */

        &:after {
          height: 0.2rem;
        }
      }
    }
  }

  .c-nav__hamburger {
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 768px) {
      display: none;
    }
  }

  .c-nav__hamburger__line {
    width: 2rem;
    height: 0.2rem;
    background-color: var(--kk-black);
    transition: all 0.3s ease-in-out;

    &:last-child {
      margin-top: 0.5rem;
    }
  }

  .c-nav__items-wrapper {
    display: flex;
    align-items: center;

    &.is-open {
      .c-nav__items {
        display: flex;
      }

      .c-nav__hamburger__line {
        &:first-child {
          transform: translate3d(0, 5px, 0) rotate(-45deg);
        }

        &:last-child {
          transform: translate3d(0, -5px, 0) rotate(45deg);
        }
      }
    }
  }
`;

export const NavigationBar = (props) => {
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    hamburgerRef.current.addEventListener("click", () => {
      navRef.current.classList.toggle("is-open");

      const isExpanded = navRef.current.classList.contains("is-open");
      hamburgerRef.current.setAttribute("aria-expanded", isExpanded);
    });
  });

  return (
    <StyledNavBar className="c-nav">
      <div className="o-container">
        <div className="c-nav__inner">
          <div className="c-nav__logo">{props.children[0]}</div>
          <div className="c-nav__items-wrapper" ref={navRef}>
            <ul className="c-nav__items">
              {props.children.map((item, index) => {
                if (index != 0) {
                  return (
                    <li key={index} className="c-nav__item">
                      {item}
                    </li>
                  );
                }
              })}
            </ul>

            <button
              className="c-nav__hamburger"
              aria-expanded="false"
              ref={hamburgerRef}
            >
              <span className="c-nav__hamburger__line"></span>
              <span className="c-nav__hamburger__line"></span>
            </button>
          </div>
        </div>
      </div>
    </StyledNavBar>
  );
};
