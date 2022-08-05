import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Book1(props) {
  const { id, title, body, imageUrl } = props;
  return (
    <div>
      <Card
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          image={imageUrl}
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
          <Button size="small" href={`/post/${id}`}>View</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </div>
  );
}