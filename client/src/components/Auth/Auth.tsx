import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import { Input } from "../Input/Input";
import { GoogleLogin } from "react-google-login";
import IconGoogle from "../IconGoogle/IconGoogle";
import { gapi } from "gapi-script";
import { IUser } from "../../types/types";
import { useActions } from "../../hooks/useActions";
import { useNavigate } from "react-router-dom";

type FormData = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

const initialState: FormData = {
  email: "",
  password: "",
};

export const Auth: FC = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { signin, signup, signinGoogle } = useActions();
  const history = useNavigate();

  const classes = useStyles();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "275123822153-iu3kknafdiuaefpdde7j0vn9tnj06qkb.apps.googleusercontent.com",
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const handleSubmit = () => {
    if (isSignup) {
      signup(formData, history);
    } else {
      signin(formData, history);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const switchMode = () => {
    setIsSignup((prev) => !prev);
  };

  const handleShowPassword = () => {};

  const googleSuccess = async (res: any) => {
    const result: IUser = res?.profileObj;
    const token: string = res?.tokenId;
    try {
      signinGoogle({ ...result, tokenId: token }, history);
    } catch (error) {
      console.log(error);
    }
  };
  const googleError = async (error: any) => console.log(error);

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        <div className={classes.form}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="275123822153-iu3kknafdiuaefpdde7j0vn9tnj06qkb.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<IconGoogle />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </Container>
  );
};
