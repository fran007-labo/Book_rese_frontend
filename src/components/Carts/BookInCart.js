import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function BookInCart(props) {
  const [value, setValue] = React.useState(new Date());

  const BookInfo = props;
  const { title, author, imageUrl } = BookInfo;
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Card sx={{ mb: 5 }}>
        <CardContent>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <CardMedia
              component="img"
              sx={{ maxWidth: 250, height: 150 }}
              image={process.env.REACT_APP_S3_ENDPOINT + imageUrl}
            />
            <Box sx={{ px: 2 }}>
              <Typography variant="body2" color="text.secondary">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" pt={3}>
                {author}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}
