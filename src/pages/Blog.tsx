import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import BlogItem from '../components/BlogItem';
import Comments from '../components/Comments';
import Header from '../components/Header';
import { requestData } from '../services/request';
import '../styles/pages/Blog.sass';
import 'react-toastify/dist/ReactToastify.css';

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

type TypeComments = {
  id: number;
  name: string;
  body: string;
};

export default function Blog() {
  const [blogs, setBlogs] = useState<TypeBlogs[]>([]);
  const [users, setUsers] = useState<TypeUsers[]>([]);
  const [disable, setDisable] = useState(true);
  const [next, setNext] = useState(0);
  const [comments, setComments] = useState<TypeComments[]>([]);
  const [popup, setPopup] = useState(false);

  const getPosts = (endPoint: string) =>
    requestData(endPoint)
      .then((response) => setBlogs(response))
      .catch((error) => toast.error(error));

  const getUsers = (endPoint: string) =>
    requestData(endPoint)
      .then((response) => setUsers(response))
      .catch((error) => toast.error(error));

  const getComments = (endPoint: string) =>
    requestData(endPoint)
      .then((response) => setComments(response))
      .catch((error) => toast.error(error));

  useEffect(() => {
    const page = next * 20;
    const apiPosts = `/posts?_start=${page}&_limit=20`;
    const apiUsers = '/users';

    getPosts(apiPosts);
    getUsers(apiUsers);
  }, [next]);

  const commentsOn = (id: number) => {
    const apiComents = `/posts/${id}/comments`;

    getComments(apiComents);
    setPopup(true);
    document.body.style.overflow = 'hidden';
  };

  const commentsOff = () => {
    setPopup(false);
    document.body.style.overflow = 'auto';
  };

  const nextPage = () => {
    setNext(next + 1);
    setDisable(false);
  };

  const previousPage = () => {
    setNext(next - 1);
    if (next === 1) setDisable(true);
  };

  return (
    <>
      <Header />
      <div className="blog-container">
        <h1>Daily Blog</h1>
        <p className="blog-subtitle">
          um lugar incrível para se tornar produtivo e entretido por meio de atualizações diárias
        </p>
        <div className="blog-wrap">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <BlogItem blog={blog} users={users} commentsOn={commentsOn} />
            </div>
          ))}
        </div>
        <div className="nav-page">
          <button type="button" disabled={disable} onClick={() => previousPage()}>
            Anterior
          </button>
          <span>{next + 1}</span>
          <button type="button" onClick={() => nextPage()}>
            Próxima
          </button>
        </div>
        {popup && (
          <div className="comments-container">
            <Comments comments={comments} commentsOff={commentsOff} />
          </div>
        )}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
}
