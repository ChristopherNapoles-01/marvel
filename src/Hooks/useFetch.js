import { useState,useEffect } from "react";
import axios from "axios";
const useFetch = (url)=> {
    const [details,setDetails] = useState(null);
    useEffect(()=>{
        const fetchData = async () =>{
            const response = await axios.get(url);
            const data = await response.data;
            setDetails(data.data.results);
        }
        fetchData();

    },[url])
    return {details};
}
export default useFetch;