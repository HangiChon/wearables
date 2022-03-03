import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  margin: 20px 0 0 auto;
  width: 275px;
  height: 50px;
  position: relative;
`;

export const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1em;
  width: 100%;
  height: 100%;
  padding-left: 10px;

  &:focus {
    outline: none;
  }
`;

export const MagGlassImg = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  top: 15px;
`;

export const UlWrapper = styled.ul`
  background-color: white;
  border-radius: 5px;
  position: absolute;
  top: 40px;
  width: 260px;
  height: auto;
  z-index: 1;
  padding-left: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
