import propTypes from "prop-types";
import {Link} from 'react-router-dom'

function Movie({coverImg, title, summary, genres, key, id}){
    return <div key={key}>
    <img src={coverImg} alt={title}/>
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
    <ul>
      {genres != undefined &&
        genres.map((g) => (
          <li key={g}>{g}</li>
        ))
       
      }
    </ul>
  </div>
}

Movie.propTypes = {
    id : propTypes.string.isRequired,
    coverImg : propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string.isRequired)    

}


export default Movie;