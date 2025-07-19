// Function to filter books by name
const filterBooksByName = async (name) => {
    const response = await fetch('./books.json');
    const books = await response.json();
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
document.getElementById('search-input').addEventListener('input', async (event) => {
    const searchTerm = event.target.value;
    const filteredBooks = await filterBooksByName(searchTerm);
    displayBooks(filteredBooks);
});
