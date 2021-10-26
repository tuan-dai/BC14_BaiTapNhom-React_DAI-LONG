import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { renderAdminRoutes, renderHomeRoutes } from './routes'
import PageNotFound from './containers/PageNotFound'
import AuthPage from './containers/AdminTemplate/AuthPage';
import SignUp from './containers/HomeTemplate/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={AuthPage} />
          <Route path="/sign-up" component={SignUp} />
          {renderHomeRoutes()}
          {renderAdminRoutes()}
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
