import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from './ui/form';
import { FormFieldWrapper } from './FromFieldWrapper';
import axios from 'axios';
import type { Post } from '../types'
import { useMutation } from '@tanstack/react-query';

const postSchema = z.object({
    title: z.string().min(3),
    body: z.string().max(120),
})

type PostFormData = z.infer<typeof postSchema>

export function UserForm() {
    const form = useForm<PostFormData>({
        resolver: zodResolver(postSchema),
        defaultValues: {
            title: '',
            body: '',
        }
    })

    const mutation = useMutation({
        mutationFn: async (data: PostFormData) => await axios.post<Post>(`https://jsonplaceholder.typicode.com/posts`, data),
        onSuccess: () => form.reset()
    })
    
    return (
        <div className='bg-card p-8 rounded-xl shadow-sm border mb-8'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="bg-gray-50 p-8 rounded-xl shadow-sm mb-8">
                    <FormFieldWrapper 
                        control={form.control}
                        name="title"
                        label='psot title'
                        placeholder='Awesome'
                        description='this is the the '
                    />
                    <FormFieldWrapper 
                        control={form.control}
                        name="body"
                        label='Content'
                        placeholder='whats on your mind'
                    />
                    {mutation.isSuccess ? <p>Submitted</p> : <button
                        type="submit"
                        disabled={mutation.isPending}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                        Submit Form
                    </button>}
                </form>
            </Form>
        </div>
    )
}
