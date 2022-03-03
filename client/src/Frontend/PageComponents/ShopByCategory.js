import React, { useEffect, useState } from "react";
import SalesBanner from "../Banners/SalesBanner";
import ProductGrid from "./ProductGrid";
import { Container } from "./PageStyles";
import { useParams } from "react-router";
import Spinner from "../LoadingSpinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import JumpToTop from "../InfiniteScroll/JumpToTop";
import { loadMoreItems } from "../InfiniteScroll/functions";
import { useInitFetch } from "../InfiniteScroll/useInitFetch";

const ShopByCategory = () => {

    const {categoryName} = useParams();

    const {
        page, 
        setPage, 
        displayItems, 
        setDisplayItems, 
        prevItems, 
        setPrevItems} = useInitFetch(`/api/categories/${categoryName}?page=0&limit=20`, categoryName);

    //url to fetch, 'limit' is static currently
    const url = `/api/categories/${categoryName}?page=${page}&limit=20`
    
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
            <ProductGrid items={displayItems}/>
        </InfiniteScroll>
    </Container>
    );
    } else {
        return <Spinner />
    }
};

export default ShopByCategory;