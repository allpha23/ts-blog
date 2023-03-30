import React from 'react';
import imgDefault from '../assets/unnamed.jpg';
import { TypeBlogs, TypeUsers } from '../interfaces/index';
import '../styles/components/BlogItem.sass';

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
