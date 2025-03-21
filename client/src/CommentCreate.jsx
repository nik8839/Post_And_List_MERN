import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content,setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `http://localhost:4002/posts/${postId}/comments`,
      {
        content,
      }
    );
    console.log(res);
    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comments</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentCreate;
