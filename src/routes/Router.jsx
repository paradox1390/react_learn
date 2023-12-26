import { Switch, Route } from "react-router-dom";

import { Home } from "@pages/Home";
import { UserProfile } from "@pages/UserProfile";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/profile/:id">
        <UserProfile />
      </Route>
      <Route path="*">
        {() => {
          return <span>Page not found</span>;
        }}
      </Route>
    </Switch>
  );
};
