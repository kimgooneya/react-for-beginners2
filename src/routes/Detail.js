import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const id = useParams();
    const [loading, setLoading] = useState(true);
    // const [title, setTitle] = useState('');
    // const [img, setImg] = useState('');
    // const [summary, setSummary] = useState('');

    const getMovie = async() =>{
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        console.log(json);
        setLoading(false);
    };

    useEffect(()=>{
        getMovie();
    },[]);
    return (
        <h1>Detail</h1>
    
    );
}

export default Detail;