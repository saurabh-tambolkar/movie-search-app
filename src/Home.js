import React from 'react'
import Movies from './Movies';
import Search from './Search';

function Home() {
   
  return (
    <div className="app">
        <div style={{width:"30%",backgroundColor:"white",marginBottom:"5%",margin:"auto",marginTop:"5%",textAlign:"center",fontWeight:"600"}}>
            <h2>SEARCH YOUR MOVIES HERE</h2>
        </div>
        <Search/>
        <Movies/>
    </div>
  );
};

export default Home;
