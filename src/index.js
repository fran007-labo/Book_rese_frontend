import ReactDOM from 'react-dom';
import RouterConfig from "./settings/RouterConfig";
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import createStore from './reducks/store/store';
import * as History from 'history';
import { ConnectedRouter } from 'connected-react-router';
import './styles/style.css';
import { DarkModeContextProvider } from "./context/darkModeContext";
import { Sidebar, Navbar } from "./components/Index";

const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <DarkModeContextProvider>
        <div className="baseContainer">
          <Sidebar />
          <div className="homeContainer">
            <Navbar />
            {/* <Header /> */}
            <ConnectedRouter history={history}>
              <RouterConfig />
            </ConnectedRouter>
          </div>
        </div>
      </DarkModeContextProvider>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);