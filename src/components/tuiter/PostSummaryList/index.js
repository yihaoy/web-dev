import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import post from "./posts.json";

const PostSummaryList = () => {
  return(
      <>
        {
          post.map(post => {
            return(
                <PostSummaryItem post={post} key={post.UID}/>
            );
          })
        }
      </>
  )};

export default PostSummaryList;