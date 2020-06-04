import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  display: inline-block;
  padding: 1em;

  .c-input {
    padding: 0.5em 0.8em;
    font-size: 1.5em;
    font-family: "Josefin Sans", sans-serif;
    border: none;
    box-shadow: 1px 3px 4px var(--kk-grey);
    min-width: 20em;
    transition: all 0.3s ease-in-out;
    outline: 4px transparent;
  }

  .c-input:focus {
    outline: 4px solid var(--kk-trans-green);
    outline-offset: 1px;
  }
`;

const STYLES = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--primary--outline",
  "btn--warning--outline",
];

const SIZES = ["btn--medium", "btn--small", "btn--large"];

export const TextInput = ({
  children,
  type,
  onClick,
  inputStyle,
  inputSize,
  placeholder,
  customClass,
}) => {
  const checkInputStyle = STYLES.includes(inputStyle) ? inputStyle : STYLES[0];

  const checkInputSize = SIZES.includes(inputSize) ? inputSize : SIZES[0];

  return (
    <StyledInput className={`${customClass}`}>
      {children}
      <input
        className={`c-input ${checkInputStyle} ${checkInputSize}`}
        onClick={onClick}
        type={type}
        placeholder={placeholder}
      ></input>
    </StyledInput>
  );
};

TextInput.defaultProps = {
  customClass: "",
};
