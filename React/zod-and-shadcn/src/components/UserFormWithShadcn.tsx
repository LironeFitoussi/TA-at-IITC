import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { FormFieldWrapper } from './FormFieldWrapper'

// Zod schema for user data validation
const userSchema = z.object({
  name: z.string().min(2, "Name must contain at least 2 characters"),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  age: z.number().min(18, "Must be at least 18 years old").max(120, "Age must be reasonable"),
});

// TypeScript type generated from the schema
type UserFormData = z.infer<typeof userSchema>;

export function UserFormWithShadcn() {
  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      age: 18,
    },
  });

  const onSubmit = async (_data: UserFormData) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    form.reset();
  };

  return (
    <div className="bg-card p-8 rounded-xl shadow-sm border mb-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormFieldWrapper
              control={form.control}
              name="name"
              label="Full Name"
              placeholder="Enter your full name"
              description="Your full name as it appears on official documents."
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
              label="Age"
              type="number"
              placeholder="Enter your age"
              description="You must be at least 18 years old to register."
              inputProps={{
                onChange: (e) => form.setValue('age', e.target.value ? parseInt(e.target.value) : 0)
              }}
            />
          </div>

          <div className="flex gap-4">
            <Button 
              type="submit" 
              disabled={form.formState.isSubmitting}
              className="flex-1"
            >
              {form.formState.isSubmitting ? 'Submitting...' : 'Submit Form'}
            </Button>
          </div>

          {form.formState.isSubmitSuccessful && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">Form submitted successfully!</p>
            </div>
          )}
        </form>
      </Form>
    </div>
  )
} 