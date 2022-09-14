import React, {useState, useEffect} from 'react'

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function CheckOutAll(props) {
  
  const BookIdList = props.BookIdList
  console.log(BookIdList)
  
  const [value, setValue] = useState(new Date());
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Card sx={{
      width: '40%',
      bgcolor: 'background.paper'
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
    </>
 )
}