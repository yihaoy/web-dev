import React from "react";
const WhoToFollowListItem = (
    {who= { avatarIcon: '../../../images/nasa.png',
      userName: 'NASA',
      handle: 'NASA',
      UID:'4'
    }
    }) => {
    return(
        <>
          <li className="list-group-item">
              <div className="row">
                  <div className="col-2">
                      <img src={who.avatarIcon} alt="avatar" className="img-fluid wd-bm-img-avatar "/>
                  </div>
                  <div className="col-5">
                      <p className="mt-0 mb-0 bolded">{who.userName} <i className="fa-solid fa-circle-check"/></p><p className="mt-0 mb-0">{who.handle}</p>
                  </div>
                  <div className="col-5 mt-1 ml-2">
                      <button className="btn btn-primary wd-left-button-tweet text-center override-button">
                          <span>Follow</span>
                      </button>
                  </div>
              </div>
          </li>
        </>
          );
}
export default WhoToFollowListItem;
