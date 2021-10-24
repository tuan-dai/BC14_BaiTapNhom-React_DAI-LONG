import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { renderAdminRoutes, renderHomeRoutes } from "./routes";
import { Suspense } from "react";
import PageNotFound from "./containers/PageNotFound";
import AuthPage from "./containers/AdminTemplate/AuthPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense>
          <Switch>
            <Route path="/admin" component={AuthPage} />
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
