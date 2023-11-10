import { useState, useEffect } from "react";

import { PostsContext } from "../contexts/PostsContexts";

import { Post } from "../contexts/PostsContexts";

interface props{
    children: JSX.Element | JSX.Element []
}

export const PostsProvider = ({ children }: props) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const localStorageKey = 'posts';
  
    useEffect(() => {
      const storedPosts = localStorage.getItem(localStorageKey);
      if (storedPosts) setPosts(JSON.parse(storedPosts));
    }, []);
  
    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(posts));
    }, [posts]);
  
    const addPost = (post: Post) => setPosts([...posts, post]);
  
    return (
      <PostsContext.Provider value={{ posts, addPost }}>
        {children}
      </PostsContext.Provider>
    );
  };