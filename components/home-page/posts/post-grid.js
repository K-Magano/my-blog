import React from "react";
import PostItem from "../../home-page/posts/post-item";
import classes from "@/components/home-page/posts/post-grid.module.css";

function PostGrid(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostGrid;
