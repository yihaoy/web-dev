import React from "react";
const PostItem = (
    {
      post = {

      }
    }) => {
  return(
      <>
        <li className="list-group-item bg-color-black">
          <div className="row">

            <div className="col-2">
              <img src={post.avatarIcon} alt="avatar" className="img-fluid  wd-post-img-avatar"/>
            </div>

            <div className="col-10">
              <div>
                <p className="m-0 fs-6 ms-0">{post.name} <i className="fa-solid fa-circle-check"/>
                  <span className="fw-lighter time-color override-bs">{post.handle} - {post.time}
                    </span></p>
                <p className="m-0 fs-6" dangerouslySetInnerHTML={{__html: post["quote"]}}/>
              </div>

              <div className="row mt-2 p-0 wd-post-img">
                <img src={post.image} alt="image not found" className=" m-0"/>

              </div>
              <div className="m-0 p-0 ">
                <p className="ms-3  pt-2 fs-6">{post.title}</p>
                <p className="ms-3 fs-6 fg-color-darkgray">{post.story}</p>
                <p className="ms-3  fs-6 fg-color-darkgray"><i className="fa-solid fa-link"/> {post.website}</p>
              </div>

              <div className="row mt-3">
                <div className="row col-3">
                  <p className="col-1 fg-color-darkgray"><a href="#"><i className="fa-regular fa-comment fg-color-darkgray"/></a></p>
                  <p className="col-1 fg-color-darkgray">{post.comments}</p>
                </div>
                <div className="row col-3 ms-3">
                  <p className="col-1 fg-color-darkgray"><a href="#"><i className="fa-solid fa-retweet fg-color-darkgray"/></a></p>
                  <p className="col-1 fg-color-darkgray">{post.tweets}</p>
                </div>
                <div className="row col-3 ms-3">
                  <p className="col-1 fg-color-darkgray"><a href="#"><i className="fa-solid fa-heart fg-color-darkgray"/></a></p>
                  <p className="col-1  fg-color-darkgray">{post.heart}</p>
                </div>
                <div className="row col-3 ms-3">
                  <p className="fg-color-darkgray"><a href="#"><i className="fa-solid fa-inbox fg-color-darkgray"/></a></p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </>
  );
}

export default PostItem;