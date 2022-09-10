import ReactDOM from 'react-dom';
import RouterConfig from "./settings/RouterConfig";
import Header  from './components/Common/Header';
import Grid from '@mui/material/Grid';

import { Provider } from 'react-redux';
import createStore from './reducks/store/store';
import * as History from 'history';
import { ConnectedRouter } from 'connected-react-router';
import './styles/style.css';

const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <ConnectedRouter history={history}>
        <RouterConfig />
      </ConnectedRouter>
    </Grid>
  </Provider>
  , document.getElementById('root')
);