import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { IUserState } from "../../types/types";
import useStyles from "./styles";
import decode from "jwt-decode";
import { getStorageValue } from "../../helper";

interface NavbarProps {
  user: IUserState | null;
  setUser: (...arg: any) => void;
}

export const NavBar: FC<NavbarProps> = ({ user, setUser }) => {
  // const [user, setUser] = useState<IUserState | null>(getStorageValue);
  const classes = useStyles();
  const { logOut } = useActions();
  const location = useLocation();
  const history = useNavigate();

  const logout = () => {
    logOut();
    setUser(null);
    history("/");
  };

  useEffect(() => {
    const token = user?.tokenId;
    if (token) {
      const decodedToken = decode(token);

      if ((decodedToken as { exp: number }).exp * 1000 < new Date().getTime())
        logout();
    }
    setUser(getStorageValue);
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img src={"/assets/images/memoriesText.png"} alt="icon" height="45px" />
        <img
          className={classes.image}
          src={"/assets/images/memories.png"}
          alt="icon"
          height="40px"
        />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.name}
              src={user?.imageUrl}
            >
              {user?.name as string}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.name as string}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
