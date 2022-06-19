import React, { FC, useState } from "react";
import { Container } from "@mui/material";

import { NavBar } from "./components/NavBar/NavBar";
// import { Home } from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
// import { Auth } from "./components/Auth/Auth";
import withSuspense from "./hoc/withSuspense";
import { useTypedSelector } from "./hooks/useTypedSelector";
import PrivateRoute from "./components/PrivateRouter/PrivateRouter";
import { IUserState } from "./types/types";
import { getStorageValue } from "./helper";

const Home = React.lazy(() =>
  import("./components/Home/Home").then((module) => ({
    default: module.Home,
  }))
);
const Auth = React.lazy(() =>
  import("./components/Auth/Auth").then((module) => ({
    default: module.Auth,
  }))
);

const App: FC = () => {
  // const user = useTypedSelector((state) => state.user);
  const [user, setUser] = useState<IUserState | null>(getStorageValue);

  return (
    <Container maxWidth="lg">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        {/* <Route
          path="/"
          element={
            <PrivateRoute user={user}>
              <Home />
            </PrivateRoute>
          }
        /> */}
        <Route path="/" element={withSuspense(Home)} />
        <Route path="/auth" element={withSuspense(Auth)} />
      </Routes>
    </Container>
  );
};

export default App;
