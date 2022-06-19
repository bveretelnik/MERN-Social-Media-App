export interface IPostState {
  _id?: string;
  title: string;
  message: string;
  creator: string;
  selectedFile?: string;
  tags: string[];
}

export interface IPostsState {
  posts: IPost[];
}

export interface IPost {
  _id?: string;
  createdAt?: string;
  creator: string;
  selectedFile?: string;
  likeCount?: number;
  title: string;
  message: string;
  tags: string[];
}

export interface IUser {
  email?: string;
  familyName?: string;
  name?: string;
  givenName?: string;
  googleId?: string;
  imageUrl?: string;
  password?: string;
  tokenId?: string;
}

export interface IUserState extends IUser {
  tokenId?: string;
}
