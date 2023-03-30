import React, { MouseEventHandler } from 'react';
import imgDefault from '../assets/unnamed.jpg';
import { TypeComments } from '../interfaces/index';
import '../styles/components/Comments.sass';

export default function Comments({
  comments,
  commentsOff,
}: {
  comments: TypeComments[];
  commentsOff: MouseEventHandler;
}) {
  return (
    <div className="comments">
      <div className="comments-header">
        <h4>
          Comentários <span>{comments.length}</span>
        </h4>
        <button className="btn-popup" type="button" onClick={commentsOff}>
          X
        </button>
      </div>
      <div className="comments-itens">
        <div className="input-field">
          <img src={imgDefault} alt="imgDefault" />
          <div className="input">
            <input type="text" placeholder="Adicionar um comentário..." />
            <span />
            <button type="button">Comentar</button>
          </div>
        </div>
        {comments.map(({ id, name, body }) => (
          <div key={id} className="comment">
            <img src={imgDefault} alt="imgDefault" />
            <div>
              <h5>{name}</h5>
              <p>{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
