import React from 'react'

const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' }
  ];

  // Sime wefse

function ListItems () {

    const list = users.map((user, index) => {
        return <li key={user.id}>
          <p>User Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </li>
      })
      
    return (
        <ul>
            {list}
        </ul>
    )
}

export default ListItems