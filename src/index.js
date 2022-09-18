import ReactDOM from 'react-dom';
import RouterConfig from "./settings/RouterConfig";
import Header from './components/Common/Header';
import { BrowserRouter, Switch} from 'react-router-dom';

import { Provider } from 'react-redux';
import createStore from './reducks/store/store';
import * as History from 'history';
import { ConnectedRouter } from 'connected-react-router';
import './styles/style.css';

const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <ConnectedRouter history={history}>
        <RouterConfig />
      </ConnectedRouter>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);