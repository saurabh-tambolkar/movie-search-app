import React, { useState } from "react";
import { useContext } from "react";
import { AppContext} from "./context";
import { NavLink } from "react-router-dom";
import "./MovieCard.css";

function Movies() {
  const {movie,isLoading} =useContext(AppContext);

  if(isLoading){
    return(
      <div className="loading" style={{width:"100vw",height:"50vh",backgroundColor:"grey",textAlign:"center",display:"grid",placeItems:"center"}}>
        <h3>Loading...</h3>
      </div>
    )
  }

  
  return(
    <section className="movie-page" style={{marginTop:"5%",backgroundColor:"white",width:"90vw",margin:"auto",display:"flex",justifyContent:"center"}}>
    <div className="grid grid-4-col" style={{display:"grid",grid:"auto / auto auto auto auto"}}>
      {movie.map((currMovie)=>{
        const {imdbID,Title,Poster}=currMovie;
        const movieTitle=Title.substring(0,12);
       

        return( 
          <NavLink to={`movie/${imdbID}`} key={imdbID}>
            <div className="card" >
              <div className="card-info" style={{margin:"30px"}}>
                <h2 style={{fontSize:"1rem",textAlign:"center",textDecorationLine:"null"}}>{movieTitle.length >=12 ? `${movieTitle}...` : movieTitle}</h2>
                <img style={{borderRadius:"20px"}} width={"200px"} height={"220px"} src={Poster} alt={imdbID} />
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
   </section>
  );
}

export default Movies;
