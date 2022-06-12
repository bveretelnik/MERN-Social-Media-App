import React, { FC, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import useStyles from "./styles";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useActions } from "./hooks/useActions";

const App: FC = () => {
  const classes = useStyles();
  const { getPosts } = useActions();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={"/assets/images/memories.png"}
          alt="icon"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts
              // setCurrentId={setCurrentId}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form
              // currentId={currentId}
              //  setCurrentId={setCurrentId}
              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;