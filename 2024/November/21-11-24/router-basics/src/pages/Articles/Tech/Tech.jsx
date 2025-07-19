import { useParams } from 'react-router-dom'

const Tech = () => {
    const { id } = useParams()

    console.log(id);
    
    return (
        <h2>This is Politics Section</h2>
    )
}

export default Tech