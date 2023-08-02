import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./context";
import { API_URL } from "./context";

const SingleMovie = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [movie, SetMovie] = useState("");
  const [isError, setIsError] = useState({ show: "false", msg: "" });

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setIsLoading(false);
        console.log("done");
        SetMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [id]);

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "grey",
          color: "white",
          textAlign: "center",
          display:"grid",
          placeItems:'center',
        }}
      >
        Loading...
        <br />
      </div>
    );
  }

  return (
    <section
      className="movie"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"grey",
      }}
    >
      <div
        className="movie-card "
        style={{
          backgroundColor:"ivory",
          width: "50vw",
          display: "grid",
          grid: "50vh/50% 50%",
          borderRadius:"20px",
          placeItems:"center"
        }}
      >
        <figure>
          <img src={movie.Poster} style={{height:"40vh",width:"20vw",borderRadius:"20px"}} alt="" />
        </figure>
       <div className="details">
          <h2>{movie.Title}</h2>
          <hr />
          <h5>{movie.Released}</h5>
          <h5>{movie.Actors}</h5>
          <h5>{movie.Country}</h5>
          <hr />
          <a href="/">
          <button style={{width:"5vw",height:"4vh",backgroundColor:"grey",color:"aliceblue",borderRadius:"8px",padding:"2px"}}>Go back</button>
          </a>
       </div>
        
      </div>
    </section>
  );
};

export default SingleMovie;
