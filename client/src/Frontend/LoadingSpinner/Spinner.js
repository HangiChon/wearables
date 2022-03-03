import React from "react";
import styled, {keyframes} from "styled-components";
import { FiLoader } from "react-icons/fi";

const Spinner = () => {
    return <div style={{width: "100%", height: "100%"}}><Loading /></div>

}

const spin = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(360deg);
  }
`;

const Loading = styled(FiLoader)`
    width: auto;
    height: auto;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 30px;
    animation: ${spin} 2000ms infinite linear;
`

export default Spinner;