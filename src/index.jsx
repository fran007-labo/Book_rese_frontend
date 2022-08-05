import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from "./RouterConfig";
import Header  from './components/Common/Header';
import { BrowserRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <RouterConfig />
      </Grid>
      </BrowserRouter>
  </React.StrictMode>
  , document.getElementById('root')
);