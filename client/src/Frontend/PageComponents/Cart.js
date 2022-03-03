import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../GlobalStyles";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "../Context/AppContext";

const Cart = ({ cartDisplay, handleClickOnCart }) => {
  const { shoppingItems, setShoppingItems } = useContext(AppContext);

  const handleRemove = (item) => {
    ///need to remove it from localstorage also
    let updatedShoppingItems = [...shoppingItems];
    updatedShoppingItems.splice(
      updatedShoppingItems.findIndex((i) => i.item._id === item.item._id),
      1
    );
    setShoppingItems(updatedShoppingItems);
  };

  const handleAdd = (item) => {
    // need to update local storage as well
    //
    if (item.quantity < item.item.numInStock) {
      const updatedItem = {
        ...item,
        quantity: item.quantity + 1,
      };
      let updatedShoppingItems = [];
      shoppingItems.forEach((e) => {
        if (e.item._id === item.item._id) {
          updatedShoppingItems.push(updatedItem);
        } else {
          updatedShoppingItems.push(e);
        }
      });
      setShoppingItems(updatedShoppingItems);
    }
  };

  const handleSubstract = (item) => {
    //needs to update local storage as well

    if (item.quantity >= 2) {
      const updatedItem = {
        ...item,
        quantity: item.quantity - 1,
      };
      let updatedShoppingItems = [];
      shoppingItems.forEach((e) => {
        if (e.item._id === item.item._id) {
          updatedShoppingItems.push(updatedItem);
        } else {
          updatedShoppingItems.push(e);
        }
      });
      setShoppingItems(updatedShoppingItems);
    }
  };

  let total = shoppingItems.reduce((acc, cur) => {
    return acc + cur.quantity * Number(cur.item.price.substr(1));
  }, 0);

  return (
    <CartContainer cartDisplay={cartDisplay}>
      <Title>Your shopping cart</Title>
      <Icon onClick={handleClickOnCart}>
        <CloseIcon />
      </Icon>
      <Hr />
      <ItemsContainer>
        {shoppingItems.map((item) => {
          return (
            <ItemWrapper key={item.item._id}>
              <ImageWrapper>
                <ItemImage src={item.item.imageSrc} />
              </ImageWrapper>
              <ItemInnerWrapper>
                <NameWrapper>
                  <ItemName>{item.item.name}</ItemName>
                  <ItemDeleteIcon onClick={() => handleRemove(item)} />
                </NameWrapper>
                <QuantityWrapper>
                  <QuantityContainer>
                    <SubtractBtn
                      onClick={() => handleSubstract(item)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </SubtractBtn>
                    <Quantity>{item.quantity}</Quantity>
                    <AddBtn onClick={() => handleAdd(item)}>+</AddBtn>
                  </QuantityContainer>
                  <Price>{item.item.price}</Price>
                </QuantityWrapper>
              </ItemInnerWrapper>
            </ItemWrapper>
          );
        })}
      </ItemsContainer>
      <Link to="/checkout" onClick={handleClickOnCart}>
        <CheckoutBtn disabled={!shoppingItems[0]}>
          {shoppingItems[0]
            ? `CHECK OUT $${total.toFixed(2)}`
            : "YOUR CART IS EMPTY"}
        </CheckoutBtn>
      </Link>
    </CartContainer>
  );
};

const CartContainer = styled.aside`
  position: fixed;
  z-index: 999;
  right: 0;
  top: 0;
  width: 500px;
  height: 100%;
  background: white;
  display: flex;
  align-items: flex-start;
  transition: 0.5s ease-in-out;
  right: ${({ cartDisplay }) => (cartDisplay ? "0" : "-100%")};
  box-shadow: ${({ cartDisplay }) =>
    cartDisplay ? "0 0 0 3000px rgb(0,0,0, 0.8)" : "0"};
`;

const Title = styled.h1`
  font-size: 1.2rem;
  position: absolute;
  top: 0.5rem;
  left: 1.5rem;
  font-weight: bold;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: black;

  &:hover {
    color: ${theme.accentColor};
    transition: 0.5s ease-out;
  }
`;

const Hr = styled.hr`
  border-top: 1px solid #e8e8e8;
  position: absolute;
  top: 5rem;
  left: 1.5rem;
  margin: 0 auto;
  width: 90%;
`;

const ItemsContainer = styled.div`
  padding-bottom: 30px;
  position: absolute;
  top: 5rem;
  left: 1.5rem;
  width: 476px;
  height: 85%;
  overflow-y: scroll;
`;

const ItemWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  width: 100%;
  position: relative;
`;

const ItemInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 30px;
  margin-right: 30px;
  width: 66.66667%;
`;

const NameWrapper = styled.div`
  display: flex;
`;
const QuantityWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: 33%;
`;

const ItemImage = styled.img``;

const ItemName = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -20px;
`;

const SubtractBtn = styled.button`
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

const Quantity = styled.div`
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

const AddBtn = styled.button`
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

const Price = styled.p`
  margin-top: -5px;
  font-weight: 500;
  font-size: 0.9rem;
`;

const ItemDeleteIcon = styled(FaTimes)`
  position: absolute;
  top: 0;
  right: 30px;
  font-size: 1.4rem;

  &:hover {
    color: ${theme.accentColor};
    transition: 0.3s ease-out;
    cursor: pointer;
  }
`;

const CheckoutBtn = styled.button`
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

export default Cart;
