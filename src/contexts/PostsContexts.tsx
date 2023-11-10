import { createContext } from 'react';

export interface Post {
  name: string;
  birth: string;
  comments: string;
}

export const PostsContext = createContext<{
  posts: Post[];
  addPost: (post: Post) => void;
}>({ posts: [], addPost: () => {} });