import { Text } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFeed, setFeed } from "./feedReducer";

const { fetchFeed } = require("../utils/http");

export default function FetchData() {
    const feed = useSelector(selectFeed)
    const dispatch = useDispatch()

    const setFetchedFeed = async () =>{
        try {
            const response = await fetchFeed();
            dispatch(setFeed(response)); 
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(()=>{

        if (!feed || (Array.isArray(feed) && feed.length === 0)) {
            setFetchedFeed();
        }
    },[])

    return (
        <>
            {/* <Text>...Loading</Text> */}
        </>
    )
}
