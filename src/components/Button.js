import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`

display: block;
padding: 1em;

.btn {
  
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.5s;
  }
  

.btn:focus {
    outline: none;
}

// Primary Button Style

.btn--primary--solid:hover, .btn--primary--outline:hover {
  
    box-shadow: 3px 3px var(--kk-white), 5px 5px var(--kk-purple);
  }

.btn--primary--solid {
  
    background-color: var(--kk-purple);
    color: var(--kk-white);
    border: none;
  }


.btn--primary--outline {
  
  
    background-color: transparent;
    border: 2px solid var(--kk-purple);
    color: var(--kk-purple);
  
  }

// Alert Button Styles

.btn--alert--solid:hover, .btn--alert--outline:hover {
  
    box-shadow: 3px 3px var(--kk-white), 5px 5px var(--kk-orange);
  }
  
.btn--alert--solid {
  
    background-color: var(--kk-orange);
    color: var(--kk-white);
    border: none;
  }

.btn--alert--outline {

    background-color: transparent;
    color: var(--kk-orange);
    border: 2px solid var(--kk-orange);

}
  
// 

  
.btn--small {
  
    padding: 10px 50px;
    font-size: 18px;
  }
  .btn--medium {
    padding: 15px 80px;
    font-size: 18px;
  }

.btn--full-width {

    padding: 15px 80px;
    width: 100%;
    font-size: 18px;
}
  

`;

const STYLES = [

    "btn--primary--solid",
    "btn--primary--outline",
    "btn--alert--solid",
    "btn--alert--outline",
    "btn--disabled--solid",
    "btn--disabled--outline",
    "btn--confirm--solid",
    "btn--confirm--outline",
    "btn--neutral--solid",
    "btn--neutral--outline"
]

const SIZES = ["btn--medium", "btn--small", "btn--large", "btn--full-width"];

export const Button = ( {

    children,
    type,
    onClick,
    buttonStyle,
    buttonSize


}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <StyledButton>
      <div className="btn--padding">
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </div>
    </StyledButton>
  );
};
