import React from "react";
import AddToCartBtn from "../Buttons/AddToCartBtn";
import PurchaseBtn from "../Buttons/purchaseBtn";

import {
  ItemWrapper,
  ProductImg,
  ProductName,
  ProductPrice,
  ProductDetails,
  SoldoutBanner,
} from "./PageStyles";
import { ButtonDiv } from "../Buttons/ButtonStyle";
const Item = ({ item }) => {
  return (
    <ItemWrapper>
      <ProductDetails to={`/products/${item._id}`}>Learn More</ProductDetails>
      {item.numInStock === 0 && <SoldoutBanner>Sold Out</SoldoutBanner>}
      <ProductImg src={item.imageSrc} />
      <ProductName>{item.name}</ProductName>
      <ProductPrice>{item.price}</ProductPrice>
      <ButtonDiv>
        <AddToCartBtn item={item} />
        <PurchaseBtn item={item} />
      </ButtonDiv>
    </ItemWrapper>
  );
};

export default Item;
