### Part 1: API Operations through Postman

#### **Exercise 1: Create a Post**
- Use Postman to make a `POST` request to create a new post.
- URL: `http://localhost:3000/posts`
- Method: `POST`
- Body: JSON containing a title and content for the post.

---

#### **Exercise 2: Get All Posts**
- Use Postman to make a `GET` request to retrieve all posts.
- URL: `http://localhost:3000/posts`
- Method: `GET`

---

#### **Exercise 3: Get a Single Post by ID**
- Use Postman to make a `GET` request to retrieve a specific post by its ID.
- URL: `http://localhost:3000/posts/{id}`
- Method: `GET`

---

#### **Exercise 4: Update a Post**
- Use Postman to make a `PATCH` request to update a specific post by its ID.
- URL: `http://localhost:3000/posts/{id}`
- Method: `PATCH`
- Body: JSON containing the updated title and content.

---

#### **Exercise 5: Delete a Post**
- Use Postman to make a `DELETE` request to remove a post by its ID.
- URL: `http://localhost:3000/posts/{id}`
- Method: `DELETE`

---

#### **Exercise 6: Handle Errors for Non-existent Post**
- Use Postman to attempt to retrieve a post with an invalid or non-existent ID and observe the error response.
- URL: `http://localhost:3000/posts/{invalidId}`
- Method: `GET`

---

#### **Exercise 7: Validate Post Creation**
- Use Postman to send an incomplete post creation request (e.g., missing title) and observe the validation error response.
- URL: `http://localhost:3000/posts`
- Method: `POST`
- Body: JSON missing a required field (e.g., title or content).

---

### Part 2: Front-End (Vanilla JavaScript) and Displaying Data

#### **Exercise 8: Fetch All Posts and Display in Console**
- Use vanilla JavaScript to | fetch all posts from the API  | and log them to the console. |

---

#### **Exercise 9: Display Posts in an HTML List**
- Fetch posts from the API and display them in an unordered list (`<ul>`) on the webpage.

---

#### **Exercise 10: Fetch a Single Post by ID and Display Details**
- Fetch a single post by its ID from the API and display the post's title and content on the webpage.

---

#### **Exercise 11: Create a Post using a Form**
- Create a new post using an HTML form. Use vanilla JavaScript to send the form data to the API via a `POST` request.

---

#### **Exercise 12: Update a Post using a Form**
- Update an existing post by its ID using an HTML form. Use vanilla JavaScript to send the form data to the API via a `PATCH` request.

---

#### **Exercise 13: Delete a Post using a Button**
- Delete a post by its ID using a button. Use vanilla JavaScript to send a `DELETE` request to the API.

---

#### **Exercise 14: Add a Loading Indicator**
- Add a loading indicator to the page that displays while data is being fetched from the API and hides once the data is loaded.

---

#### **Exercise 15: Display Error Messages**
- Display an error message on the page if a request to the API fails (e.g., when trying to fetch a non-existent post).

---

#### **Exercise 16: Clear Form Fields After Submission**
- After successfully creating or updating a post, clear the form fields using vanilla JavaScript.

---

#### **Exercise 17: Display Success Message After Post Creation**
- Display a success message on the page after successfully creating a new post using the form.

---

#### **Exercise 18: Limit the Number of Posts Displayed**
- Fetch all posts from the API, but only display the first 5 posts on the webpage. Add a "Show More" button to load the next 5 posts.

---

#### **Exercise 19: Search for Posts by Title**
- Add a search input field that allows users to search for posts by title. Use vanilla JavaScript to filter the posts displayed on the page.

---

#### **Exercise 20: Sort Posts Alphabetically**
- Add a button to the page that allows users to sort the posts alphabetically by title. Use vanilla JavaScript to sort and re-display the posts.

--- 

These exercises progressively teach students to interact with an API and manipulate the data on a webpage using vanilla JavaScript.
