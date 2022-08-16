import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import instance from "../lib/ApiClient";
import { FlashMessages } from './Index'

export default function Book(props) {
  const [flashMessage, setFlashMessage]  = useState({message: '', status: '', open: false});
  
  const { id, title, author, body, created_at, imageUrl } = props;
  const lend = (id) => {
    instance.post(`/books/${id}/add_books`).then(response => {
      setFlashMessage({message: response.data['message'], status: response.data['status'], open: true})
    })
  };
  
  return (
    <div>
      {flashMessage.open && <FlashMessages {...flashMessage}/>}
      <Card
        sx={{ display: 'flex', flexDirection: 'column' }}
        >
        <CardMedia
          component="img"
          image={imageUrl[0]}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>
          {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => lend(id)}>Lend</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </div>
  );
}