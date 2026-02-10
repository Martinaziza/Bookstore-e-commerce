// import { BookstoreContext } from "../context/BookstoreContext"
// import BookCard from "../components/BookCard"
// import { useContext, useState } from "react"



// const Homepage = () => {
//   const {books} = useContext(BookstoreContext)
//   const [currentPage, setCurrentPage] = useState(1)
//   const itemsPerPage = 25
//   const lastItemIndex = currentPage * itemsPerPage
//   const firstItemIndex = lastItemIndex - itemsPerPage
//   const totalPages = Math.ceil(books.length/itemsPerPage)
//   const currentItems = books.slice(firstItemIndex, lastItemIndex)

//   return (
//     <div>
//       {currentItems.map((book) => (
//         <BookCard key={book.id} books={book}/>
//       ))}

//       <div className="pagination">
//                 <button 
//                 className="pagination-buttons"
//                 disabled={currentPage==1}
//                 onClick={() => setCurrentPage(currentPage-1)}
//                 >Prev
//                 </button>

//                 Page {currentPage} of {totalPages}

//                 <button 
//                 className="pagination-buttons"
//                 disabled={currentPage==totalPages}
//                 onClick={() => setCurrentPage(currentPage+1)}
//                 >Next
//                 </button>
//             </div>


//     </div>
//   )
// }

import { BookstoreContext } from "../context/BookstoreContext"
import BookCard from "../components/BookCard"
import { useContext, useState, useEffect } from "react"

const Homepage = () => {
  // 1. Pull the search 'query' from your context
  const { books, query } = useContext(BookstoreContext)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 25

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [currentPage]);
  // 2. CRITICAL: Reset to page 1 whenever the search query changes
  // If you are on page 5 and search for "Harry", you might only have 1 page of results.
  // If you don't reset, you'll be on "Page 5 of 1" and see nothing!
  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  // 3. STEP 1: Filter the entire books list based on the search query
  const filteredBooks = books.filter((book) =>
    book.book_name.toLowerCase().includes(query.toLowerCase())
  );



  // 4. STEP 2: Calculate pagination based on the FILTERED list, not the original list
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  
  // 5. STEP 3: Slice the filtered results
  const currentItems = filteredBooks.slice(firstItemIndex, lastItemIndex);

  return (
    <div>
      {/* Grid container for cards */}
      <div className="book-list-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {currentItems.length > 0 ? (
          currentItems.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>No books found matching "{query}"</p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >Prev</button>

          <span>Page {currentPage} of {totalPages}</span>

          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >Next</button>
        </div>
      )}
    </div>
  )
}

export default Homepage




