import React, { useEffect } from "react";

function HomePage(){
    useEffect(()=>{
        console.log('mounted Home Page');
    }, [])
    return (
        <h1>Home Page</h1>
    )
}

export default HomePage;