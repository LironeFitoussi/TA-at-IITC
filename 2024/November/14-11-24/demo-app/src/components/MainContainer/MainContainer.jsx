import './MainContainer.css'

import React from "react";


import Head from "../Head/Head.jsx";
import Recipe from '../Recipe/Recipe.jsx'

const MainContainer = () => {
    return (
        <div className="main-container">
            Hello To the Container!
            <Head />
            <Recipe />
        </div>
    )
}

export default MainContainer