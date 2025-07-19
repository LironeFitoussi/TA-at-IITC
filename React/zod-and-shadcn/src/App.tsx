import { UserForm } from "@/components/UserForm"

function App() {
  return (
    <div className="max-w-2xl mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Zod Schema Form Validation Example
      </h1>
      
      <UserForm />

      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Schema Explanation:</h3>
        <ul className="space-y-2 text-blue-800">
          <li><strong>name</strong> – string with minimum 2 characters</li>
          <li><strong>email</strong> – must be valid email format</li>
          <li><strong>age</strong> – must be a number, at least 18</li>
        </ul>
      </div>
    </div>
  )
}

export default App
