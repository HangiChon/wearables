import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../GlobalStyles";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from "uuid";

const Checkout = () => {
  const { shoppingItems, setShoppingItems } = useContext(AppContext);

  const navigate = useNavigate();

  let purchasedItems = [];

  shoppingItems.forEach((item) => {
    purchasedItems.push({ item: item.item._id, quantity: item.quantity });
  });

  const updateInventory = async () => {
    shoppingItems.forEach((item) => {
      fetch(`api/products/${item.item._id}/update`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: item.quantity }),
      })
        .then((response) => response.json())

        .catch((error) => {});
    });
  };

  const submitOrder = async (ev) => {
    ev.preventDefault();

    try {
      const fetchResponse = fetch("/api/order", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      await updateInventory();

      setShoppingItems([]);
      localStorage.clear();
      localStorage.setItem(
        `order_${formData.orderNum}`,
        JSON.stringify(formData)
      );
      navigate("/confirmation");
    } catch (e) {
      return e;
    }
  };

  let initialState = {
    fName: "",
    lName: "",
    email: "",
    address: "",
    city: "",
    province: "",
    country: "",
    creditCard: "",
    expiryDate: "",
    phoneNumber: "",
    orderNum: uuidv4(),
    purchasedItems,
  };

  let readyToSubmit = false;

  const [formData, setFormData] = useState(initialState);

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  if (
    formData.fName !== "" &&
    formData.lName !== "" &&
    formData.address !== "" &&
    formData.city !== "" &&
    formData.creditCard !== "" &&
    formData.province !== "" &&
    formData.country !== "" &&
    formData.phoneNumber !== "" &&
    formData.expiryDate !== "" &&
    formData.email !== ""
  ) {
    readyToSubmit = true;
  }

  let count = shoppingItems.reduce((acc, cur) => {
    return acc + cur.quantity * Number(cur.item.price.substr(1));
  }, 0);

  return (
    <MainWrapper>
      <Wrapper>
        <ContactWrapper onSubmit={submitOrder}>
          <H3>Contact Information</H3>
          <InputContainer>
            <Input
              placeholder="email"
              type="email"
              required
              onChange={(ev) => handleChange(ev.target.value, "email")}
            />
          </InputContainer>
          <H3>Shipping Address</H3>
          <InputRow>
            <InputContainer>
              <NameInput
                placeholder="first name"
                type="text"
                required
                onChange={(ev) => handleChange(ev.target.value, "fName")}
              />
            </InputContainer>
            <InputContainer>
              <LastNameInput
                placeholder="last name"
                type="text"
                required
                onChange={(ev) => handleChange(ev.target.value, "lName")}
              />
            </InputContainer>
          </InputRow>
          <InputContainer>
            <Input
              placeholder="address"
              type="text"
              required
              onChange={(ev) => handleChange(ev.target.value, "address")}
            />
          </InputContainer>
          <InputRow>
            <InputContainer>
              <CityInput
                placeholder="city"
                type="text"
                required
                onChange={(ev) => handleChange(ev.target.value, "city")}
              />
            </InputContainer>
            <InputContainer>
              <CityInput
                placeholder="province"
                type="text"
                required
                onChange={(ev) => handleChange(ev.target.value, "province")}
              />
            </InputContainer>
            <InputContainer>
              <CountryInput
                placeholder="country"
                type="text"
                required
                onChange={(ev) => handleChange(ev.target.value, "country")}
              />
            </InputContainer>
          </InputRow>
          <InputContainer>
            <Input
              placeholder="phone number"
              type="text"
              required
              onChange={(ev) => handleChange(ev.target.value, "phoneNumber")}
            />
          </InputContainer>
          <InputRow>
            <InputContainer>
              <NameInput
                placeholder="credit card"
                type="text"
                required
                onChange={(ev) => handleChange(ev.target.value, "creditCard")}
              />
            </InputContainer>
            <InputContainer>
              <LastNameInput
                placeholder="expiration date"
                type="text"
                required
                onChange={(ev) => handleChange(ev.target.value, "expiryDate")}
              />
            </InputContainer>
          </InputRow>
          <BtnWrapper onClick={submitOrder}>
            {readyToSubmit ? (
              <Btn type="submit">Confirm</Btn>
            ) : (
              <Btn type="submit" disabled>
                Confirm
              </Btn>
            )}
          </BtnWrapper>
        </ContactWrapper>
      </Wrapper>
      <CartWrapper>
        <CartContainer>
          <ItemsContainer>
            {shoppingItems.map((item) => {
              return (
                <ItemContainer>
                  <div>
                    <ItemImage src={item.item.imageSrc} />
                  </div>
                  <Quantity>{item.quantity}</Quantity>
                  <ItemName>{item.item.name}</ItemName>
                  <p>{item.item.price}</p>
                </ItemContainer>
              );
            })}
          </ItemsContainer>
          <Divider />

          <TotalWrapper>
            <p>Total</p>
            <p>CAD ${count}</p>
          </TotalWrapper>
        </CartContainer>
      </CartWrapper>
    </MainWrapper>
  );
};

const TotalWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 900;
`;

const ItemName = styled.p`
  width: 300px;
  font-size: 0.9rem;
  font-weight: 600;
`;

const Quantity = styled.p`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  font-size: 13px;
  transform: translate(-15px, -50px);
  background-color: grey;
  color: #fff;
  border-radius: 50%;
`;

const ItemImage = styled.img`
  width: 80px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

const ItemsContainer = styled.div`
  height: 420px;
  overflow: scroll;
`;

const CartContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Btn = styled.button`
  width: 200px;
`;

const BtnWrapper = styled.div`
  margin: 50px 0;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  font-size: 14px;
  width: 500px;
  height: 40px;
  border-radius: 5px;

  &:focus {
    outline-color: ${theme.accentColor};
  }
`;

const CityInput = styled.input`
  font-size: 14px;
  width: 160px;
  height: 40px;
  margin-right: 10px;
  font-size: 1rem;
  border-radius: 5px;

  &:focus {
    outline-color: ${theme.accentColor};
  }
`;

const CountryInput = styled.input`
  font-size: 14px;
  width: 160px;
  height: 40px;
  border-radius: 5px;

  &:focus {
    outline-color: ${theme.accentColor};
  }
`;

const NameInput = styled.input`
  font-size: 14px;
  width: 245px;
  height: 40px;
  margin-right: 10px;
  border-radius: 5px;

  &:focus {
    outline-color: ${theme.accentColor};
  }
`;

const LastNameInput = styled.input`
  font-size: 14px;
  width: 245px;
  height: 40px;
  border-radius: 5px;

  &:focus {
    outline-color: ${theme.accentColor};
  }
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const H3 = styled.h3`
  margin: 0;
  margin-top: 40px;
  font-weight: 500;
`;

const ContactWrapper = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 30px;
`;

const CartWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 30px;
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f4f4f4;
`;

const Divider = styled.hr`
  border: 0.5px solid black;
  width: 100%;
  margin-top: 20px;
  margin-bottom: -12px;
`;

export default Checkout;
