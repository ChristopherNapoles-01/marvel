import useFetch from "../Hooks/useFetch";
import { Link } from "react-router-dom";

const Home = () =>{
    const url = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=a1b12e9d68609b2fc49114e7e98c90c3&limit=100&series=16450&orderBy=-name';
    const {details} = useFetch(url);
    details&&console.log(details);
    var results = [];
    if(details){
        results = details;
    }
    
   return(
       <div>
            <div className="body">
                <div className="row d-flex justify-content-center">
                    {details?results.map((e)=>(
                        <div key = {e.id} className="contents col-lg-3 col-md-4">
                            <Link to={`/character/${e.id}`}>
                                <div className="text-center names">{e.name.replace(/ *\([^)]*\) */g, "")}</div>
                                <div>
                                    <img src={e.thumbnail.path + '/portrait_uncanny.jpg'} alt="" className="text-center  col-sm-12"/>
                                </div>
                            </Link>
                        </div>
                        
                    )):<p>Loading...</p>}
                </div>
            </div>
       </div>
   ) 
}
export default Home;