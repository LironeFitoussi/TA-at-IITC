import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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

const styles = {
  input: 'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors',
  error: 'border-red-500 bg-red-50',
  valid: 'border-gray-300',
  errorText: 'text-red-600 text-sm mt-1 block',
  form: 'bg-gray-50 p-8 rounded-xl shadow-sm mb-8',
  label: 'block text-sm font-semibold text-gray-700 mb-2',
  button: 'w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors'
}

export function UserFormWithReactHookForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      age: 18
    }
  });

  const onSubmit = async (data: UserFormData) => {
    console.log('Form submition simulation started');
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(`Form is valid! Data: ${JSON.stringify(data, null, 2)}`);
    reset(); // Reset form after successful submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className="mb-6">
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className={`${styles.input} ${errors.name ? styles.error : styles.valid}`}
        />
        {errors.name && (
          <span className={styles.errorText}>{errors.name.message}</span>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`${styles.input} ${errors.email ? styles.error : styles.valid}`}
        />
        {errors.email && (
          <span className={styles.errorText}>{errors.email.message}</span>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="password" className={styles.label}>
          Password:
        </label>
        <input
          id="password"
          type="password"
          {...register('password')}
          className={`${styles.input} ${errors.password ? styles.error : styles.valid}`}
        />
        {errors.password && (
          <span className={styles.errorText}>{errors.password.message}</span>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="age" className={styles.label}>
          Age:
        </label>
        <input
          id="age"
          type="number"
          {...register('age', { valueAsNumber: true })}
          className={`${styles.input} ${errors.age ? styles.error : styles.valid}`}
        />
        {errors.age && (
          <span className={styles.errorText}>{errors.age.message}</span>
        )}
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className={styles.button}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Form'}
      </button>
      {isSubmitSuccessful && <p>Form submitted successfully</p>}
    </form>
  )
} 