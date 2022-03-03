import React, { useEffect, useState } from "react";
import SalesBanner from "../Banners/SalesBanner";
import ProductGrid from "./ProductGrid";
import { Container } from "./PageStyles";
import Spinner from "../LoadingSpinner/Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInitFetch } from "../InfiniteScroll/useInitFetch";
import { loadMoreItems } from "../InfiniteScroll/functions";

const AllProducts = () => {
    const {
        page, 
        setPage, 
        displayItems, 
        setDisplayItems, 
        prevItems, 
        setPrevItems} = useInitFetch(`/api/products?page=0&limit=20`);

    //url to fetch, 'limit' is static currently
    const url = `/api/products?page=${page}&limit=20`

    if (displayItems.length > 0) {
    return (
    <Container>
        <InfiniteScroll
            dataLength={displayItems.length}
            next={() => {
                loadMoreItems(url, page, setPage, displayItems, setDisplayItems, setPrevItems)
            }}
            hasMore={prevItems.length < displayItems.length}
            scrollThreshold={0.8}
            loader={<Spinner />}
            endMessage={<div>End of Page</div>}
        >
            <SalesBanner />
            <ProductGrid items={displayItems} key={Math.floor(Math.random() * 10000)}/>
        </InfiniteScroll>
    </Container>
    );
    } else {
        return <Spinner />
    }
};

export default AllProducts;