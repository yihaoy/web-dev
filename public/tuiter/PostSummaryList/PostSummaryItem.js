const PostSummaryItem = (post) => {
  return(`
        <div class="row border-thin-1px-ashgray bg-color-222">
            <div class="col-10 mt-2 mb-2">
                <p class="m-0 fs-6 fg-color-ashgrey">${post.topic}</p>

                <p class="m-0 fs-6 bolded fg-color-white">${post.userName}
                  <i class="fa-solid fa-circle-check"></i>
                  <span class="fw-lighter time-color override-bs"> - ${post.time}</span></p>
                <p class="m-0 fs-6 bolded  fg-color-white">${post.title}</p>
            </div>
            <div class="col-2">
                <img src="${post.image}" alt="React" class="img-fluid wd-center-image-logo

 ">
            </div>
        </div>
    `);
}
export default PostSummaryItem;