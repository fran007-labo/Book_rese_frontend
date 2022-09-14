import React, { useState, useEffect } from 'react';
import { apiUrl } from '../settings/ApiClient'
import {BookInCart, CheckOutAll} from '../components/Index'

// mui 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Cart() {

  const [cartBooks, setCartBooks] = useState([]);

  useEffect(() => {
    apiUrl.get('/carts').then(response => {
      setCartBooks(response.data)
    })
  }, [])

  const BookIdList = []
  for (let i = 0; i < cartBooks.length; i++ ) { 
    const id = cartBooks[i].id
    BookIdList.push(id)
  }

  return (
    <Grid container alignItems="center" justifyContent="center">
      <section className="c-section-wrapin">
      {/* <Grid item xs={10}> */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          pt: 10,
          gap: '4rem'
        }}>
          <div>
            {cartBooks.length > 0 && (
              cartBooks.map((book, index) => {
                return (
                  <BookInCart {...book} key={index} />
                )
              })
            )}
          </div>

          {/* <div> */}
            <CheckOutAll BookIdList={BookIdList} />
          {/* </div> */}

        </Box>
      {/* </Grid> */}
      </section>
    </Grid>
  );
}