import './Head.css'
import React from "react";


// Imports 
import Intro from '../Intro/Intro.jsx';
import PrepTime from '../PrepTime/PrepTime.jsx';

const Head = () => {
    return (
        <div className="head">
            This is the Head
            <Intro />
            <PrepTime />
        </div>
    )
}

export default Head


// export default function Head () {

// }