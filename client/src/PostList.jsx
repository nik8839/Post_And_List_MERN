import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
const PostList = () => {
  // Initialize posts as an empty object
  const [posts, setPosts] = useState({});
  // Fetch posts once on mount
  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:4001/posts");
      console.log("Fetched posts:", res.data);
      // Set posts as an object (assuming res.data is an object)
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts(); // Call fetchPosts when the component mounts
  }, []); // Empty dependency array ensures it runs only once

  // Render posts by converting the object to an array using Object.values()
  const renderPosts = Object.values(posts).map((post) => (
    <div
      className="card"
      style={{ width: "30%", marginBottom: "20px" }}
      key={post.id}
    >
      <div className="card-body">
        <h3>{post.title}</h3>
    <CommentList postId={post.id}/>
      <CommentCreate postId={post.id}/>
      </div>
    </div>
  ));

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderPosts}

    </div>
  );
};

export default PostList;
