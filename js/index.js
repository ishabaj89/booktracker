
// ===================================
// BOOK TRACKER APPLICATION
// ===================================

// 1. Create an empty array to store books

const library = [];


// 2. Function to add a new book

function addBook() {

    const title = prompt("Enter book title:");

    if (!title || title.trim() === "") {
        alert("Book title cannot be empty!");
        return;
    }

    const author = prompt("Enter book author:");

    if (!author || author.trim() === "") {
        alert("Author name cannot be empty!");
        return;
    }

    // Create a book object

    const newBook = {
        title: title.trim(),
        author: author.trim(),
        isRead: false
    };

    // Add book object to library array

    library.push(newBook);

    alert("Book added successfully!");
}


// 3. Function to list all books

function listBooks() {

    if (library.length === 0) {
        alert("Your library is empty!");
        return;
    }

    console.log("========== MY BOOK LIBRARY ==========");

    // Loop through every book

    library.forEach(function(book, index) {

        console.log(
            `${index + 1}. Title: ${book.title} | 
            Author: ${book.author} | 
            Status: ${book.isRead ? "Read" : "Unread"}`
        );

    });
}


// 4. Function to mark a book as read

function markAsRead(title) {

    // Find the book by its title

    const book = library.find(function(book) {

        return book.title.toLowerCase() === title.toLowerCase();

    });

    if (book) {

        book.isRead = true;

        alert(`"${book.title}" marked as read!`);

    } else {

        alert("Book not found!");

    }
}


// 5. BONUS: Function to remove a book

function removeBook(title) {

    // Find the index of the book

    const bookIndex = library.findIndex(function(book) {

        return book.title.toLowerCase() === title.toLowerCase();

    });

    if (bookIndex !== -1) {

        const removedBook = library.splice(bookIndex, 1);

        alert(`"${removedBook[0].title}" removed successfully!`);

    } else {

        alert("Book not found!");

    }
}


// 6. BONUS: Function to list only unread books

function listUnreadBooks() {

    // Filter books where isRead is false

    const unreadBooks = library.filter(function(book) {

        return book.isRead === false;

    });

    if (unreadBooks.length === 0) {

        alert("You have no unread books!");

        return;

    }

    console.log("========== UNREAD BOOKS ==========");

    unreadBooks.forEach(function(book, index) {

        console.log(
            `${index + 1}. Title: ${book.title} | Author: ${book.author}`
        );

    });

}


// ===================================
// 7. MAIN MENU
// ===================================

let running = true;

while (running) {

    const choice = prompt(
        "📚 Book Tracker\n\n" +
        "1. Add Book\n" +
        "2. List All Books\n" +
        "3. Mark Book as Read\n" +
        "4. Remove Book\n" +
        "5. List Unread Books\n" +
        "6. Exit\n\n" +
        "Enter your choice:"
    );

    switch (choice) {

        case "1":

            addBook();

            break;


        case "2":

            listBooks();

            break;


        case "3": {

            const title = prompt("Enter the title of the book to mark as read:");

            if (title) {
                markAsRead(title.trim());
            }

            break;
        }


        case "4": {

            const title = prompt("Enter the title of the book to remove:");

            if (title) {
                removeBook(title.trim());
            }

            break;
        }


        case "5":

            listUnreadBooks();

            break;


        case "6":

            running = false;

            alert("Goodbye! Happy reading! 📚");

            break;


        default:

            alert("Invalid choice! Please enter a number between 1 and 6.");

    }

}

