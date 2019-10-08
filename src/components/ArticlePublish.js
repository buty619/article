import React, { useState } from "react";
import Comment from "./Comment";
import "../App.css";

export default function ArticlePublish({
  article,
  addLike,
  saveComment,
  save2Comment,
  addCommentLike
}) {
  const [comment, setComment] = useState("");

  const handleOnChange = e => {
    setComment(e.target.value);
  };
  const handleOnKeyPress = e => {
    if (e.key === "Enter") {
      saveComment(comment);
      setComment("");
    }
  };
  return (
    <div className="article-publish-card">
      <p className="article-publish-card-p">{article.text}</p>
      <h4>
        <i className="far fa-thumbs-up" onClick={addLike} />: {article.likes}
      </h4>
      <div>
        <h3>Add Comment: </h3>
        <input
          value={comment}
          onChange={handleOnChange}
          onKeyPress={handleOnKeyPress}
        />
      </div>
      {article.comments.map((comment, index) => (
        <div key={index} className="comment-card">
          <Comment
            comment={comment}
            addCommentLike={index2 => addCommentLike(index, index2)}
            save2Comment={comment => save2Comment(comment, index)}
          />
        </div>
      ))}
    </div>
  );
}
