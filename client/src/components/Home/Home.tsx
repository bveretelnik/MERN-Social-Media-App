import { Grid, Grow } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./styles";

export const Home = () => {
  const [currentId, setCurrentId] = useState("");
  const classes = useStyles();
  const { getPosts } = useActions();

  useEffect(() => {
    getPosts();
  }, [currentId]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.gridContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};
