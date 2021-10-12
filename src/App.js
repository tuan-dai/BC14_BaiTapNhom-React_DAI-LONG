import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { renderAdminRoutes, renderHomeRoutes } from './routes'
import { Suspense } from 'react';
import PageNotFound from './containers/PageNotFound'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {renderHomeRoutes()}
            {renderAdminRoutes()}
            <Route component={PageNotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
