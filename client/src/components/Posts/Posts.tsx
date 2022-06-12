import { Grid } from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Post from "../Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const { posts } = useTypedSelector((state) => state.posts);
  const classes = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Posts;
