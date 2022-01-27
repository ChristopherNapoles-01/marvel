import { useState} from "react";
import useFetch from "../Hooks/useFetch";
import { Link } from "react-router-dom";
const Search = () => {
   const url = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=a1b12e9d68609b2fc49114e7e98c90c3&limit=100&series=15305';
   const {details} = useFetch(url);
   var temp;
   if(details){
        temp = details;
        console.log(temp);
   }

   const [filteredData,setFilteredData] = useState(null);
    const handleChange = (e) => {
        const term =e.target.value;
        const newDetails = temp.filter((v) => {
            return v.name.toLowerCase().includes(term.toLowerCase());
        });
        if (term===''){
            setFilteredData([]);
        }
        else{
            setFilteredData(newDetails);
        }
        
    }

    return(
        <div className="searchBody">
            <div className="searchContainer d-flex justify-content-center">
                <div>
                    <input placeholder="Search Character" className="searchBar" onChange={handleChange}/>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="searchResultsContainer">
                    {filteredData < 1 ?<div> </div>: filteredData.map((e) => (
                        <div className="searchResults">
                            <div key={e.id}>
                                <Link to={`/character/${e.id}`}>
                                    {e.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Search;