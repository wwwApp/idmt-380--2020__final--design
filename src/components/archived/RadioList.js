import React from "react";
import styled from "styled-components";
const StyledRadio = styled.div` `;

const initialList = [];
 
const RadioList = () => {
  const [list, setList] = React.useState(initialList);
 
  return (
    <RadioList>

    <input type="checkbox">
        {list.map(item => (
            <span className="checkmark" key={item}>
                {item}
            </span>
        ))}
    </input>

    </RadioList>
  );
};
 
export default RadioList;