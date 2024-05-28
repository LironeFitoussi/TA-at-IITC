// Sample books data
const books = [
    { name: "The Great Gatsby" },
    { name: "The Catcher in the Rye" },
    { name: "To Kill a Mockingbird" },
    { name: "The Lord of the Rings" },
    { name: "1984" }
];

// Function to filter books by name
const filterBooksByName = (name) => {
    const regex = new RegExp(name, 'i');
    return books.filter(item => regex.test(item.name));
};

// Function to display filtered books
const displayBooks = (filteredBooks) => {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Clear previous results
    filteredBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.textContent = book.name;
        bookList.appendChild(bookItem);
    });
};

// Event listener for search input
document.getElementById('search-input').addEventListener('input', (event) => {
    const searchTerm = event.target.value;
    const filteredBooks = filterBooksByName(searchTerm);
    displayBooks(filteredBooks);
});
