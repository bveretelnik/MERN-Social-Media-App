import { combineReducers } from "redux";
import { postReducer } from "./posts";

export const reducers = combineReducers({ posts: postReducer });

export type RootState = ReturnType<typeof reducers>;
