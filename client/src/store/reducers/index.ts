import { combineReducers } from "redux";
import { postReducer } from "./posts";
import { userReducer } from "./users";

export const reducers = combineReducers({
  posts: postReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof reducers>;
