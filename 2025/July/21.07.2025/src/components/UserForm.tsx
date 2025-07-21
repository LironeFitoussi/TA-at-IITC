import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const userSchema = z.object({
    name: z.string().min(2, "Name must contain at least 2 charcters"),
    email: z.email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    age: z.string()
            .regex(/^\d+$/, { message: "Must contain only digits" }) // only digits
            .refine(val => +(val) >= 18, { message: "Must be at least 18" })
})

type UserFormData = z.infer<typeof userSchema>

export function UserForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful}, reset} = useForm<UserFormData>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            age: ''
        }
    })



    const onSubmit = async (data: UserFormData) => {
        await new Promise(resolve => setTimeout(resolve, 3000))
        console.log(`Form is valid! Data: ${JSON.stringify(data, null, 2)}`);
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 p-8 rounded-xl shadow-sm mb-8">
            <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name:
                </label>
                <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                />
                {errors.name && (
                    <span className="text-red-600 text-sm mt-1 block">{errors.name.message}</span>
                )}
            </div>

            <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email:
                </label>
                <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                />
                {errors.email && (
                    <span className="text-red-600 text-sm mt-1 block">{errors.email.message}</span>
                )}
            </div>

            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    Password:
                </label>
                <input
                    id="password"
                    type="password"
                    {...register('password')}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                />
                {errors.password && (
                    <span className="text-red-600 text-sm mt-1 block">{errors.password.message}</span>
                )}
            </div>

            <div className="mb-6">
                <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                    Age:
                </label>
                <input
                    id="age"
                    type="number"
                    {...register("age")}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.age ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                />
                {errors.age && (
                    <span className="text-red-600 text-sm mt-1 block">{errors.age.message}</span>
                )}
            </div>

            { isSubmitSuccessful ? <p>Submitted</p> : <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
                Submit Form
            </button>}
        </form>
    )
}
