import React from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'

const UserInput: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Input Examples</h1>
        <p className="text-gray-600">Form inputs with labels</p>
      </div>

      {/* Basic Input */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Input</h2>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full max-w-sm"
          />
        </div>
      </div>

      {/* Email Input */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Email Input</h2>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-sm"
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Password Input</h2>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full max-w-sm"
          />
        </div>
      </div>

      {/* Number Input */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Number Input</h2>
        <div className="space-y-2">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            type="number"
            placeholder="Enter your age"
            className="w-full max-w-sm"
          />
        </div>
      </div>

      {/* Disabled Input */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Disabled Input</h2>
        <div className="space-y-2">
          <Label htmlFor="disabled">Disabled Field</Label>
          <Input
            id="disabled"
            type="text"
            placeholder="This field is disabled"
            disabled
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  )
}

export default UserInput 