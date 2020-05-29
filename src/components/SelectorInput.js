import React from "react";
import Select from "react-select";
import styled from "styled-components";

const StyledInput = styled.div`

display: inline-block;
padding: 1em;

.c-input {

    padding: 0.5em 0.8em;
    font-size: 1.5em;
    font-family: 'Josefin Sans', sans-serif;
    border: none;
    box-shadow: 1px 3px 4px var(--kk-grey);
    min-width: 15em;
    transition: all 0.3s ease-in-out;
    outline: 4px transparent;
}

.c-select {

    font-size: 1.5em;
    font-family: 'Josefin Sans', sans-serif;
    border: none;
    min-width: 15em;
    box-shadow: 1px 3px 4px var(--kk-grey);
}

.react-select__control {

    border-radius: 0;
    border: none;

}

.react-select__control--is-focused {

    border-radius: 0;
    border: none;
    outline: 4px solid var(--kk-trans-green);
    outline-offset: 1px;
    box-shadow: none;
}

.react-select__menu {

    margin-top: 0;
    margin-bottom: 0;
    border-radius: 0;
}

.react-select__option--is-focused {

    background-color: var(--kk-trans-green);

}

.react-select__option--is-selected, .react-select__option--is-clicked {

    background-color: var(--kk-green);

}   

.c-select:focus {

    outline: 4px solid var(--kk-trans-green);
    outline-offset: 1px;
}



.select-selected.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 7px;
  }

`;


export const SelectorInput = ( {

    options
    
}) => {

    return (

    <StyledInput>
        <Select className={`c-select react-select-container`} classNamePrefix="react-select" options={options} />
    </StyledInput>
    )


}
