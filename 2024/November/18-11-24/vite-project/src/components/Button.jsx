const Button = ({ setCount, children }) => {
    console.log(children);
    
    return (
        <button onClick={() => setCount((count) => count + 1)}>
            {children}    
        </button>
    )
}

export default Button