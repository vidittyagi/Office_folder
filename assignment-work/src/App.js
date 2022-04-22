import React,{useState,useEffect} from 'react';
import './App.css'
import Movie from "./Components/Movie";

const API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const SEARCH="https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";

function App() {
  const[movies,setMovies]=useState([]);
  const[searchTerm,setSearchTerm]=useState("")

  useEffect(()=>{
    fetch(API).then((res)=>res.json()).then((data)=>{
      setMovies(data.results);
    });
  },[])
  const getResult=()=>{
    if(searchTerm) {
      fetch(SEARCH+searchTerm).then((res)=>res.json()).then((data)=>{
        setMovies(data.results);
      });
      setSearchTerm("");
    }
  }
  console.log(movies)
  return <div className='mov-holder'>
    <div style={{display:"flex",flexDirection:"row"}}>
      <input type="text" placeholder='Search Movie' onChange={(e)=>{setSearchTerm(e.target.value)}}></input>
      <button onClick={()=>{getResult()}}>Search</button>
    </div>
    <div style={{display:"flex",flexWrap:"wrap"}}>
    {
        movies.length>0 && movies.map((movie)=>{
          return <Movie key={movie.id} {...movie}/>
        })
        }
    </div>
    </div>

}

export default App;
