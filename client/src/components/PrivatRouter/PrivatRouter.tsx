import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { IUser } from "../../types/types";

interface PrivateRouterProps {
  children: React.ReactElement;
  user: IUser | null;
}

const PrivateRoute: FC<PrivateRouterProps> = ({ children, user }) => {
  return user ? children : <Navigate replace to="/auth" />;
};

export default PrivateRoute;
