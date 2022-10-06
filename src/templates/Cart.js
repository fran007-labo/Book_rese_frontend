import React, { useState, useEffect } from 'react';
import {BookInCart, CheckOutAll, NothingsInCart} from '../components/Index'

// mui 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// http/headerにtokenを入れるためのモジュール
import { apiUrl } from '../settings/ApiClient'
import { auth } from "../settings/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Cart() {

  const [cartBooks, setCartBooks] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      const idToken = await auth.currentUser.getIdToken()
      apiUrl.get('/carts', { headers: {"Authorization" : `Bearer ${idToken}`} }).then(response => {
        setCartBooks(response.data)
      })
    })
  }, [])

  const BookIdList = []
  for (let i = 0; i < cartBooks.length; i++ ) { 
    const id = cartBooks[i].id
    BookIdList.push(id)
  }

  return (
    <>
      {cartBooks.length <= 0 ? <NothingsInCart /> : 
        <Grid container alignItems="center" justifyContent="center">
          <section className="c-section-wrapin">
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              pt: 10,
              gap: '4rem'
            }}>
              <div>
                {cartBooks.map((book, index) => {
                  return (
                    <BookInCart {...book} key={index} />
                  )
                })}
              </div>
              <CheckOutAll BookIdList={BookIdList} />
            </Box>
          </section>
        </Grid>
      }
    </>
  );
}