function displayBooks(books) {
  const bookListContainer = document.getElementById('bookList');
  bookListContainer.innerHTML = '';

  books.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-item');
    bookDiv.innerHTML = `
    <p><strong>Book id:</strong> ${book.id}</p>
      <p><strong>Book Name:</strong> ${book.name}</p>
      <p><strong>Taken Date:</strong> ${book.taken}</p>
      <p><strong>Return Date:</strong> ${book.return}</p>
      <p><strong>Current Fine:</strong> ${book.fine}</p>
    `;
    bookListContainer.appendChild(bookDiv);
  });
}
/*
function getBooks() {
  axios.get('/api/books')
    .then(response => {
      const books = response.data;
      displayBooks(books);
    })
    .catch(error => {
      console.error(error);
    });
}
*/
function displayFirstFourBooks() {
  axios.get('/library/get-library')
    .then(response => {
      const firstFourBooks = response.data.slice(0, 4);
      displayBooks(firstFourBooks);
    })
    .catch(error => {
      console.error(error);
    });
}
/*
function searchBook() {
  const searchInput = document.getElementById('searchInput');
  const bookTitle = searchInput.value.trim();

  if (bookTitle) {
    axios.get(`/api/books/${encodeURIComponent(bookTitle)}`)
      .then(response => {
        const book = response.data;
        displaySearchedBook(book);
      })
      .catch(error => {
        console.error(error);
        alert('Book not found.');
      });
  }
}
/*
function displaySearchedBook(book) {
  const searchResultContainer = document.getElementById('searchResult');
  searchResultContainer.innerHTML = '';

  if (book) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-item');
    bookDiv.innerHTML = `
      <p><strong>Book Name:</strong> ${book.title}</p>
      <p><strong>Taken Date:</strong> ${book.takenDate}</p>
      <p><strong>Return Date:</strong> ${book.returnDate}</p>
      <p><strong>Current Fine:</strong> ${book.currentFine}</p>
    `;
    searchResultContainer.appendChild(bookDiv);
  } else {
    alert('Book not found.');
  }
}
*/
// Load books on page load
document.addEventListener('DOMContentLoaded', () => {
  displayFirstFourBooks();
});
