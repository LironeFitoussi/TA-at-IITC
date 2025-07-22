import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import type { Post, NewPost } from '@/types/post';
import { Button } from '@/components/ui/button';

export default function PostsWithTraditionalState() {
  // Form state
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState(1);

  // Posts list state
  const [posts, setPosts] = useState<Post[]>([]);
  const [postsLoading, setPostsLoading] = useState(false);
  const [postsError, setPostsError] = useState<string | null>(null);

  // Create post state
  const [isCreating, setIsCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [createSuccess, setCreateSuccess] = useState<boolean>(false);
  const [createdPost, setCreatedPost] = useState<Post | null>(null);

  // Fetch posts function
  const fetchPosts = useCallback(async () => {
    setPostsLoading(true);
    setPostsError(null);
    
    try {
      const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
      // Take only first 10 posts to keep UI clean
      setPosts(response.data.slice(0, 10));
    } catch (err) {
      setPostsError(err instanceof Error ? err.message : 'Failed to fetch posts');
    } finally {
      setPostsLoading(false);
    }
  }, []);

  // Create post function
  const createPost = async (newPost: NewPost) => {
    setIsCreating(true);
    setCreateError(null);
    setCreateSuccess(false);
    setCreatedPost(null);

    try {
      const response = await axios.post<Post>('https://jsonplaceholder.typicode.com/posts', newPost);
      const createdPostData = response.data;
      
      setCreatedPost(createdPostData);
      setCreateSuccess(true);
      
      // Reset form
      setTitle('');
      setBody('');
      setUserId(1);
      
      // Manually refetch posts to show the new one
      // In a real app, you might optimistically update the list instead
      await fetchPosts();
      
    } catch (err) {
      setCreateError(err instanceof Error ? err.message : 'Failed to create post');
    } finally {
      setIsCreating(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !body.trim()) {
      setCreateError('Please fill in all fields');
      return;
    }

    await createPost({
      title: title.trim(),
      body: body.trim(),
      userId,
    });
  };

  // Manual refresh posts
  const handleRefreshPosts = () => {
    fetchPosts();
  };

  // Reset create form and states
  const handleResetCreate = () => {
    setCreateError(null);
    setCreateSuccess(false);
    setCreatedPost(null);
    setTitle('');
    setBody('');
    setUserId(1);
  };

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="p-6 border rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-6">Posts Management (Traditional State)</h2>
      
      {/* Create Post Form */}
      <div className="mb-8 p-4 border rounded-lg bg-gray-50">
        <h3 className="text-lg font-semibold mb-4">Create New Post</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="traditional-userId" className="block text-sm font-medium text-gray-700 mb-1">
              User ID
            </label>
            <select
              id="traditional-userId"
              value={userId}
              onChange={(e) => setUserId(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isCreating}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => (
                <option key={id} value={id}>User {id}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="traditional-title" className="block text-sm font-medium text-gray-700 mb-1">
              Post Title
            </label>
            <input
              type="text"
              id="traditional-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isCreating}
            />
          </div>

          <div>
            <label htmlFor="traditional-body" className="block text-sm font-medium text-gray-700 mb-1">
              Post Content
            </label>
            <textarea
              id="traditional-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter post content..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isCreating}
            />
          </div>

          <div className="flex space-x-2">
            <Button 
              type="submit" 
              disabled={isCreating || !title.trim() || !body.trim()}
              className="flex-1"
            >
              {isCreating ? 'Creating Post...' : 'Create Post'}
            </Button>
            
            {(createSuccess || createError) && (
              <Button 
                type="button"
                onClick={handleResetCreate}
                variant="outline"
              >
                Reset
              </Button>
            )}
          </div>
        </form>

        {/* Create Status Messages */}
        <div className="mt-4 space-y-2">
          {isCreating && (
            <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
              <p className="text-blue-800">Creating post...</p>
            </div>
          )}

          {createSuccess && createdPost && (
            <div className="bg-green-50 border border-green-200 rounded-md p-3">
              <p className="text-green-800">✅ Post created successfully!</p>
              <div className="mt-2 text-sm text-green-700">
                <p><strong>ID:</strong> {createdPost.id}</p>
                <p><strong>Title:</strong> {createdPost.title}</p>
              </div>
            </div>
          )}

          {createError && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3">
              <p className="text-red-800">❌ Error creating post: {createError}</p>
            </div>
          )}
        </div>
      </div>

      {/* Posts List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Posts List</h3>
          <Button 
            onClick={handleRefreshPosts} 
            disabled={postsLoading}
            variant="outline"
            size="sm"
          >
            {postsLoading ? 'Refreshing...' : 'Refresh Posts'}
          </Button>
        </div>

        {postsLoading && (
          <div className="text-center py-4">
            <p className="text-gray-600">Loading posts...</p>
          </div>
        )}

        {postsError && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
            <p className="text-red-800">Error loading posts: {postsError}</p>
          </div>
        )}

        {!postsLoading && !postsError && (
          <div className="space-y-3">
            {posts.map((post) => (
              <div key={post.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-base line-clamp-2">{post.title}</h4>
                  <div className="flex items-center space-x-2 text-xs text-gray-500 ml-4">
                    <span>ID: {post.id}</span>
                    <span>•</span>
                    <span>User: {post.userId}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{post.body}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 text-sm text-gray-500">
          Showing {posts.length} posts
        </div>
      </div>
    </div>
  );
} 