import React, { useContext } from "react";
import { PurchaseButton } from "./ButtonStyle";
import { AppContext } from "../Context/AppContext";

const PurchaseBtn = ({ item }) => {
  const { setShoppingItems } = useContext(AppContext);
  const addToCart = () => {
    setShoppingItems((value) => {
      return [...value, { item: { ...item }, quantity: 1 }];
    });
  };
  return (
    <PurchaseButton onClick={addToCart} to="/checkout">
      buy now!
    </PurchaseButton>
  );
};
export default PurchaseBtn;
