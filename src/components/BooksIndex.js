import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core'
import { Book } from './Index'
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BooksIndex() {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();
  const [books, setBooks] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState([]); 
  const displayNum = 6; 


  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/books`)
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
    <>
      <div style={{ textAlign: "center", padding: '50px 0'}}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Album layout
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained">Main call to action</Button>
          <Button variant="outlined">Secondary action</Button>
        </Stack>
        <Pagination count={pageCount} page={page} color="primary" size="large" onChange={handleChange} style={{ display: "inline-block", padding: '30px'}} />
        <Grid container spacing={2}>
          {displayedBooks.map((book) => 
            <Grid item xs={12} sm={3} key={book.id}>
              <Book {...book}/>
            </Grid>
          )}
        </Grid>
        <Pagination count={pageCount} page={page} color="primary" size="large" onChange={handleChange} style={{ display: "inline-block", padding: '30px' }} />
      </div>
    </>
  ) 
}