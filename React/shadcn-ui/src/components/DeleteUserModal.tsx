import React from 'react'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from './ui/dialog'
import { Button } from './ui/button'

interface DeleteUserModalProps {
  isOpen: boolean
  onClose: () => void
  userName: string
  userEmail: string
}

const DeleteUserModal: React.FC<DeleteUserModalProps> = ({
  isOpen,
  onClose,
  userName,
  userEmail
}) => {
  const handleDelete = () => {
    // Delete functionality will be implemented later
    console.log(`Deleting user: ${userName} (${userEmail})`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-red-600">Delete User</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this user? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Name:</span>
              <span>{userName}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Email:</span>
              <span className="text-gray-600 dark:text-gray-400">{userEmail}</span>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete User
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteUserModal 