import React,{useState} from "react";

function BookList({ books }) {
    const [showInfo,setShowInfo] = useState(null);
    
  function Book(book, index) {
    console.log(book);
    
    return (
        
      <div className="Book-item" onClick={()=>setShowInfo({book})}  key={index}>
        <div className="book-image-div">
          <img
            src={book.book.volumeInfo.imageLinks.thumbnail}
            alt=""
            className="book-image"
          />
        </div>
        <div className={`book-info-div book_item_${book.index}`}>
          <div className="book-title">
            <p className="prag">{book.book.volumeInfo.title}</p>
          </div>
          <div className="book-description">
            <p>{book.book.volumeInfo.description}</p>
          </div>
          <div className="book-now-read">
          <a href={book.book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
           <button className="now-read-btn">Now Read!</button>
           </a>
          </div>
        </div>
      </div>
    );
  }
  function OnClickShowBook(book, index) {
    const bok = book.book.book.book;
    console.log(book.book.book.book,"bb");
    
    return (
        
      <div className="select-Book-item"   key={index}>
        <div className="select-book-image-div">
          <img
            src={bok.volumeInfo.imageLinks.thumbnail}
            alt=""
            className="select-book-image"
          />
        </div>
        <div className={`select-book-info-div book_item_${bok.index}`}>
          <div className="select-book-title">
            <p className="select-prag">{bok.volumeInfo.title}</p>
            <p className="publish-data">Published On: {bok.volumeInfo.publishedDate}</p>
          </div>
          <div className="select-book-auth">
            <p className="margin0">{bok.volumeInfo.authors[0]}</p>
          </div>
          <div className="select-book-description">
            <p className="margin0">{bok.volumeInfo.description}</p>
          </div>

            <div className="info-box">
                <div className="box-1">Avg Rating : {bok.volumeInfo.averageRating}</div>
                <div className="box-2">Rating Count : {bok.volumeInfo.ratingsCount}</div>
                <div className="box-3">Publisher : {bok.volumeInfo.publisher}</div>
                <div className="box-4">Language : {bok.volumeInfo.language}</div>
                <a href={bok.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                    <button className="select-now-read-btn">Now Read!</button>
                </a>
                <a href={bok.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
                    <button className="select-now-read-btn">More Info!</button>
                </a>
            </div>
          {/* <div className="select-book-now-read">
            <button className="select-now-read-btn">Now Read!</button>
            <button className="select-now-read-btn">More Info!</button>
          </div> */}
        </div>
      </div>

    );
  }
  function BookImage(book, index) {
    let imgg =""
    try{
        imgg = book.book.volumeInfo.imageLinks.thumbnail; 
    }
    catch(error){
        console.log(error,"errrrro")
        
    }
    
    
    return (
      <div className="only-book-image-div" onClick={()=>setShowInfo({book})} key={index}>
            
            <img
            src={imgg}
            alt="image"
            className="only-book-image"
            />
            
        
      </div>
    );
  }
  // console.log(books,"helllbooks")
  return (
    <>
      {showInfo!=null? 
      <div className="book-list">
        <OnClickShowBook book={showInfo} index="1"/>
      </div>
      :
      <div className="book-list">
       {books.map((book, index) =>
          index < 3 ? <Book book={book} index={index} /> : ""
        )}
      </div>
      }
      <h2 style={{marginLeft:"2%"}}>More Books</h2>
      <div className="book-list-more">
        {books.map((book, index) =>
           index >= 3 && 
            <BookImage book={book} index={index} />
          
        )}
      </div>
    </>
  );
}

export default BookList;
