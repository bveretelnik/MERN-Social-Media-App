import { IPost, IPosts } from "./types";

export enum PostsActionsType {
  FETCH_ALL = "FETCH_ALL",
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  LIKE = "LIKE",
}

interface FetchPostsAction {
  type: PostsActionsType.FETCH_ALL;
  payload: any[];
}
interface CreatePostAction {
  type: PostsActionsType.CREATE;
  payload: IPost;
}

export type PostAction = FetchPostsAction | CreatePostAction;
