    import { useEffect } from "react";
    
    //I tried so hard to make this work with useFetch hook... :( 


    //called by InfiniteScroll component
    export const loadMoreItems = async (url, page, setPage, displayItems, setDisplayItems, setPrevItems) => {
        await fetch(url)
        .then (res => res.json() )
        .then ((data) => {
            setPrevItems([...displayItems])
            if (data.data) {
            setDisplayItems([...displayItems, ...data.data])
            setPage(page + 1)}
            })
    }