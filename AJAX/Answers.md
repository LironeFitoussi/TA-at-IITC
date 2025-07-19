# AJAX (Fetch) Exercises for Beginners (Callback-based) with Solutions

This document contains **20 exercises** focused on using **AJAX calls** in JavaScript. The emphasis is on handling AJAX via **callbacks**, not Promises. You'll be interacting with a dummy API like [jsonplaceholder](https://jsonplaceholder.typicode.com/).

---

### 1. **Simple AJAX Call with Callback**

**Task**: Make an AJAX call to fetch a list of posts and use a callback to process the response.

**Solution**:
```js
function fetchPosts(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error:', error));
}

function handlePosts(posts) {
    console.log(posts);
}

fetchPosts(handlePosts);
```

**Expected Output**:  
- An array of post objects with `userId`, `id`, `title`, and `body`.

---

### 2. **Callback for Extracting Post Titles**

**Task**: Fetch all posts and use a callback to extract and display only the titles in the console.

**Solution**:
```js
function fetchPostTitles(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const titles = data.map(post => post.title);
            callback(titles);
        })
        .catch(error => console.error('Error:', error));
}

function handleTitles(titles) {
    titles.forEach(title => console.log(title));
}

fetchPostTitles(handleTitles);
```

**Expected Output**:  
- Titles of the posts printed to the console.

---

### 3. **Get a Specific Post Using Callback**

**Task**: Make an AJAX call to fetch a specific post by its ID (e.g., post with ID 3).

**Solution**:
```js
function fetchPostById(id, callback) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(post => callback(post))
        .catch(error => console.error('Error:', error));
}

function handlePost(post) {
    console.log(post);
}

fetchPostById(3, handlePost);
```

**Expected Output**:  
- A single post object with fields `userId`, `id`, `title`, and `body`.

---

### 4. **Fetch Comments with Callback**

**Task**: Fetch comments for a specific post and pass the result to a callback to display them.

**Solution**:
```js
function fetchCommentsForPost(postId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => callback(comments))
        .catch(error => console.error('Error:', error));
}

function handleComments(comments) {
    console.log(comments);
}

fetchCommentsForPost(1, handleComments);
```

**Expected Output**:  
- An array of comment objects with fields like `postId`, `id`, `name`, `email`, and `body`.

---

### 5. **Count Comments for Each Post**

**Task**: Fetch all posts, then for each post, fetch its comments and pass the comment count to a callback.

**Solution**:
```js
function fetchPostsAndCountComments(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                fetchCommentsForPost(post.id, (comments) => {
                    callback(post.title, comments.length);
                });
            });
        })
        .catch(error => console.error('Error:', error));
}

function fetchCommentsForPost(postId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => callback(comments))
        .catch(error => console.error('Error:', error));
}

function handlePostWithCommentCount(title, commentCount) {
    console.log(`Post: ${title}, Comment Count: ${commentCount}`);
}

fetchPostsAndCountComments(handlePostWithCommentCount);
```

**Expected Output**:  
- For each post, display the title and the number of comments it has.

---

### 6. **User Information Callback**

**Task**: Retrieve the details of a user by making an AJAX call and handle the user data with a callback.

**Solution**:
```js
function fetchUserById(id, callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(user => callback(user))
        .catch(error => console.error('Error:', error));
}

function handleUser(user) {
    console.log(user);
}

fetchUserById(5, handleUser);
```

**Expected Output**:  
- A user object with fields like `id`, `name`, `username`, `email`, etc.

---

### 7. **Display User Emails with Callback**

**Task**: Fetch all users and pass their emails to a callback that displays them in the console.

**Solution**:
```js
function fetchUserEmails(callback) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const emails = users.map(user => user.email);
            callback(emails);
        })
        .catch(error => console.error('Error:', error));
}

function handleEmails(emails) {
    emails.forEach(email => console.log(email));
}

fetchUserEmails(handleEmails);
```

**Expected Output**:  
- Emails of all users printed to the console.

---

### 8. **Get Todos for a User via Callback**

**Task**: Fetch all to-dos for a specific user (e.g., user ID 2) and pass the result to a callback.

