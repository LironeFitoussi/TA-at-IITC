import React from "react";

import Ingredients from '../Ingredients/Ingredients.jsx'
import Instructions from '../Instructions/Instructions.jsx'
import Nutritions from '../Nutritions/Nutritions.jsx'

const Recipe = () => {
    return (
        <div>
            This is recipe
            <Ingredients />
            <Instructions />
            <Nutritions />
        </div>
    )
}


export default Recipe