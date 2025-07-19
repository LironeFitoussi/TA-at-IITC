import { useState } from 'react'
import { z } from 'zod'

// Zod schema for user data validation
const userSchema = z.object({
  name: z.string().min(2, "Name must contain at least 2 characters"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "Must be at least 18 years old"),
});

// TypeScript type generated from the schema
type UserFormData = z.infer<typeof userSchema>;

export function UserForm() {
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    email: '',
    age: 18
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (field: keyof UserFormData, value: string | number) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
    
    // Real-time validation
    try {
      userSchema.parse(newFormData);
      setErrors({});
      setIsValid(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
        setIsValid(false);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = userSchema.parse(formData);
      alert(`Form is valid! Data: ${JSON.stringify(validatedData, null, 2)}`);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-sm mb-8">
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Name:
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
            errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
        />
        {errors.name && (
          <span className="text-red-600 text-sm mt-1 block">{errors.name}</span>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email:
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
            errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
        />
        {errors.email && (
          <span className="text-red-600 text-sm mt-1 block">{errors.email}</span>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
          Age:
        </label>
        <input
          id="age"
          type="number"
          value={formData.age}
          onChange={(e) => handleInputChange('age', parseInt(e.target.value) || 0)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
            errors.age ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
        />
        {errors.age && (
          <span className="text-red-600 text-sm mt-1 block">{errors.age}</span>
        )}
      </div>

      <button 
        type="submit" 
        disabled={!isValid}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        Submit Form
      </button>
    </form>
  )
} 