import ReactDOM from 'react-dom';
import RouterConfig from "./settings/RouterConfig";
import Header from './components/Common/Header';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import createStore from './reducks/store/store';
import * as History from 'history';
import { ConnectedRouter } from 'connected-react-router';
import './styles/style.css';
import { DarkModeContextProvider } from "./context/darkModeContext";

const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <DarkModeContextProvider>
        <Header />
        <ConnectedRouter history={history}>
          <RouterConfig />
        </ConnectedRouter>
      </DarkModeContextProvider>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);