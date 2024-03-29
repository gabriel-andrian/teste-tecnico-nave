import Route from "./route";
import {
  Login,
  Navers,
  EditUser,
  NewUser,
  NotFound,
  ServerError,
} from "../pages";

import { Switch, Route as RouteNotFound } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/navers/new" exact component={NewUser} isPrivate />
      <Route path="/navers" exact component={Navers} isPrivate />
      <Route path="/navers/:id" exact component={EditUser} isPrivate />
      <Route path="/server-error" exact component={ServerError} isPrivate />
      <RouteNotFound>
        <NotFound />
      </RouteNotFound>
    </Switch>
  );
};

export default Routes;
