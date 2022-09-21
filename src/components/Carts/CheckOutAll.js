import React, {useState, useEffect} from 'react'

import { PrimaryButton } from '../Index'
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
        <ListItem sx={{justifyContent: 'center'}}>
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
        <ListItem sx={{justifyContent: 'center'}}>
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
        <ListItem sx={{justifyContent: 'center'}}>
          <PrimaryButton 
            label={"本を借りる"}
            onClick={() =>
              'nkfjsn'
            }
            />
        </ListItem>
      </List>
    </Card>
    </>
 )
}