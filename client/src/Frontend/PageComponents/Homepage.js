import React from "react";
import SalesBanner from "../Banners/SalesBanner";
import ProductGrid from "./ProductGrid";
import { Container } from "./PageStyles";
import Items from "./TempItems";
import SearchBar from "../InputFields/SearchBar";

const Homepage = () => {
  return (
    <Container>
      <SalesBanner />
      <SearchBar />
      <ProductGrid items={Items}/>
    </Container>
  );
};

export default Homepage;
