import React, { useContext } from 'react';
import { AppContext } from './context';

const Search = () => {

  let divStyle={
    backgroundColor:"white",
    width:"100vw",
    height:"150px",
    marginTop:"50px",
    display:"flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems:'center',
  }

  let inputStyle={
    borderRadius:"8px",
    width:"15vw",
    height:"5vh",
    textAlign:"center",
  }

  let errStyle={
    color:"red",
    fontSize:"12px",
    fontWeight:"600"
  }
  

  const {query,setQuery,isError}=useContext(AppContext);
  return (
    <div style={divStyle}>
      <form  action="#" onSubmit={(e)=>e.preventDefault}>
        <input style={inputStyle} name='search' type="text" value={query}
        onChange={(e)=>setQuery(e.target.value)} placeholder='Enter movie name ' />
      </form>
      <div style={errStyle} className="error" >
        <p>{isError.show && isError.msg}</p>
      </div>
    </div>
  );
}

export default Search;
