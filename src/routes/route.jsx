import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useUser } from "../providers/user";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { userToken } = useUser();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!userToken ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/navers",
            }}
          />
        );
      }}
    />
  );
};

export default Route;
