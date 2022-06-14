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
    case PostsActionsType.DELETE:
      return {
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case PostsActionsType.UPDATE:
      return {
        posts: state.posts.map((post) =>
          post.id === action.payload._id ? action.payload : post
        ),
      };
    case PostsActionsType.LIKE:
      return {
        posts: state.posts.map((post) =>
          post._id === action.payload
            ? { ...post, likeCount: post.likeCount + 1 }
            : post
        ),
      };
    default:
      return state;
  }
};
