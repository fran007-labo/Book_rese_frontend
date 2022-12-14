import React, {useState, useEffect, useCallback} from 'react'

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
import { apiUrl } from '../../settings/ApiClient'

export default function CheckOutAll(props) {

  const [startDate, setStartDate]   = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const inputStartDate = useCallback((newValue) => {
    setStartDate(newValue)
  }, [startDate])

  const inputReturnDate = useCallback((newValue) => {
    setReturnDate(newValue)
  }, [returnDate])

  const checkOutAll = () => {
    const url = '/check_outs'
    const data = {start_date: startDate, return_date: returnDate}
    apiUrl.post(url, data).then((response) => {
      window.location.reload();
    })
  }

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
            貸出スタート日
          </Typography>
        </li>
        <ListItem sx={{justifyContent: 'center'}}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              inputFormat="MM/dd/yyyy"
              value={startDate}
              onChange={inputStartDate}
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
            返却日
          </Typography>
        </li>
        <ListItem sx={{justifyContent: 'center'}}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              inputFormat="MM/dd/yyyy"
              value={returnDate}
              onChange={inputReturnDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </ListItem>
        <Divider component="li" />
        <ListItem sx={{justifyContent: 'center'}}>
          <PrimaryButton 
            label={"本を借りる"}
            onClick={() =>
              checkOutAll()
            }
            />
        </ListItem>
      </List>
    </Card>
    </>
 )
}