import React from 'react';
import './Movie.css'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const Movie = ({title,poster_path,overview,vote_average}) => {
  
    return <div className='mov'>
        <img src={IMG_PATH+poster_path} alt={title}/>
        <div className='info'>
           <h3>{title}</h3>
           <span>{vote_average}</span>
        </div>
        <div className='description'>
             <h3>Description</h3>
             <p>{overview}</p>
        </div>
    </div>
}
export default Movie