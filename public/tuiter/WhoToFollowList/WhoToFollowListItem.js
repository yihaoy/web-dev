const WhoToFollowListItem = (who) => {
  return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <img src=${who.avatarIcon} alt="avatar" class="img-fluid wd-bm-img-avatar ">
            </div>
            <div class="col-5">
                <p class="mt-0 mb-0 bolded">${who.userName} <i class="fa-solid fa-circle-check"></i></p><p class="mt-0 mb-0">${who.handle}</p>
            </div>
            <div class="col-5 mt-1 ml-2">
                <button class="btn btn-primary wd-left-button-tweet text-center override-button">
                    <span>Follow</span>
                </button>
            </div>
        </div>
    </li>
    `);
}
export default WhoToFollowListItem;
