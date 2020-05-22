
import React from "react";
import styled from "styled-components";



const StyledButton = styled.div`

display: inline-block;
padding: 1em;

.btn {
  
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.5s;
    
  }
  
.btn:hover {
  
    box-shadow: 
    
    3px 3px var(--kk-white),
    5px 5px var(--kk-neutral);
  }

.btn--primary--solid {
  
    background-color: var(--kk-neutral);
    color: var(--kk-white);
    border: none;
  }
  
.btn--warning--solid {
  
    background-color: var(--warning);
    color: var(--white);
    border: none;
  }
  
.btn--primary--outline {
  
  
    background-color: transparent;
    border: 2px solid var(--kk-neutral);
    color: var(--white);
  
  }
  
.btn--warning--outline {
  
  
    background-color: transparent;
    border: 2px solid var(--warning);
    color: var(--white);
  
  }
  
.btn--small {
  
    padding: 10px 50px;
    font-size: 18px;
  }
  
.btn--medium {
  
    padding: 15px 80px;
    font-size: 18px;
  }
  

`;

const STYLES = [

    "btn--primary--solid",
    "btn--warning--solid",
    "btn--primary--outline",
    "btn--warning--outline",
]

const SIZES = ["btn--medium", "btn--small", "btn--large"];

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

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize
    : SIZES[0];

    return (

    <StyledButton>
    <div className="btn--padding">
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick = {onClick} type= {type}>
            {children}
        </button>
    </div>
    </StyledButton>
    )


}