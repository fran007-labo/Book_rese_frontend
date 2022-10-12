import React, { useEffect, useState } from 'react';
import Book from "../components/Books/Book";
import Pagination from '@mui/material/Pagination';
import axios from 'axios';

export default function BooksIndex() {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();
  const [displayedBooks, setDisplayedBooks] = useState([]); 
  const displayNum = 6; 
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/books`)
    .then(res => {
      setBooks(res.data)
      setPageCount(Math.ceil(res.data.length/displayNum))
      setDisplayedBooks(res.data.slice(((page - 1) * displayNum), page * displayNum))
    })
  }, [])

  const handleChange = (event, index) => {
    //ページ移動時にページ番号を更新
    setPage(index);

    //ページ移動時に表示データを書き換える
    setDisplayedBooks(books.slice(((index - 1) * displayNum), index * displayNum))
  }

  return (
    <section className="c-section-wrapin">
      <Pagination count={pageCount} page={page} color="primary" size="large" onChange={handleChange} style={{ display: "inline-block", padding: '30px'}} />
      <h1>Googleで簡単にサインイン出来ますので最初にお願いします。</h1>
      <h1>パスワードは僕が知ることが出来ませんので、安心してログインして下さい。</h1>
      <div className="p-grid__row">
        {displayedBooks.map((book, index) => 
          <Book {...book} key={index}/>
        )}
      </div>
      <Pagination count={pageCount} page={page} color="primary" size="large" onChange={handleChange} style={{ display: "inline-block", padding: '30px'}} />
    </section>
  )
}
