import { PostAction, PostsActionsType } from "../../types/actionTypes";
import { IPostsState } from "../../types/types";

const initialState: IPostsState = {
  posts: [],
};

export const postReducer = (
  state = initialState,
  action: PostAction
): IPostsState => {
  switch (action.type) {
    case PostsActionsType.FETCH_ALL:
      return { posts: action.payload };
    case PostsActionsType.CREATE:
      return { posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};
