import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { renderHomeRoutes } from './routes'
import PageNotFound from './container/PageNotFound'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {renderHomeRoutes()}
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
