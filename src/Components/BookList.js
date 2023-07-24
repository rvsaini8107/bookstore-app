import React,{useEffect, useState} from "react";

function BookList({ books  }) {
    const [showInfo,setShowInfo] = useState(null);
    

    
  function Book(book, index) {
    console.log(book);
    let imgg ="",title="",description="",previewLink="";

    try{
        imgg = book.book.volumeInfo.imageLinks.thumbnail; 
        title = book.book.volumeInfo.title;
        description = book.book.volumeInfo.description;
        previewLink = book.book.volumeInfo.previewLink;
    }
    catch(error){
        console.log(error,"errrrro")
        
    }
    
    return (
        
      <div className="Book-item" onClick={()=>setShowInfo({book})}  key={index}>
        <div className="book-image-div">
          <img
            src={imgg}
            alt=""
            className="book-image"
          />
        </div>
        <div className={`book-info-div book_item_${book.index}`}>
          <div className="book-title">
            <p className="prag">{title}</p>
          </div>
          <div className="book-description">
            <p>{description}</p>
          </div>
          <div className="book-now-read">
          <a href={previewLink} target="_blank" rel="noopener noreferrer">
           <button className="now-read-btn">Now Read!</button>
           </a>
          </div>
        </div>
      </div>
    );
  }
  
  function OnClickShowBook(book, index) {
    console.log(book,"onclick")
    const bok = book.book.book.book;
    let thumbnail = "",title="",publishedDate="",authors="";
    let description="",averageRating="",ratingsCount="";
    let publisher="",language="",previewLink="",infoLink="";
    try{
        bok.index = index;
        thumbnail = bok.volumeInfo.imageLinks.thumbnail;
        title = bok.volumeInfo.title;
        publishedDate = bok.volumeInfo.publishedDate;
        authors = bok.volumeInfo.authors[0];
        description = bok.volumeInfo.description;
        averageRating = bok.volumeInfo.averageRating;
        ratingsCount = bok.volumeInfo.ratingsCount;
        publisher = bok.volumeInfo.publisher;
        language = bok.volumeInfo.language;
        previewLink = bok.volumeInfo.previewLink;
        infoLink = bok.volumeInfo.infoLink;
    }
    catch(error){
        console.log(error,"errrrro")
        
    }
    
    
    return (
        
      <div className="select-Book-item"   key={index}>
        <div className="select-book-image-div">
         { thumbnail && <img
            src={thumbnail}
            alt=""
            className="select-book-image"
          />}
        </div>
        <div className={`select-book-info-div book_item_${bok.index}`}>
          <div className="select-book-title">
            {title && <p className="select-prag">{title}</p>}
            {publishedDate && <p className="publish-data">Published On: {publishedDate}</p>}
          </div>
          <div className="select-book-auth">
            {authors && <p className="margin0">{authors}</p>}
          </div>
          <div className="select-book-description">
            {description && <p className="margin0">{description}</p>}
          </div>

            <div className="info-box">
                {averageRating && <div className="box-1">Avg Rating : {averageRating}</div>}
                {ratingsCount && <div className="box-2">Rating Count : {ratingsCount}</div>}
                {publisher && <div className="box-3">Publisher : {publisher}</div>}
                {language && <div className="box-4">Language : {language}</div>}
                {previewLink && <a href={previewLink} target="_blank" rel="noopener noreferrer">
                    <button className="select-now-read-btn">Now Read!</button>
                </a>}
                {infoLink && <a href={infoLink} target="_blank" rel="noopener noreferrer">
                    <button className="select-now-read-btn">More Info!</button>
                </a>}
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
      {showInfo!=null ? 
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
