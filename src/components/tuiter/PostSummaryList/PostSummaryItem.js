import React from "react";

const PostSummaryItem = (
    {
      post = {
      }
    }) => {


  return (
      <>
        {( () => {

            return (
                <div
                    className="row border-thin-1px-ashgray-first bg-color-222">
                  <div className="col-10 mt-3 mb-3">
                    <p className="m-0 fs-6 fg-color-ashgrey">{post.topic}</p>
                    <p className="m-0 fs-6 fw-bold fg-color-white">{post.userName}<i
                        className="fa-solid fa-circle-check"/><span
                        className="fw-lighter time-color override-bs"> - {post.time}</span>
                    </p>
                    <p className="m-0 fs-6 fw-bold fg-color-white">{post.title}</p>
                  </div>
                  <div className="col-2">
                    <img src={post.image} alt="React"
                         className="img-fluid  wd-center-image-logo"/>
                  </div>
                </div>
            )

        } )()}
      </>
  );
}

export default PostSummaryItem;