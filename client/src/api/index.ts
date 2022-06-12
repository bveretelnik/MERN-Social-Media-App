import axios from "axios";
import { IPostState } from "../types/types";

const url = "http://localhost:4000/posts";

export const fetchPosts = () => axios.get<any[]>(url);
export const createPost = (newPost: IPostState) => axios.post(url, newPost);
export const deletePost = (id: string) => axios.delete(`${url}/${id}`);
