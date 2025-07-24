import React from 'react'
import { Button } from './ui/button'

const ButtonsWrapper: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Button Examples</h1>
        <p className="text-gray-600">Simple button variations</p>
      </div>

      {/* Button Variants */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      {/* Button Sizes */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* Buttons with Icons */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add
          </Button>
          <Button variant="outline">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ButtonsWrapper 