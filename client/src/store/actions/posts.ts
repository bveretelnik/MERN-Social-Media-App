import { PostsActionsType, PostAction } from "../../types/actionTypes";
import { Dispatch } from "redux";

import * as api from "../../api/index";
import { IPost } from "../../types/types";

export const getPosts = () => async (dispatch: Dispatch<PostAction>) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: PostsActionsType.FETCH_ALL, payload: data });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const createPost =
  (post: IPost) => async (dispatch: Dispatch<PostAction>) => {
    try {
      const { data } = await api.createPost(post);

      dispatch({ type: PostsActionsType.CREATE, payload: data });
    } catch (error) {
      console.log((error as Error).message);
    }
  };
