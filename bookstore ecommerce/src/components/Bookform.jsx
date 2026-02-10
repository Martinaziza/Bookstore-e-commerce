

const Bookform = ({formData, setFormData, handleSubmit, handleUpdateBook, handleDeleteBook}) => {

const isEditing = !!formData.id || !!handleUpdateBook;
  return (
    <div>
      <form onSubmit={isEditing ? handleUpdateBook : handleSubmit} className="book-form">
      <div className="book-form-div">
      <div>
        <label>
          Book image:
          <input
            value={formData.image}
            onChange={(e) => {
              setFormData({...formData, image: e.target.value});
            }}
            type="text"
            placeholder="Add image url"
          />
        </label>

        <label>
          Book name:
          <input 
          value={formData.book_name}
          onChange={(e) => {
              setFormData({...formData, book_name: e.target.value});
            }}
          type="text" placeholder="Book name" />
        </label>

            <label>
         Author name:
          <input 
          value={formData.author}
          onChange={(e) => {
              setFormData({...formData, author: e.target.value});
            }}
          type="text" placeholder="Book author name" />
        </label>

            <label> 
         Category:
          <input 
          value={Array.isArray(formData.categories) ? formData.categories.join(", ") : formData.categories}
          onChange={(e) => {
              setFormData({...formData, categories: e.target.value.split(", ").map(cat => cat.trim())});
            }}
          type="text" placeholder="Add book category" />
        </label>


        <label>
         Price:
          <input 
          value={formData.price}
          onChange={(e) => {
              setFormData({...formData, price: e.target.value});
            }}
          type="number" placeholder="Book price" />
        </label>

        <label>
         Discounts:
          <input 
          value={formData.discounts}
          onChange={(e) => {
              setFormData({...formData, discounts: e.target.value});
            }}
          type="number"
            max={1}
          />
        </label>
</div>
<div>

        <label>
         Stock:
          <input 
          className="form-checkbox"
          checked={formData.in_stock}
          onChange={(e) => {
              setFormData({...formData, in_stock: e.target.checked});
            }}
          type="checkbox"/>
        </label>
        
         <label>
         Bestseller:
          <input 
          className="form-checkbox"
          checked={formData.is_bestseller}
          onChange={(e) => {
              setFormData({...formData, is_bestseller: e.target.checked});
            }}
          type="checkbox"/>
        </label>
        
        <label>
         Rating:
          <input 
          value={formData.rating}
          onChange={(e) => {
              setFormData({...formData, rating: e.target.value});
            }}
          type="text" placeholder="Book rating" />
        </label>

        <label>
         Description:
          <input 
          value={formData.description}
          onChange={(e) => {
              setFormData({...formData, description: e.target.value});
            }}
          type="text" placeholder="Book description" />
        </label>
        
        <label>
         Publication Date:
          <input 
          value={formData.pub_date}
          onChange={(e) => {
              setFormData({...formData, pub_date: e.target.value});
            }}
          type="text" placeholder="yyyy/mm/dd" />
        </label>
        </div>
      </div>
        <div className="admin-buttons-div">
 <button type="submit" className="submit-button">{isEditing ? "Update Book" : "Launch Book"}</button>
 <button type="submit" onClick={handleDeleteBook} className="delete-button">Delete Book</button> 
          
</div>

      </form>
    </div>
  );
};

export default Bookform;

// id": "BK-001",
//     "book_name": "Harry Potter and the Sorcerer's Stone",
//     "author": "J.K. Rowling",
//     "categories": [
//       "Fantasy",
//       "YA"
//     ],
//     "price": 24.99,
//     "discounts": 0.15,
//     "in_stock": true,
//     "is_bestseller": true,
//     "rating": 4.9,
//     "description": "A young boy discovers he is a wizard.",
//     "image": "https://covers.openlibrary.org/b/isbn/9780545582889-M.jpg",
//     "pub_date": "1997-06-26"
