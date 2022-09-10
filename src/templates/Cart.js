import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// 右
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';

// date部分
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

function Cart() {

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
          {/* 左 */}
          <Card sx={{ maxWidth: '50%' }}>
            <CardContent>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
              }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: 250, height: 150 }}
                  image="https://mui.com/static/images/cards/paella.jpg"
                  alt="Paella dish"
                />
                <Box sx={{px: 2}}>
                  <Typography variant="body2" color="text.secondary">
                    title
                  </Typography>
                  <Typography variant="body2" color="text.secondary" pt={3}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </Box>
              </Box>
              <CardActions disableSpacing sx={{justifyContent: 'space-around', pt: 3}}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Date start"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Date return"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
              </CardActions>
            </CardContent>
          </Card>

          {/* 右 */}
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