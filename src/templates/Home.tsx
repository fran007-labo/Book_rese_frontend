import { BooksIndex } from './index';
import Grid from '@mui/material/Grid';

export default function Home() {

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
