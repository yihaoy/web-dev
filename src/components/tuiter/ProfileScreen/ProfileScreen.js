import React from "react";
import {Link} from "react-router-dom";

const ProfileScreen = ({profile}) => {
  return(
      <>
        <div className="row">
          <div className="row col-12">
            <div className="col-2 wd-arrow-back mt-3"><i className="fa-solid fa-arrow-left fa-xl"></i></div>
            <div className="col-10 ps-0">
              <h5 className="mb-0 fw-bold">{profile.firstName}</h5>
              <p className="mb-0 fg-color-726D6D wd-font-size-15px">{profile.tweets.toLocaleString()} Tuit</p>
            </div>
          </div>

          <div className="row pe-0 col-12">

            <img className="pe-0 wd-tweet-banner-position" src={profile.bannerPicture} alt={"banner"}/>

            <div className=" row col-12">
              <div className="col-6">
                <img className="wd-tweet-profile-position wd-tweet-profile-responsive d-none d-sm-none d-md-inline d-lg-inline-inline d-xl-inline-flex d-xl-inline d-xxl-inline" src={profile.profilePicture} alt="profile"/>
              </div>


              <div className="col-12">
                <button className="btn btn-primary float-right wd-right-button-editprofile">
                  <Link to="/tuiter/profile/EditProfile" className="wd-text-decor-none">
                    <span className="wd-small-white-fontsize fw-bold">Edit profile</span>
                  </Link>
                </button>
              </div>
            </div>

          </div>

          <div className="row mt-4">
            <h5 className="mb-0 ms-4 fw-bold">{profile.firstName}</h5>
            <h6 className="mb-0 ms-4 fg-color-726D6D">@{profile.handle}</h6>
            <h6 className="mb-0 mt-3 ms-4 wd-paragraph-justify ">{profile.bio}</h6>
          </div>
          <div className="row mt-3">
            <div className="row col-4">
              <p className="mb-0 ms-4 col-1 fg-color-726D6D"><i className="fa-solid fa-location-dot fa-lg"></i></p>
              <p className="mb-0 ms-0 col-8 fg-color-726D6D d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xl-inline d-xxl-inline">{profile.location}</p>
            </div>
            <div className="row col-3">
              <p className="mb-0 ms-3 ps-0 col-1 fg-color-726D6D d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xl-inline d-xxl-inline"><i className="fa-solid fa-cake-candles fa-lg"></i></p>
              <p className="mb-0 ms-0 col-8 fg-color-726D6D d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xl-inline d-xxl-inline">{profile.dataOfBirth}</p>
            </div>
            <div className="row col-5">
              <p className="mb-0 ms-5 ps-0 col-1 fg-color-726D6D d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xl-inline d-xxl-inline"><i className="fa-regular fa-calendar fa-lg"></i></p>
              <p className="mb-0 ms-0 col-8 fg-color-726D6D d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xl-inline d-xxl-inline">{profile.dateJoined}</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="row col-5">
              <p className="ms-4 mb-0 col-1 fw-bold">{profile.followingCount}</p>
              <p className="ms-3 ps-2 mb-0 col-8 fg-color-726D6D nav-item d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Following</p>
            </div>
            <div className="row col-3">
              <p className="ms-0 ps-0 mb-0 col-1 fw-bold d-none d-sm-none d-md-none d-lg-inline d-xl-inline d-xl-inline d-xxl-inline">{profile.followersCount}</p>
              <p className="ms-3 ps-2 mb-0 col-8 fg-color-726D6D d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xl-inline d-xxl-inline">Followers</p>
            </div>
          </div>
        </div>
      </>
  )
}

export default ProfileScreen;