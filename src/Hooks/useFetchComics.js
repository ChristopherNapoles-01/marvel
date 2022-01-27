import { useState,useEffect } from "react";
import axios from "axios";
const useFetchComics = (url2)=> {
    const [comicData,setComicData] = useState(null);
    useEffect(()=>{
        const fetchData = async () =>{
            const response = await axios.get(url2);
            const data = await response.data;
            setComicData(data.data.results);
        }
        fetchData();

    },[url2])
    return {comicData};
}
export default useFetchComics;