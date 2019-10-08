import React, { useState } from "react";
import "../App.css";

export default function Comment({ comment, addCommentLike, save2Comment }) {
  const [commentOfComment, setCommentOfComment] = useState("");
  const handleOnChange = e => {
    setCommentOfComment(e.target.value);
  };
  const handleOnKeyPress = e => {
    if (e.key === "Enter") {
      save2Comment(commentOfComment);
      setCommentOfComment("");
    }
  };
  return (
    <div>
      <p className="comment-card-p">{comment.text}</p>
      <b><i className="far fa-thumbs-up" onClick={addCommentLike} />: {comment.likes}</b>
      <div>
        <input
          value={commentOfComment}
          onChange={handleOnChange}
          onKeyPress={handleOnKeyPress}
        />
      </div>
      {comment.comment.map((comment, index) => (
        <div key={index} className="comment-card">
          <Comment
            comment={comment}
            addCommentLike={() => addCommentLike(index)}
            save2Comment={comment => save2Comment(comment, index)}
          />
        </div>
      ))}
    </div>
  );
}
