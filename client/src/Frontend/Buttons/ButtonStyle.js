import styled from "styled-components";
import { theme } from "../../GlobalStyles";
import { NavLink } from "react-router-dom";

export const PurchaseButton = styled(NavLink)`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  text-decoration: none;
  color: black;
  margin-bottom: 100px;
  :hover {
    color: orange;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  justify-content: space-around;
  width: 15em;
`;

export const CartButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 30px;
  margin-bottom: 30px;
  :hover {
    color: orange;
  }
`;
export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -20px;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const SubtractBtn = styled.button`
  width: 40px;
  height: 33px;
  font-weight: 500;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  border: 1px solid #e2e2e2;

  &:hover {
    background-color: #ced0d0;
    cursor: pointer;
    transition: 0.3s ease-out;
  }
`;

export const Quantity = styled.div`
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e2e2e2;
  width: 50px;
  height: 33px;
  font-size: 0.8rem;
  font-weight: 400;
`;

export const AddBtn = styled.button`
  width: 40px;
  height: 33px;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e2e2;
  background-color: #f4f4f4;

  &:hover {
    background-color: #ced0d0;
    cursor: pointer;
    transition: 0.3s ease-out;
  }
`;

export const Price = styled.p`
  margin-top: -5px;
  font-weight: 500;
  font-size: 0.9rem;
`;

export const CheckoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
`;

export const CheckoutBtn = styled.button`
  position: absolute;
  bottom: 0;
  margin: 30px 15px;
  width: 90%;
  height: 70px;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: ${theme.accentColor};
  color: black;
  border: 1px solid black;
  transition: 0.3s ease-out;

  &:hover {
    background-color: white;
    cursor: pointer;
  }
`;
