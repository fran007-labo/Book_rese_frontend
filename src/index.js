import ReactDOM from 'react-dom';
import RouterConfig from "./settings/RouterConfig";
import Header from './components/Common/Header';
import { BrowserRouter, Routes} from 'react-router-dom';

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
      <Routes>
        <ConnectedRouter history={history}>
          <RouterConfig />
        </ConnectedRouter>
      
        <Header />
      </Routes>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);