**Solution**:
```js
function fetchTodosForUser(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(response => response.json())
        .then(todos => callback(todos))
        .catch(error => console.error('Error:', error));
}

function handleTodos(todos) {
    console.log(todos);
}

fetchTodosForUser(2, handleTodos);
```

**Expected Output**:  
- An array of to-do objects with fields like `userId`, `id`, `title`, and `completed`.

---

### 9. **Filter Completed Todos Using Callback**

**Task**: Fetch to-dos for a user and pass only the completed ones to a callback function.

**Solution**:
```js
function fetchCompletedTodosForUser(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(response => response.json())
        .then(todos => {
            const completedTodos = todos.filter(todo => todo.completed);
            callback(completedTodos);
        })
        .catch(error => console.error('Error:', error));
}

function handleCompletedTodos(todos) {
    todos.forEach(todo => console.log(todo.title));
}

fetchCompletedTodosForUser(1, handleCompletedTodos);
```

**Expected Output**:  
- Titles of to-dos that are marked as completed.

---

### 10. **Get Posts and User Information with Chained Callbacks**

**Task**: Fetch all posts, then for each post, fetch the user who created it. Use callbacks to display the post title along with the user's name.

**Solution**:
```js
function fetchPostsAndUserDetails(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                fetchUserById(post.userId, (user) => {
                    callback(post.title, user.name);
                });
            });
        })
        .catch(error => console.error('Error:', error));
}

function fetchUserById(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => callback(user))
        .catch(error => console.error('Error:', error));
}

function handlePostAndUserDetails(postTitle, userName) {
    console.log(`Post: ${postTitle}, User: ${userName}`);
}

fetchPostsAndUserDetails(handlePostAndUserDetails);
```

**Expected Output**:  
- Post titles displayed along with the username of the user who created them.

---

### 11. **Fetch Album Information and Handle with Callback**

**Task**: Make an AJAX call to retrieve album information for a specific user and pass the data to a callback.

**Solution**:
```js
function fetchAlbumsForUser(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        .then(response => response.json())
        .then(albums => callback(albums))
        .catch(error => console.error('Error:', error));
}

function handleAlbums(albums) {
    console.log(albums);
}

fetchAlbumsForUser(1, handleAlbums);
```

**Expected Output**:  
- An array of album objects with fields like `userId`, `id`, and `title`.

---

### 12. **Get Photos in an Album Using Callback**

**Task**: Fetch photos from a specific album (e.g., album ID 3) and handle the response with a callback.

**Solution**:
```js
function fetchPhotosForAlbum(albumId, callback) {
    fetch(`https://jsonplaceholder.typicode.com

/albums/${albumId}/photos`)
        .then(response => response.json())
        .then(photos => callback(photos))
        .catch(error => console.error('Error:', error));
}

function handlePhotos(photos) {
    console.log(photos);
}

fetchPhotosForAlbum(3, handlePhotos);
```

**Expected Output**:  
- An array of photo objects with fields like `albumId`, `id`, `title`, and `url`.

---

### 13. **Display the First Photo Using Callback**

**Task**: Fetch photos for an album and pass the first photo's data to a callback to display its title and URL.

**Solution**:
```js
function fetchFirstPhotoForAlbum(albumId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        .then(response => response.json())
        .then(photos => {
            if (photos.length > 0) {
                callback(photos[0]);
            }
        })
        .catch(error => console.error('Error:', error));
}

function handleFirstPhoto(photo) {
    console.log(`Title: ${photo.title}, URL: ${photo.url}`);
}

fetchFirstPhotoForAlbum(3, handleFirstPhoto);
```

**Expected Output**:  
- The title and URL of the first photo.

---

### 14. **Multiple AJAX Calls with Callbacks**

**Task**: Fetch both users and posts simultaneously, then pass both datasets to a callback that handles displaying them.

