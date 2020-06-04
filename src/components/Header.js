import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100vw;
  position: relative;

  .c-header__inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
  }

  .c-header__items {
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

  .c-header__item {
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

  .c-header__hamburger {
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

  .c-header__hamburger__line {
    width: 2rem;
    height: 0.2rem;
    background-color: var(--kk-black);
    transition: all 0.3s ease-in-out;

    &:last-child {
      margin-top: 0.5rem;
    }
  }

  .c-header__items-wrapper {
    display: flex;
    align-items: center;

    &.is-open {
      .c-header__items {
        display: flex;
      }

      .c-header__hamburger__line {
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

export const Header = (props) => {
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  const { children, logo, customClass } = props;

  useEffect(() => {
    if (hamburgerRef.current) {
      hamburgerRef.current.addEventListener("click", () => {
        navRef.current.classList.toggle("is-open");

        const isExpanded = navRef.current.classList.contains("is-open");
        hamburgerRef.current.setAttribute("aria-expanded", isExpanded);
      });
    }
  });

  return (
    <StyledHeader className={`c-header ${customClass}`}>
      <div className="o-container">
        <div className="c-header__inner">
          <div className="c-header__logo">{logo}</div>
          {children && (
            <div className="c-header__items-wrapper" ref={navRef}>
              <nav>
                <ul className="c-header__items">
                  {children.map((item, index) => {
                    return (
                      <li key={index} className="c-header__item">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <button
                className="c-header__hamburger"
                aria-expanded="false"
                ref={hamburgerRef}
              >
                <span className="c-header__hamburger__line"></span>
                <span className="c-header__hamburger__line"></span>
              </button>
            </div>
          )}
        </div>
      </div>
    </StyledHeader>
  );
};

Header.defaultProps = {
  customClass: "",
};
