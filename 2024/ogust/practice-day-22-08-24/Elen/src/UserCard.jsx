import { useState } from 'react'

function UserCard() {
    const [name, setName] = useState('John Doe')

    const [nameInput, setNameInput] = useState('')
    const [ageInput, setAgeInput] = useState('')

    const changeName = () => {
        setName("Bibi HaMelech")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log('Form submitted')
        console.log(event);

        // Get Form Data
        // const formData = new FormData(event.target)
        // const formDataExtracted = {
        //     name: "Lirone",
        //     age: 30
        // }
        // console.log(formData.get('name'));

        // print name   

        // console.log(formData.get('name'));
    }

    console.log('UserCard component rendered');
    
    return (
        <div className='user-card'>
            <h2>{name}</h2>
            <p>Age: 30</p>
            <p>Email: test@test.com</p>
            <p>Address: 1234 Park St</p>
            <p>Phone: 555-555-5555</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input type="text" value={nameInput} 
                    onChange={(event) => {
                        console.log("Change event fired");
                        setNameInput(event.target.value)
                    }}
                />

                <label htmlFor='age'>Age:</label>
                <input type="number" value={ageInput}/>

                <button>Submit</button>    
            </form>        
            {/* <button className='btn' onClick={changeName}>Change Name</button> */}
        </div>
    );
}

export default UserCard;