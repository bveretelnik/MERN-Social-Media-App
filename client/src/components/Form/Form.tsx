import React, { FC, useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { IPost } from "../../types/types";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface IPropsForm {
  currentId: string;
  setCurrentId: (id: string) => void;
}

const Form: FC<IPropsForm> = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState<IPost>({
    title: "",
    message: "",
    creator: "",
    tags: [],
  });
  const classes = useStyles();
  const { posts } = useTypedSelector((state) => state.posts);
  const { createPost, updatePost } = useActions();

  const getCurrentPost = () => {
    if (currentId !== "") {
      return posts.find((post) => post._id === currentId);
    }
  };
  const post = getCurrentPost();

  useEffect(() => {
    if (post) return setPostData(post);
  }, [post]);

  const handleSubmit = async () => {
    try {
      if (currentId === "") {
        createPost(postData);
      } else {
        updatePost(currentId, postData);
      }
    } catch (error) {
      console.log((error as Error).message);
    }
    clear();
  };

  const clear = () => {
    setCurrentId("");
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: [],
    });
  };

  return (
    <Paper className={classes.paper}>
      <div className={`${classes.root} ${classes.form}`}>
        <Typography variant="h6">
          {currentId !== "" ? `Editing ${post.title}` : "Creating a Memory"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          minRows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }: { base64: string }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </div>
    </Paper>
  );
};
export default Form;
