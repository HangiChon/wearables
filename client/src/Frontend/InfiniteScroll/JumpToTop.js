import React from "react";
import styled from "styled-components";

const JumpToTop = () => {
    return (
        <Wrapper>
            <Up
            onClick={() => {
            window.scrollTo({
            top: 0, 
            behavior: 'smooth'
            })
    }}>Back to top</Up>
        </Wrapper>
    )
    
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px;
`
const Up = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`
export default JumpToTop