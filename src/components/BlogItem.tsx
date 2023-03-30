import React from 'react';
import imgDefault from '../assets/unnamed.jpg';
import '../styles/components/BlogItem.sass';

type TypeBlogs = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type TypeUsers = {
  id: number;
  username: string;
};

export default function BlogItem({
  blog,
  users,
  commentsOn,
}: {
  blog: TypeBlogs;
  users: TypeUsers[];
  commentsOn: Function;
}) {
  const findUser = (userId: number) => {
    const user = users.find((e) => userId === e.id);
    return user?.username;
  };

  return (
    <div className="blog-item" onClick={() => commentsOn(blog.id)}>
      <h4>{blog.title}</h4>
      <p>{blog.body}</p>
      <div className="post-owner">
        <img src={imgDefault} alt="imgDefault" />
        <p>
          <span>@</span>
          {findUser(blog.userId)}
        </p>
      </div>
    </div>
  );
}
