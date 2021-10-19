import './App.css';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'
import { renderAdminRoutes, renderHomeRoutes } from './routes'
import PageNotFound from './containers/PageNotFound'
import AuthPage from './containers/AdminTemplate/AuthPage';
import { createBrowserHistory } from 'history'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={AuthPage} />
          {renderHomeRoutes()}
          {renderAdminRoutes()}
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
