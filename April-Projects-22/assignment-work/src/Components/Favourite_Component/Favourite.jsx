import React, { useState, useEffect } from 'react';
import Movie from '../Movie';
const API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";

const Favourite = (props) => {
    const[movies,setMovies]=useState([]);
    const[nameOfFavouriteMovie,setnameOfFavouriteMovie] = useState("");

    //Props passed to parent Component App.js
    props.func(nameOfFavouriteMovie);

    const handleClick = ()=>{
        //Current movie data recieved from App.js parent component
        setnameOfFavouriteMovie(props.moviedata);
    }

    useEffect(()=>{
        fetch(API).then((res)=>res.json()).then((data)=>{
          setMovies(data.results);
        });
      },[]);

    return ( 
        <div>
        <div style={{display:"flex",flexWrap:"wrap"}}>
        {
            movies.length>0 && movies.map((movie)=>{
              return <Movie key={movie.id} {...movie}/>
            })
            }
        </div>
        <button onClick={handleClick}>Add To Favourites</button>
        </div>
     );
}
 
export default Favourite;