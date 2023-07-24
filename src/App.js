
import './App.css';
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import React,{useState,useEffect} from 'react';
import axios from 'axios';


function App() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  // const [searchUpdate, setSearchUpdate] = useState(false);

  useEffect(() => {
    
    const handleSearch = async (query) => {
      console.log(query,"query",`https://www.googleapis.com/books/v1/volumes?q=${query.query}`);
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query.query}`
        );
        const searchResult = response.data.items;
        console.log(searchResult,"serachResult");
        setBooks(searchResult);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    handleSearch(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resultsHerry, resultsSharelock] = await Promise.all([
          axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter'),
          axios.get('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes')
        ]);
        const allData = [...resultsHerry.data.items, ...resultsSharelock.data.items];
        setBooks(allData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar onSearch={setSearchQuery} />
      {books.length > 0 && <BookList books={books}  />}
    </div>
  );
}

export default App;
