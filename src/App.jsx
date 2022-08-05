import React from 'react';
import { BooksIndex } from './components/Index';
import Grid from '@material-ui/core/Grid';


export default function App() {
  return (
    <div className="App">
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12} sm={8}>
          <BooksIndex />
        </Grid>
      </Grid>
    </div>
  )
}
