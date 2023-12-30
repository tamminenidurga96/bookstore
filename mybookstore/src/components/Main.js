
import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import Modal from "./Modal";
import './style.css'

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookdata, setBookData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const searchBook = async (evt) => {
    if (evt.key === "Enter") {
      try {
        const encodedQuery = encodeURIComponent(search);
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodedQuery}&key=YOUR_API_KEY&maxResults=40`;

        console.log("API Request URL:", apiUrl);

        const response = await axios.get(apiUrl);
        console.log("API Response:", response.data);

        setBookData(response.data.items || []); // Ensure that items is an array or set to an empty array
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error.response || error.message || error);
        setBookData([]); // Set to an empty array in case of an error
        setError("Error fetching data. Please try again.");
      }
    }
  };

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };
  const handleLogin = () => {
    
    if (username === "demo" && password === "password") {
      setIsLoggedIn(true);
      setLoginError(false);
    } else {
      setIsLoggedIn(false);
      setLoginError(true);
    }
  };



  return (
    <>
      <div className="header">
      <div className="row1">
          <h1>A room without books is like<br /> a body without a soul.</h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter your book name "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div>
            <img
             src="./images/bg1.png"
             alt=""
             style={{ width: "400px", height: "300px" }}
           />
         </div>
       </div>
     
      </div>
      <div className="container">
        {console.log("Book Data:", bookdata)}
        {bookdata.map((book) => (
          <Card key={book.id} book={book} openModal={openModal} />
        ))}
      </div>
      {selectedBook && <Modal book={selectedBook} closeModal={closeModal} />}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default Main;
