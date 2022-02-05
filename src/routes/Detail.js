import {useParams} from 'react-router-dom';
import {useEffect} from 'react'

function Detail() {
    const {id} = useParams();
    const getMoive = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details_json?movie_id=${id}`)).json();
        console.log(json); 
    }


    useEffect(() => {
       getMoive();       
    }, []) 


    return <h1>Detail</h1>
}

export default Detail