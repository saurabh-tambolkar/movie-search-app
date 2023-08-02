import React, { useEffect, useState } from 'react'

// useContext();                    warehouse
// RouterProvider;                  deilvery
// consumer  / useContect();        you

const AppContext=React.createContext();

const key=process.env.REACT_APP_API_KEY

export const API_URL=`https://www.omdbapi.com/?apikey=${key}`;

//create provider function
const AppProvider=({children})=>{

    const [isLoading,setIsLoading]=useState(true);
    const [movie,SetMovie]=useState([]);
    const [isError,setIsError]=useState({show:"false",msg:""});
    const [query,setQuery]=useState("avengers");

    const getMovies=async(url)=>{
        setIsLoading(true);
        try {
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);
            // console.log("got");

            if(data.Response==="True"){
                setIsLoading(false);
                console.log("done");
                SetMovie(data.Search);
                setIsError({show:false,msg:null})
            }
            else{
                setIsError({show:true,msg:data.Error})
            }
        } 
        catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        let timeOut=setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`);   
        }, 500);
        return ()=>clearTimeout(timeOut);
    },[query])

    return (<AppContext.Provider value={{movie,isLoading,isError,query,setQuery}}>
        {children}
    </AppContext.Provider>);
}
// enter it in indexed.js

export {AppContext,AppProvider};


