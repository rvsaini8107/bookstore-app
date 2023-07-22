
import './App.css';
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import BookDetails from "./Components/BookDetails";
import React,{useState,useEffect} from 'react';
import axios from 'axios';
function App() {

  const [books,setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("java");
  // useEffect(()=>{
    const handleSearch = async (query) => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}`
        );
  
        const searchResult = response.data.items;
        setBooks(searchResult);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };
  //   handleSearch({searchQuery})
  // },[searchQuery])
  

  useEffect(()=>{
    
    const DataFetch = async ()=>{

      try{
        const resultsHerry = await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
        const resultsSharelock = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes"); 
        const AllData = resultsHerry.data.items.concat(resultsSharelock.data.items)
        // console.log(AllData)
        setBooks(()=>AllData);
      }
      catch(error){console.log(error,"error Fetching time.....")}
    }
    DataFetch()
  },[]);
  
  // console.log(books,"bokesdfas",books.length>1)
  return (
    <div className="App">
       
      <Navbar onSearch={handleSearch}/>
      {books.length>1&&
        <BookList books={books}/>
      }
    </div>
  );
}

export default App;
