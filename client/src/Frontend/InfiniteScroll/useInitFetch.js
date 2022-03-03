import { useEffect, useState } from "react";

    //populates data for initial load
    export const useInitFetch = (url, dependency) => {
        
        //page = cur "page" in infinite scroll
        const [page, setPage] = useState(0);
        //array of items to display, new fetch appended to array
        const [displayItems, setDisplayItems] = useState([])
        //compare length to displayItems to determine if we need to keep rendering pages...
        const [prevItems, setPrevItems] = useState([])

        useEffect(() => {
        setPage(0)
        setPrevItems([])
        let cancelRequest = false;
        const fetchInitData = async () => {
            if (!cancelRequest) {
            await fetch(url)
            .then (res => res.json() )
            .then ((data) => {
                if (data.data) {
                setDisplayItems([...data.data])
                setPage(1)
                }
                })
            }
        }
        fetchInitData();

        //cleanup function
        return function cleanup() {
            cancelRequest = true;
        };
    }, [dependency])

    return {page, setPage, displayItems, setDisplayItems, prevItems, setPrevItems}
    }