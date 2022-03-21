const PostItem = (post) => {
  return(`
                    <li class="list-group-item bg-color-black">
                    <div class="row">

                        <div class="col-2">
                            <img src=${post.avatarIcon} alt="avatar" class="img-fluid wd-post-img-avatar mt-10">
                        </div>
                    
                      
                        <div class="col-7">
                            <div>
                                <p class="m-0 fs-6">${post.name} <i class="fa-solid fa-circle-check"></i> <span class="fg-color-darkgray time-color override-bs">${post.handle} - ${post.time}</span></span></p>
                                <p class="m-0 fs-6">${post.quote}</p>
                            </div>
                            
                            ${!post.skip ?
      `<div class="row mt-2 m-0 p-0 "> 
                                    <img src=${post.image} class="m-0"> 
                                </div>
                                <div class="m-0 p-0">
                                    <p class="ms-2 mt-0 mb-0 pt-2 fs-6">${post.title}</p>
                                    <p class="ms-2 mt-0 mb-0 p-0 fs-6 fg-color-darkgray">${post.story}</p>
                                    <p class="ms-2 mt-0 mb-2 p-0 fs-6 fg-color-darkgray"><i class="fa-solid fa-link"></i> ${post.website}</p>
                                </div>`:
      `<div class="row mt-2 m-0 p-0">
                                    <img src=${post.image} class="wd-post-img m-0 p-0">
                                </div>`
  }    
			
                            <div class="row mt-3">
                                <div class="row col-3">
                                    <p class="col-1 fg-color-darkgray"><a href="#"><i class="fa-regular fa-comment fg-color-darkgray"></i></a></p>
                                    <p class="col-1 ms-0 fg-color-darkgray">${post.comments}</p>
                                </div>
                                <div class="row col-3 ms-2">
                                    <p class="col-1 fg-color-darkgray"><a href="#"><i class="fa-solid fa-retweet fg-color-darkgray"></i></a></p>
                                    <p class="col-1 ms-0 fg-color-darkgray">${post.tweets}</p>
                                </div>
                                <div class="row col-3 ms-3">
                                    <p class="col-1 fg-color-darkgray"><a href="#"><i class="fa-solid fa-heart fg-color-darkgray"></i></a></p>
                                    <p class="col-1 ms-0 fg-color-darkgray">${post.heart}</p>
                                </div>
                                <div class="row col-3 ms-4">
                                    <p class="fg-color-darkgray"><a href="#"><i class="fa-solid fa-inbox fg-color-darkgray"></i></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </li>
    `);
}
export default PostItem;
