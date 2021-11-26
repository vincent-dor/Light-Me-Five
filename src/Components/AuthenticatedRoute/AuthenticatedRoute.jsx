import React, { useContext } from "react";

import { Route, Navigate} from "react-router-dom";
import Auth from "../contexts/Auth";

const AuthenticatedRoute = ({ path, component }) => {
    const { isAuthenticated } = useContext(Auth);
  
    return isAuthenticated ? (
      <Route exact path={path} component={component} />
    ) : (
      <Navigate to="/login" />
    );
  };
  
  export default AuthenticatedRoute;