**Solution**:
```js
function fetchUsersAndPosts(callback) {
    let users, posts;

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            users = data;
            return fetch('https://jsonplaceholder.typicode.com/posts');
        })
        .then(response => response.json())
        .then(data => {
            posts = data;
            callback(users, posts);
        })
        .catch(error => console.error('Error:', error));
}

function handleUsersAndPosts(users, posts) {
    console.log('Users:', users);
    console.log('Posts:', posts);
}

fetchUsersAndPosts(handleUsersAndPosts);
```

**Expected Output**:  
- The array of users and the array of posts printed to the console.

---

### 15. **Handle Error in Callback**

**Task**: Make an AJAX call to a non-existent endpoint and pass the error to a callback function to handle it.

**Solution**:
```js
function fetchInvalidUrl(callback) {
    fetch('https://jsonplaceholder.typicode.com/invalid-url')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

function handleError(error, data) {
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log(data);
    }
}

fetchInvalidUrl(handleError);
```

**Expected Output**:  
- Error message: `Failed to fetch data: 404 Not Found` (or similar).

---

### 16. **Show Loading State in Callback**

**Task**: Make an AJAX call and display a "Loading..." message while the data is being fetched. Use a callback to hide the loading message when the data is received.

**Solution**:
```js
function fetchWithLoading(callback) {
    console.log("Loading...");
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            callback(data);
        })
        .catch(error => console.error('Error:', error));
}

function handleDataWithLoading(data) {
    console.log("Data loaded:", data);
}

fetchWithLoading(handleDataWithLoading);
```

**Expected Output**:  
- "Loading..." followed by the fetched data after loading is complete.

---

### 17. **Display User Info and Posts Using Callbacks**

**Task**: Fetch user information and display it. Then, fetch and display the titles of posts made by the user using callbacks.

**Solution**:
```js
function fetchUserAndPosts(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            console.log('User Info:', user);
            return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        })
        .then(response => response.json())
        .then(posts => callback(posts))
        .catch(error => console.error('Error:', error));
}

function handlePosts(posts) {
    posts.forEach(post => console.log(post.title));
}

fetchUserAndPosts(1, handlePosts);
```

**Expected Output**:  
- User information followed by the titles of posts created by the user.

---

### 18. **Paginate Posts (Fetch 10 at a Time) with Callback**

**Task**: Fetch posts in batches of 10 and implement pagination using callbacks to fetch the next set of 10 posts when requested.

**Solution**:
```js
function fetchPostsWithPagination(page, callback) {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
        .then(response => response.json())
        .then(posts => callback(posts))
        .catch(error => console.error('Error:', error));
}

function handlePaginatedPosts(posts) {
    posts.forEach(post => console.log(post.title));
}

let currentPage = 1;
fetchPostsWithPagination(currentPage, handlePaginatedPosts);

// To fetch the next page, increment currentPage and call the function again:
// currentPage++;
// fetchPostsWithPagination(currentPage, handlePaginatedPosts);
```

**Expected Output**:  
- A list of 10 post titles displayed, with the ability to load the next 10 on demand.

---

### 19. **Handle Different Status Codes via Callbacks**

**Task**: Make an AJAX call to a specific URL and pass the response status code to a callback to handle different cases.

**Solution**:
```js
function fetchPostWithStatusHandling(postId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

function handlePostWithStatus(error, data) {
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('Post:', data);
    }
}

fetchPostWithStatusHandling(9999, handlePostWithStatus);
```

**Expected Output**:  
- Success message for 200 or error message for 404.

---

### 20. **Sequential AJAX Calls with Callbacks**

**Task**: Fetch the posts first, then for each post, fetch the comments and pass them to a callback to display them below the post titles.

**Solution**:
```js
function fetchPostsAndComments(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                fetchCommentsForPost(post.id, (comments) => {
                    callback(post.title, comments);
                });
            });
        })
        .catch(error => console.error('Error:', error));
}

function fetchCommentsForPost(postId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => callback(comments))
        .catch(error => console.error('Error:', error));
}

function handlePostWithComments(postTitle, comments) {
    console.log(`Post: ${postTitle}`);
    comments.forEach(comment => console.log(`  Comment: ${comment.body}`));
}

fetchPostsAndComments(handlePostWithComments);
```

**Expected Output**:  
- Each post title followed by its comments printed below it.
