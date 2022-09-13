import React, { useState, useEffect } from 'react';
import apiUrl from '../settings/ApiClient'
import BookInCart from '../components/Carts/BookInCart'

// mui 
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function Cart() {

  const [cartBooks, setCartBooks] = useState([]);

  useEffect(() => {
    apiUrl.get('/carts').then(response => {
      setCartBooks(response.data)
    })
  }, [])

  const [value, setValue] = React.useState(new Date());
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={10}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          pt: 10
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

          <Card sx={{
            width: '100%',
            bgcolor: 'background.paper',
            maxWidth: '40%'
          }}>
            <List>
              <li>
                <Typography
                  sx={{ mt: 0.5, ml: 2 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                  Start Date
                </Typography>
              </li>
              <ListItem>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </ListItem>
              <Divider component="li" />
              <li>
                <Typography
                  sx={{ mt: 0.5, ml: 2 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                  Return Date
                </Typography>
              </li>
              <ListItem>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </ListItem>
            </List>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Cart