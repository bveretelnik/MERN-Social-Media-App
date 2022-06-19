import { IPost, IUserState } from "./types";

export enum PostsActionsType {
  FETCH_ALL = "FETCH_ALL",
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  LIKE = "LIKE",
}

export enum UsersActionsType {
  AUTH = "AUTH",
  AUTH_GOOGLE = "AUTH_GOOGLE",
  LOGOUT = "LOGOUT",
}

interface FetchPostsAction {
  type: PostsActionsType.FETCH_ALL;
  payload: any[];
}
interface CreatePostAction {
  type: PostsActionsType.CREATE;
  payload: IPost;
}
interface DeletePostAction {
  type: PostsActionsType.DELETE;
  payload: string;
}
interface UpdatePostAction {
  type: PostsActionsType.UPDATE;
  payload: IPost;
}
interface LikePostAction {
  type: PostsActionsType.LIKE;
  payload: string;
}

interface AuthUserAction {
  type: UsersActionsType.AUTH;
  payload: IUserState;
}
interface AuthGoogleUserAction {
  type: UsersActionsType.AUTH_GOOGLE;
  payload: IUserState;
}
interface AuthUserAction {
  type: UsersActionsType.AUTH;
  payload: IUserState;
}
interface LogoutUserAction {
  type: UsersActionsType.LOGOUT;
  payload: any;
}

export type PostAction =
  | FetchPostsAction
  | CreatePostAction
  | DeletePostAction
  | UpdatePostAction
  | LikePostAction;

export type UserAction =
  | AuthUserAction
  | LogoutUserAction
  | AuthGoogleUserAction;
