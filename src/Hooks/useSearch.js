import axios from "axios"
import { useState } from "react"

const useSearch = async (url) => {
    const [details,setDetails] = useState(null);
    const response = await axios.get(url);
    const data = await response.data;
    setDetails(data.data.results);
    return details;
}
export default useSearch;