import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
import { theme } from "../../GlobalStyles";

const Brands = () => {
  const { brands } = useContext(AppContext);

  return (
    <Wrapper>
      <Hover>
        <div>
          <Title tabIndex={0} role="button">
            Shop By Brand
          </Title>
        </div>
        <UlWrapper style={{ maxHeight: 500, overflow: "auto" }}>
          {brands.map((brand, i) => (
            <li key={`brand-${i}`}>
              <Link to={`/brands/${brand.name}`}>
                <ItemButton type="button">{brand.name}</ItemButton>
              </Link>
            </li>
          ))}
        </UlWrapper>
      </Hover>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  position: relative;
`;

const UlWrapper = styled.ul`
  background-color: white;
  border-radius: 5px;
  position: absolute;
  display: none;
  width: 200px;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Hover = styled.div`
  &:hover {
    ${UlWrapper} {
      display: block;
    }
  }
`;

const Title = styled.div`
  cursor: pointer;

  &:hover {
    color: ${theme.accentColor};
  }
`;

const ItemButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  width: 100%;
  text-align: left;
  padding: 5px 5px 5px 10px;
  font-size: 14px;
  text-transform: uppercase;
  &:hover {
    color: ${theme.accentColor};
  }
`;

export default Brands;
