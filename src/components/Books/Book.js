import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { apiUrl } from "../../settings/ApiClient";
import { FlashMessages } from '../Index'
import { Link } from 'react-router-dom';

const theme = createTheme();

const useStyles = makeStyles(({
  root: {
    [theme.breakpoints.down('sm')]: {
      margin: 8,
      width: 'calc(50% - 16px)'
    },
    [theme.breakpoints.up('md')]: {
      margin: 16,
      width: 'calc(33.3333% - 32px)'
    }
  },
  content: {
    display: 'flex',
    padding: '16 8',
    textAlign: 'left',
    '&:last-child': {
      paddingBottom: 16
    }
  },
  icon: {
    marginRight: 0,
    marginLeft: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '100%'
  },
  price: {
    color: theme.palette.warning.light,
    fontSize: 16
  },
  productName: {
    boxOrient: 'vertical',
    display: '-webkit-box',
    fontSize: 14,
    lineHeight: '18px',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      height: 36,
      lineClamp: 2,
    },
    [theme.breakpoints.up('md')]: {
      height: 18,
      lineClamp: 1,
    }
  }
}));

export default function Book(props) {
  const classes = useStyles();
  const [flashMessage, setFlashMessage] = useState({ message: '', status: '', open: false });

  const BookInfo = props;
  const { id, title, author, body, imageUrl, publisher } = BookInfo;

  const lend = (id) => {
    apiUrl.post(`/books/${id}/add_books`).then(response => {
      setFlashMessage({ message: response.data['message'], status: response.data['status'], open: true })
    })
  };

  return (
    <Card className={classes.root}>
      {flashMessage.open && <FlashMessages {...flashMessage}/>}
      <CardMedia
        className={classes.media}
        image={imageUrl[0]}
        title=""
      />
      <CardContent className={classes.content}>
        <div>
          <Typography className={classes.productName} color="textSecondary" component="p">
            {title}
          </Typography>
          <Typography className={classes.price} component="p">
            {author}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => lend(id)}>Lend</Button>
        <Button size="small">
          <Link to={{ pathname: `/book/edit/${id}`, state: BookInfo }}>Edit</Link>
        </Button>
      </CardActions>
    </Card>
  );
}