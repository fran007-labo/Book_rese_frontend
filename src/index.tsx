import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from "./RouterConfig";
import Header  from './components/Common/Header';
import {BrowserRouter} from 'react-router-dom';
import Grid from '@mui/material/Grid';

import { Provider } from 'react-redux';
import createStore from './reducks/store/store';
import * as History from 'history';
import { ConnectedRouter } from 'connected-react-router';

const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <ConnectedRouter history={history}>
          <RouterConfig />
        </ConnectedRouter>
      </Grid>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);