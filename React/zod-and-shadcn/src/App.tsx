import { UserFormWithShadcn } from "@/components/UserFormWithShadcn"

function App() {
  return (
    <div className="max-w-2xl mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Zod Schema Form Validation with Shadcn/UI
      </h1>
      
      <UserFormWithShadcn />

      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Form Field Structure:</h3>
        <ul className="space-y-2 text-blue-800">
          <li><strong>name</strong> – string with minimum 2 characters</li>
          <li><strong>email</strong> – must be valid email format</li>
          <li><strong>password</strong> – must be at least 8 characters</li>
          <li><strong>age</strong> – must be a number between 18-120</li>
        </ul>
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mt-6">
        <h3 className="text-lg font-semibold text-green-900 mb-3">Shadcn/UI Benefits:</h3>
        <ul className="space-y-2 text-green-800">
          <li>• Built-in accessibility features (ARIA labels, focus management)</li>
          <li>• Consistent design system with proper theming</li>
          <li>• Form descriptions and helpful text</li>
          <li>• Better error handling and validation display</li>
          <li>• Professional UI components with proper styling</li>
          <li>• Reset functionality with separate button</li>
        </ul>
      </div>
    </div>
  )
}

export default App
