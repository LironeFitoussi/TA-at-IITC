## Filtering and Displaying Books

This code is written in JavaScript and focuses on filtering and displaying books based on a search term entered by the user.

### Filter Books by Name

The `filterBooksByName` function is an asynchronous function (`async`) that takes a `name` parameter. Here's what it does step by step:

1. It uses the `fetch` API to fetch data from a local JSON file named `books.json`.
2. It waits for the response using `await` and then parses the response body as JSON using `response.json()`.
3. It creates a regular expression (`regex`) using the `name` parameter, with the 'i' flag for case-insensitive matching.
4. It filters the `books` array based on whether the `name` matches any book name using `regex.test(item.name)` and returns the filtered result.

### Display Filtered Books

The `displayBooks` function takes the `filteredBooks` array as a parameter and displays them on the webpage. Here's what it does:

1. It gets the element with the ID 'book-list' from the DOM.
2. It clears any previous results in `bookList` by setting its `innerHTML` to an empty string.
3. It iterates through each book in `filteredBooks`.
4. For each book, it creates a new `div` element (`bookItem`), sets its class to 'book-item', and sets its text content to the book's name.
5. It appends each `bookItem` to `bookList`.

### Event Listener for Search Input

The code sets up an event listener for an input field with the ID 'search-input'. When the user types into this input field, it triggers an asynchronous function that performs the following actions:

1. It gets the current value of the search input (`searchTerm`).
2. It calls `filterBooksByName` with the `searchTerm` to get the filtered books.
3. It calls `displayBooks` to update the displayed books based on the filtered result.

This code is useful for implementing a live search feature where books are filtered and displayed dynamically as the user types in the search input.


## Regular Expression (Regex) Explanation

The regular expression used in the code plays a crucial role in filtering books based on their names. Let's break down the regex pattern and its significance:

- `const regex = new RegExp(name, 'i');`: This line creates a new regular expression object (`RegExp`) using the `name` parameter provided to the `filterBooksByName` function. The `'i'` flag at the end indicates that the matching should be case-insensitive, meaning it will match both uppercase and lowercase letters.

- **Pattern Breakdown**:
  - `/`: The forward slashes denote the start and end of the regular expression pattern.
  - `name`: This part of the regex represents the literal string specified by the `name` parameter. In this context, it's used to match book names.
  - `/i`: The 'i' flag is an option that makes the regex case-insensitive. Without this flag, the regex would only match exactly as typed.

- **Example**:
  - Let's say the `name` parameter passed to `filterBooksByName` is "Harry". The resulting regular expression would be `/Harry/i`.

Regular expressions are powerful for pattern matching and are commonly used in tasks like string searching, validation, and data extraction. Understanding regex syntax and patterns can greatly enhance your ability to work with textual data efficiently.
