export interface IPostState {
  _id?: string;
  title: string;
  message: string;
  creator: string;
  selectedFile?: string;
  tags: string[];
}

export interface IPostsState {
  posts: any[];
}

export interface IPost {
  _id?: string;
  createdAt?: string;
  creator: string;
  selectedFile?: string;
  likeCount?: 0;
  title: string;
  message: string;
  tags: string[];
}
