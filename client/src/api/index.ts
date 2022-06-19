import axios from "axios";
import { IPostsState, IPostState, IUser } from "../types/types";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const fetchPosts = () => API.get<IPostsState[]>(`/posts`);
export const createPost = (newPost: IPostState) =>
  API.post<IPostState>("/posts", newPost);
export const deletePost = (id: string) => API.delete(`/posts/${id}`);
export const updatePost = (id: string, post: IPostState) =>
  API.patch(`/posts/${id}`, post);
export const likePost = (id: string) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData: IUser) => API.post("/user/signin", formData);
export const signUp = (formData: IUser) => API.post("/user/signup", formData);
