const FormComp = (props) => {
    console.log(props);
    
    const updateChoice = (e) => {        
        props.updateFunction(+e.target.innerText)
        props.setDidUserSubmit(true)
    }
    
    return (
        <div style={{
            fontSize: props.customFontSize
        }}>
            <span onClick={updateChoice}>1</span>
            <span onClick={updateChoice}>2</span>
            <span onClick={updateChoice}>3</span>
            <span onClick={updateChoice}>4</span>
            <span onClick={updateChoice}>5</span>
        </div>
    )
}

export default FormComp