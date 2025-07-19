import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

// Zod schema for user data validation
const userSchema = z.object({
  name: z.string().min(2, "Name must contain at least 2 characters"),
  email: z.string().email("Invalid email address"),
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

  const onSubmit = async (data: UserFormData) => {
    console.log('Form submission simulation started');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(`Form is valid! Data: ${JSON.stringify(data, null, 2)}`);
    form.reset();
  };

  return (
    <div className="bg-card p-8 rounded-xl shadow-sm border mb-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} className={form.formState.errors.name ? "border-red-500 bg-red-50" : ""} />
                  </FormControl>
                  <FormDescription>
                    Your full name as it appears on official documents.
                  </FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email address" {...field} className={form.formState.errors.email ? "border-red-500 bg-red-50" : ""} />
                  </FormControl>
                  <FormDescription>
                    We'll use this to send you important updates.
                  </FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} className={form.formState.errors.password ? "border-red-500 bg-red-50" : ""} />
                  </FormControl>
                  <FormDescription>
                    Password must be at least 8 characters long.
                  </FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your age"
                      {...field}
                      onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0)}
                      className={form.formState.errors.age ? "border-red-500 bg-red-50" : ""}
                    />
                  </FormControl>
                  <FormDescription>
                    You must be at least 18 years old to register.
                  </FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
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
            
            <Button 
              type="button" 
              variant="outline"
              onClick={() => form.reset()}
              disabled={form.formState.isSubmitting}
            >
              Reset
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