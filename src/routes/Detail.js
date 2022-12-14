import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [summary, setSummary] = useState("");
    const [genres, setGenres]= useState([]);

    const getMovie = async() =>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setGenres(json.data.movie.genres);
        setTitle(json.data.movie.title);
        setImg(json.data.movie.medium_cover_image);
        setSummary(json.data.movie.summary);
    };
    
    // eslint-disable-next-line
    useEffect(_=>{ getMovie()},[]);

    return (
        <div>
            <h1>Detail</h1>
            {loading ? <h1>Loading...</h1>:
            <div>
                <h2>{title}</h2>
                <img src={img} alt={title}/>
                <ul>
                    {genres.map(genre => <li key={genre}>{genre}</li>)}
                </ul>
                <p>{summary}</p>
            </div>
            }

        </div>
    );
}

export default Detail;