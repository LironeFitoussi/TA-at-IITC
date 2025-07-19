import { useState } from 'react'
import { z } from 'zod'

// Zod schema for user data validation
const userSchema = z.object({
  name: z.string().min(2, "Name must contain at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  age: z.number().min(18, "Must be at least 18 years old"),
});

// TypeScript type generated from the schema
type UserFormData = z.infer<typeof userSchema>;

export function UserForm() {
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    email: '',
    password: '',
    age: 18
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (data: UserFormData) => {
    const result = userSchema.safeParse(data);
    if (result.success) {
      setErrors({});
      return true;
    } else {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as string;
        if (field) newErrors[field] = err.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleInputChange = (field: keyof UserFormData, value: string | number) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm(formData)) {
      alert(`Form is valid! Data: ${JSON.stringify(formData, null, 2)}`);
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
        <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
          Password:
        </label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
            errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
        />
        {errors.password && (
          <span className="text-red-600 text-sm mt-1 block">{errors.password}</span>
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
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        Submit Form
      </button>
    </form>
  )
} 