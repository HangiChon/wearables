import React from "react";
import Item from "./Item";

import { GridContainer } from "./PageStyles";
const ProductGrid = ({ items }) => {
  return (
    <GridContainer>
      {items.map((item) => {
        return <Item item={item} />;
      })}
    </GridContainer>
  );
};

export default ProductGrid;
