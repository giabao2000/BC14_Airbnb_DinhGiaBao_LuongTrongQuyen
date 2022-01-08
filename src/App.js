import { Route, Switch } from "react-router-dom";
import { renderRoutesHome } from "./routes";
import { lazy, Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Switch>
        <Route
          path="/login"
          component={lazy(() => import("./containers/HomeTemplate/LoginPage"))}
        />

        {renderRoutesHome()}

        {/* Page Not Found */}
        <Route
          path=""
          compoment={lazy(() => import("./containers/PageNotFound"))}
        />
      </Switch>
    </Suspense>
  );
}

export default App;
