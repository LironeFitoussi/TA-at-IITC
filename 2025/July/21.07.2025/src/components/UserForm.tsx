import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from './ui/form';
import { FormFieldWrapper } from './FromFieldWrapper';
const userSchema = z.object({
    name: z.string().min(2, "Name must contain at least 2 charcters"),
    email: z.email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    age: z.number().min(18, "Go to mommy")
})

type UserFormData = z.infer<typeof userSchema>

export function UserForm() {
    const form = useForm<UserFormData>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            age: 0
        }
    })

    const onSubmit = async (data: UserFormData) => {
        await new Promise(resolve => setTimeout(resolve, 3000))
        console.log(`Form is valid! Data: ${JSON.stringify(data, null, 2)}`);
        form.reset()
    }

    return (
        <div className='bg-card p-8 rounded-xl shadow-sm border mb-8'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="bg-gray-50 p-8 rounded-xl shadow-sm mb-8">
                    <FormFieldWrapper 
                        control={form.control}
                        name="name"
                        label='full name'
                        placeholder='John Doe'
                        description='buddy what is your name'
                    />
                    <FormFieldWrapper 
                        control={form.control}
                        name="email"
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email address"
                        description="We'll use this to send you important updates."
                    />
                    <FormFieldWrapper 
                        control={form.control}
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        description="Password must be at least 8 characters long."
                    />
                    <FormFieldWrapper 
                        control={form.control}
                        name="age"
                        label='Age'
                        type="number"
                        placeholder="Enter your age"
                        description="You must be at least 18 years old to register."
                        inputProps={{
                            onChange: (e) => form.setValue('age', e.target.value ? parseInt(e.target.value) : 0)
                        }}
                    />

                    {form.formState.isSubmitSuccessful ? <p>Submitted</p> : <button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                        Submit Form
                    </button>}
                </form>
            </Form>
        </div>
    )
}
