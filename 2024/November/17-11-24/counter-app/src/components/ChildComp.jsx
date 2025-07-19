import React from "react"

const ChildComp = (props) => {
    console.log(props);
    
    return (
        <div>
            <p>{props.counter}</p>
        </div>
    )
}  

export default ChildComp