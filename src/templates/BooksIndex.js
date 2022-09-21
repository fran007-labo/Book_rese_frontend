import React, { useEffect, useState } from 'react';
import Book from "../components/Books/Book";
import Pagination from '@mui/material/Pagination';
import axios from 'axios';

// import { useDispatch, useSelector } from 'react-redux';
// import { getSignedIn } from "../reducks/users/selectors";

export default function BooksIndex() {

  // const selector = useSelector((state) => state);
  // const isSignedIn = getSignedIn(selector);
  // console.log(isSignedIn)

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();
  const [displayedBooks, setDisplayedBooks] = useState([]); 
  const displayNum = 8; 
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
      <div className="p-grid__row">
        {displayedBooks.map((book, index) => 
          <Book {...book} key={index}/>
        )}
      </div>
      <Pagination count={pageCount} page={page} color="primary" size="large" onChange={handleChange} style={{ display: "inline-block", padding: '30px'}} />
    </section>
  )
}
