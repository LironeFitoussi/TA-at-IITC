# AJAX (Fetch) Exercises for Beginners (Callback-based)

This document contains **20 exercises** focused on using **AJAX calls** in JavaScript, with an emphasis on handling AJAX via **callbacks**, not Promises. You will be interacting with a dummy API like [jsonplaceholder](https://jsonplaceholder.typicode.com/). Each exercise includes an **explanation**, **hint**, and **expected output**.

---

### 1. **Simple AJAX Call with Callback**
Make an AJAX call to fetch a list of posts and use a callback to process the response.  
URL: `https://jsonplaceholder.typicode.com/posts`

**Explanation**: Make an AJAX request and handle the response using a callback function.  
**Hint**: Use `fetch()` for the AJAX request and handle the data by passing it to the callback function.

**Expected Output**:  
- An array of post objects with `userId`, `id`, `title`, and `body` fields.

---

### 2. **Callback for Extracting Post Titles**
Fetch all posts and use a callback to extract and display only the titles in the console.

**Explanation**: After fetching the posts, pass them to a callback function that processes only the titles.  
**Hint**: Call a function and pass the data to a callback that extracts and logs the `title` field.

**Expected Output**:
- Titles of the posts printed to the console.

---

### 3. **Get a Specific Post Using Callback**
Make an AJAX call to fetch a specific post by its ID (e.g., post with ID 3). Use a callback to handle the post data.  
URL: `https://jsonplaceholder.typicode.com/posts/3`

**Explanation**: Fetch a single post based on its ID and handle the response through a callback.  
**Hint**: Append the post ID to the base URL and pass the resulting data to a callback.

**Expected Output**:  
- A single post object with fields `userId`, `id`, `title`, and `body`.

---

### 4. **Fetch Comments with Callback**
Make an AJAX call to fetch comments for a specific post and pass the result to a callback to display them.  
URL: `https://jsonplaceholder.typicode.com/posts/1/comments`

**Explanation**: Learn how to retrieve associated data (like comments) and handle it via a callback.  
**Hint**: Use the `/posts/1/comments` endpoint to retrieve comments and pass them to the callback function.

**Expected Output**:
- An array of comment objects with fields like `postId`, `id`, `name`, `email`, and `body`.

---

### 5. **Count Comments for Each Post**
Fetch all posts, then for each post, fetch its comments and pass the comment count to a callback.

**Explanation**: Chain AJAX calls by fetching posts first, then for each post, fetch the associated comments and count them using a callback.  
**Hint**: Call a function to first fetch the posts, then for each post, call another function to fetch the comments and use the callback to display the count.

**Expected Output**:
- For each post, display the title and the number of comments it has.

---

### 6. **User Information Callback**
Retrieve the details of a user by making an AJAX call and handle the user data with a callback.  
URL: `https://jsonplaceholder.typicode.com/users/5`

**Explanation**: Make an AJAX call to fetch a specific user's details and handle it with a callback.  
**Hint**: Use the `/users/5` endpoint to retrieve user information and pass the result to a callback function.

**Expected Output**:
- A user object containing fields like `id`, `name`, `username`, `email`, and address information.

---

### 7. **Display User Emails with Callback**
Fetch all users and pass their emails to a callback that displays them in the console.

**Explanation**: Learn how to extract specific fields (emails) from the user data using a callback.  
**Hint**: Fetch all users from `/users` and pass the result to a callback to display the email addresses.

**Expected Output**:
- Email addresses of all users printed to the console.

---

### 8. **Get Todos for a User via Callback**
Fetch all to-dos for a specific user (e.g., user ID 2) and pass the result to a callback.  
URL: `https://jsonplaceholder.typicode.com/users/2/todos`

**Explanation**: Fetch a user's to-do list and handle the data using a callback function.  
**Hint**: Fetch the to-dos from `/users/2/todos` and pass the result to the callback.

**Expected Output**:
- An array of to-do objects with fields like `userId`, `id`, `title`, and `completed`.

---

### 9. **Filter Completed Todos Using Callback**
Fetch to-dos for a user and pass only the completed ones to a callback function.  
URL: `https://jsonplaceholder.typicode.com/users/1/todos`

**Explanation**: Use a callback to filter the to-dos and display only those marked as completed.  
**Hint**: Fetch all to-dos, then pass them to a callback that filters the ones with `completed: true`.

**Expected Output**:
- Titles of to-dos that are marked as completed.

---

### 10. **Get Posts and User Information with Chained Callbacks**
Fetch all posts, then for each post, fetch the user who created it. Use callbacks to display the post title along with the user's name.

**Explanation**: Chain AJAX calls by fetching posts and for each post, fetch the associated user based on `userId`. Handle both responses using callbacks.  
**Hint**: Use nested callbacks—first for fetching posts, then for fetching the user associated with each post.

**Expected Output**:
- Post titles displayed along with the username of the user who created them.

---

### 11. **Fetch Album Information and Handle with Callback**
Make an AJAX call to retrieve album information for a specific user and pass the data to a callback.  
URL: `https://jsonplaceholder.typicode.com/users/1/albums`

**Explanation**: Fetch a user's album data and handle it with a callback function.  
**Hint**: Use the `/users/1/albums` endpoint and pass the albums to a callback function.

**Expected Output**:
- An array of album objects with fields like `userId`, `id`, and `title`.

---

### 12. **Get Photos in an Album Using Callback**
Fetch photos from a specific album (e.g., album ID 3) and handle the response with a callback.  
URL: `https://jsonplaceholder.typicode.com/albums/3/photos`

**Explanation**: Make an AJAX call to retrieve photos for a specific album and process the data using a callback.  
**Hint**: Fetch photos from `/albums/3/photos` and pass the data to a callback.

**Expected Output**:
- An array of photo objects with fields like `albumId`, `id`, `title`, and `url`.

---

### 13. **Display the First Photo Using Callback**
Fetch photos for an album and pass the first photo's data to a callback to display its title and URL.  
URL: `https://jsonplaceholder.typicode.com/albums/3/photos`

**Explanation**: Fetch a list of photos and pass the first one to a callback that handles its display.  
**Hint**: Fetch the photos and pass the first item in the array to the callback function.

**Expected Output**:
- The title and URL of the first photo.

---

### 14. **Multiple AJAX Calls with Callbacks**
Fetch both users and posts simultaneously, then pass both datasets to a callback that handles displaying them.

**Explanation**: Make two AJAX calls and pass both sets of data to a callback that processes them together.  
**Hint**: Fetch the users and posts, then pass both datasets to a callback function for further processing.

**Expected Output**:
- The array of users and the array of posts printed to the console.

---

### 15. **Handle Error in Callback**
Make an AJAX call to a non-existent endpoint and pass the error to a callback function to handle it.  
URL: `https://jsonplaceholder.typicode.com/invalid-url`

**Explanation**: Learn how to handle errors in AJAX calls and pass the error to a callback.  
**Hint**: Use the `catch()` method of the `fetch` API to catch errors and pass the error message to a callback.

**Expected Output**:
- Error message: `Failed to fetch data: 404 Not Found` (or similar).

---

### 16. **Show Loading State in Callback**
Make an AJAX call and display a "Loading..." message while the data is being fetched. Use a callback to hide the loading message when the data is received.

**Explanation**: Display a loading indicator while the AJAX call is being processed, then hide it using a callback once the data is retrieved.  
**Hint**: Show the loading message before making the AJAX call and pass the callback that hides the message after receiving the data.

**Expected Output**:
- "Loading..." displayed, followed by the fetched data after loading is complete.

---

### 17. **Display User Info and Posts Using Callbacks**
Fetch user information and display it. Then, fetch and display the titles of

 posts made by the user using callbacks.

**Explanation**: Chain multiple AJAX calls by fetching user information first, then fetching posts made by that user, using callbacks.  
**Hint**: Fetch the user first, then pass the `userId` to the next function to fetch posts and display them using callbacks.

**Expected Output**:
- User information followed by the titles of posts created by the user.

---

### 18. **Paginate Posts (Fetch 10 at a Time) with Callback**
Fetch posts in batches of 10 and implement pagination using callbacks to fetch the next set of 10 posts when requested.  
URL: `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1`

**Explanation**: Implement pagination by fetching a limited number of posts at a time and using callbacks to fetch the next set of posts when needed.  
**Hint**: Use query parameters to limit the number of posts fetched (e.g., `?_limit=10&_page=1`) and pass the result to a callback.

**Expected Output**:
- A list of 10 posts displayed, with the ability to load the next 10 on demand.

---

### 19. **Handle Different Status Codes via Callbacks**
Make an AJAX call to a specific URL and pass the response status code to a callback to handle different cases (e.g., 200 for success, 404 for not found).  
URL: `https://jsonplaceholder.typicode.com/posts/9999`

**Explanation**: Learn how to handle different status codes from AJAX responses and pass them to a callback for different outcomes.  
**Hint**: Use the `response.status` field to pass the status code to a callback and handle it accordingly.

**Expected Output**:
- Success message for 200 or error message for 404.

---

### 20. **Sequential AJAX Calls with Callbacks**
Fetch the posts first, then for each post, fetch the comments and pass them to a callback to display them below the post titles.

**Explanation**: Learn to handle sequential AJAX requests where the second request depends on the first one, using callbacks for chaining.  
**Hint**: Fetch the posts, then for each post, fetch its comments and pass both the post title and its comments to a callback for display.

**Expected Output**:
- Each post title followed by its comments printed below it.
