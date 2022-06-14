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

export const deletePost =
  (id: string) => async (dispatch: Dispatch<PostAction>) => {
    try {
      await api.deletePost(id);
      dispatch({ type: PostsActionsType.DELETE, payload: id });
    } catch (error) {
      console.log((error as Error).message);
    }
  };

export const updatePost =
  (id: string, post: IPost) => async (dispatch: Dispatch<PostAction>) => {
    try {
      await api.updatePost(id, post);
      dispatch({ type: PostsActionsType.UPDATE, payload: post });
    } catch (error) {
      console.log((error as Error).message);
    }
  };

export const likePost =
  (id: string) => async (dispatch: Dispatch<PostAction>) => {
    try {
      await api.likePost(id);
      dispatch({ type: PostsActionsType.LIKE, payload: id });
    } catch (error) {
      console.log((error as Error).message);
    }
  };
