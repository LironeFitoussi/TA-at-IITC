import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { Post } from '@/types/post';

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  // Return only first 10 posts to keep the UI clean
  return response.data.slice(0, 10);
};

export default function PostsList() {
  const { data: posts = [], isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return (
    <div className="p-6 border rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-6">Latest Posts (useQuery)</h2>

      {isLoading && (
        <div className="text-center py-4">
          <p className="text-gray-600">Loading posts...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
          <p className="text-red-800">
            Error: {error instanceof Error ? error.message : 'An error occurred'}
          </p>
        </div>
      )}

      {!isLoading && !error && (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-lg line-clamp-2">{post.title}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500 ml-4">
                  <span>ID: {post.id}</span>
                  <span>•</span>
                  <span>User: {post.userId}</span>
                </div>
              </div>
              <p className="text-gray-600 line-clamp-3">{post.body}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 text-sm text-gray-500">
        Showing {posts.length} posts
      </div>
    </div>
  );
} 