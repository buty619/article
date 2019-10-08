import React, { useState } from "react";
import ArticlePublish from "./ArticlePublish";
import "../App.css";

export default function Article({ autor }) {
  const [article, setArticle] = useState({
    name: autor,
    text: "",
    likes: 0,
    comments: []
  });

  const [commentsFlag, setCommentsFlag] = useState(false);

  const handleOnChange = e => {
    setArticle({ ...article, text: e.target.value });
  };
  const handleOnClick = () => {
    setCommentsFlag(true);
  };
  const saveComment = comment => {
    const nextComment = [
      ...article.comments,
      { text: comment, likes: 0, comment: [] }
    ];
    setArticle({ ...article, comments: nextComment });
  };
  const save2Comment = (comment, index) => {
    const next2Comment = [
      ...article.comments[index].comment,
      { text: comment, likes: 0, comment: [] }
    ];
    const setNext2Comment = {
      ...article.comments[index],
      comment: next2Comment
    };
    const nextComment = [
      ...article.comments.slice(0, index),
      setNext2Comment,
      ...article.comments.slice(index + 1)
    ];
    setArticle({ ...article, comments: nextComment });
  };
  const addLike = () => {
    setArticle({ ...article, likes: article.likes + 1 });
    console.log(article);
  };
  const addCommentLike = (index1, index2) => {
    if (Number.isInteger(index2)) {
      const next2Like = {
        ...article.comments[index1].comment[index2],
        likes: article.comments[index1].comment[index2].likes + 1
      };
      const setNext2Like = [
        ...article.comments[index1].comment.slice(0, index2),
        next2Like,
        ...article.comments[index1].comment.slice(index2 + 1)
      ];
      const NextLike = { ...article.comments[index1], comment: setNext2Like };

      const setNextLike = [
        ...article.comments.slice(0, index1),
        NextLike,
        ...article.comments.slice(index1 + 1)
      ];
      setArticle({ ...article, comments: setNextLike });
    } else {
      const nextLike = {
        ...article.comments[index1],
        likes: article.comments[index1].likes + 1
      };
      const setNextLike = [
        ...article.comments.slice(0, index1),
        nextLike,
        ...article.comments.slice(index1 + 1)
      ];
      setArticle({ ...article, comments: setNextLike });
    }
  };
  return (
    <div>
      <h2 className="article-autorName">
        <b>Autor: </b>
        <i>{article.name}</i>
      </h2>
      {commentsFlag ? (
        <ArticlePublish
          article={article}
          addLike={addLike}
          saveComment={saveComment}
          save2Comment={save2Comment}
          addCommentLike={addCommentLike}
        />
      ) : (
        <div className="article-card">
          <h3>Article:</h3>
          <textarea
            value={article.text}
            onChange={handleOnChange}
          />
          <button className="article-button" onClick={handleOnClick}>Publish</button>
        </div>
      )}
    </div>
  );
}
