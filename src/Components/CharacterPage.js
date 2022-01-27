import { useParams } from "react-router-dom"
import useFetch from "../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import useFetchComics from "../Hooks/useFetchComics";

const CharacterPage = () =>{
    const {token} = useParams();
    const url = `http://gateway.marvel.com/v1/public/characters/${token}?ts=1&apikey=a1b12e9d68609b2fc49114e7e98c90c3`;
    const url2= `http://gateway.marvel.com/v1/public/characters/${token}/comics?ts=1&apikey=a1b12e9d68609b2fc49114e7e98c90c3`;
    const {details} = useFetch(url);
    const {comicData} = useFetchComics(url2);
    var data = [];
    var i=0;

    const navigate = useNavigate();
    if(details){
        data = details[0];
    }
    const handleClick = () =>{
        navigate('/marvel');
    }
    comicData&&console.log(comicData);
    return (
        <div>
            <div className="body">
                <button className="btn btn-danger" onClick={handleClick}>Back</button>
                {details?<div>
                    <div className="d-flex descriptionContainer">
                        <div>
                            <img src={data.thumbnail.path + '/portrait_uncanny.jpg'} alt="" className="specImage"/>
                        </div>
                        <div className="d-flex flex-column charDescription">
                            <h1 className="">{data.name}</h1>
                            {data.description!==''?<p className="desc">{data.description}</p>:<p>No Description Available</p>}
                        </div>
                    </div>
                    <h2 className="heading">{data.name} Included Comics</h2>
                    {comicData?<div className="comics d-flex justify-content-center row">
                            {comicData.map((e) => (
                                <div className="col-sm-12 col-lg-2 text-center" key={e.id}>
                                    <a href={e.urls[0].url} target='_blank' rel="noreferrer">
                                        <img src={e.thumbnail.path + '/portrait_xlarge.jpg'} alt=""/>
                                        <p>{e.title}</p>
                                    </a>
                                </div>
                            ))}
                    </div>: <div className="comics"><p>Loading...</p></div>}
                    <h2 className="heading">List of Series</h2>
                    <div className="series">
                        {data.series.items.map((e) => (<p key={i++}>• {e.name}</p>))}
                    </div>
                </div>:<p>Loading...</p>}
                
            </div>
        </div>
    )
}
export default CharacterPage