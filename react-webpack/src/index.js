import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import flower from '../src/assets/flower.jpg'

function App() {
    return (
        <div>
            <h1 className="heading_1" style={{color: "red", backgroundColor: "yellow"}}>React Webpack</h1>
            <a href="#">Home Page</a>
            <h3>React JS</h3>
            <img className="img-md" src={flower} alt="" />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
