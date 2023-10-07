import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
    return (
        <div>
            <h1 className="heading_1">React Webpack</h1>
            <a href="#">Home Page</a>
            <h3>React JS</h3>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
