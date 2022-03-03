import React from "react";
import SalesBanner from "../Banners/SalesBanner";
import ProductGrid from "./ProductGrid";
import { Container } from "./PageStyles";
import { useParams } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component"
import Spinner from "../LoadingSpinner/Spinner";
import { useInitFetch } from "../InfiniteScroll/useInitFetch";
import { loadMoreItems } from "../InfiniteScroll/functions";
import JumpToTop from "../InfiniteScroll/JumpToTop";

const ShopByBrand = () => {
  const { brandName } = useParams();

  const {
    page, 
    setPage, 
    displayItems, 
    setDisplayItems, 
    prevItems, 
    setPrevItems} = useInitFetch(`/api/brands/${brandName}?page=0&limit=20`, brandName);

  const url =`/api/brands/${brandName}?page=${page}&limit=20`

  if (displayItems.length > 0) {
    return (
      <Container>
        <InfiniteScroll
            dataLength={displayItems.length}
            next={() => {
                loadMoreItems(url, page, setPage, displayItems, setDisplayItems, setPrevItems)
            }}
            hasMore={prevItems.length < displayItems.length}
            loader={<Spinner />}
            endMessage={<JumpToTop />}
        >
          <SalesBanner />
          <ProductGrid items={displayItems} />
        </InfiniteScroll>
      </Container>
    );
  } else {
    return <Spinner />;
  }
};

export default ShopByBrand;
