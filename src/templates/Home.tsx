import { FC } from "react";
import { BooksIndex } from './index';
import Grid from '@mui/material/Grid';

const Home: FC = () => {

  return (
    <div className="App">
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={8}>
          <BooksIndex />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
