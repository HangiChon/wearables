import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../CustomHooks/useFetch";
import { AppContext } from "../Context/AppContext";
import Spinner from "../LoadingSpinner/Spinner";

import {
  DetailsContainer,
  DetailImage,
  DetailWrapper,
  DetailPrice,
  DetailName,
  NameWrapper,
  BrandLink,
} from "./PageStyles";
import AddToCartBtn from "../Buttons/AddToCartBtn";
import PurchaseBtn from "../Buttons/purchaseBtn";
import { ButtonDiv } from "../Buttons/ButtonStyle";

const ProductDetails = () => {
  const { brands } = useContext(AppContext);
  const { productId } = useParams();
  const { state } = useFetch(`/api/products/${productId}`);
  const selectedProduct = state.data.data;

  if (state.status === "done") {
    return (
      <DetailsContainer>
        <DetailWrapper>
          <DetailImage src={selectedProduct.imageSrc} />
          <DetailPrice>{selectedProduct.price}</DetailPrice>
        </DetailWrapper>
        <DetailWrapper>
          <NameWrapper>
            <DetailName>{selectedProduct.name}</DetailName>
            <DetailName>
              Category:{" "}
              <BrandLink to={`/category/${selectedProduct.category}`}>
                {selectedProduct.category}
              </BrandLink>
            </DetailName>
            <DetailName>
              Made by:{" "}
              {brands.map((brand, i) => {
                if (selectedProduct.companyId === brand._id) {
                  return (
                    <BrandLink to={`/brands/${brand.name}`}>
                      {brand.name}
                    </BrandLink>
                  );
                }
              })}
            </DetailName>
            <ButtonDiv>
              <PurchaseBtn item={selectedProduct} />
              <AddToCartBtn item={selectedProduct} />
            </ButtonDiv>
          </NameWrapper>
        </DetailWrapper>
      </DetailsContainer>
    );
  } else {
    return <Spinner />;
  }
};

export default ProductDetails;
