import propTypes from "prop-types";
import {Link} from 'react-router-dom'
import styles from './Movie.module.css'


function Movie({coverImg, title, summary, genres, key, id}){
    return <div className={styles.container} key={key}>
    <img src={coverImg} alt={title}/>
    <div className={styles.content}>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
        {genres !== undefined &&
          genres.map((g, index) => (
            <li key={index}>{g}</li>
          ))
        
        }
      </ul>
    </div>
  </div>
}

Movie.propTypes = {
    id : propTypes.number.isRequired,
    coverImg : propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string.isRequired)    

}


export default Movie;