import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Button } from './ui/button'

interface User {
  id: number
  name: string
  email: string
}

const UsersTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@example.com"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com"
    },
    {
      id: 5,
      name: "David Brown",
      email: "david.brown@example.com"
    },
    {
      id: 6,
      name: "Emily Davis",
      email: "emily.davis@example.com"
    },
    {
      id: 7,
      name: "Robert Miller",
      email: "robert.miller@example.com"
    },
    {
      id: 8,
      name: "Lisa Garcia",
      email: "lisa.garcia@example.com"
    }
  ])

  const handleDeleteUser = (userId: number) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId))
    console.log(`Deleted user with ID: ${userId}`)
  }

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Users Table</h1>
        <p className="text-gray-600">User management with delete functionality</p>
        <p className="text-sm text-gray-500">Total users: {users.length}</p>
      </div>

      {/* Table */}
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                  No users found
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default UsersTable 