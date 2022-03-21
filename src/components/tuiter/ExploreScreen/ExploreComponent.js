import React from "react";
import PostSummaryList from "../PostSummaryList/index";

const ExploreComponent = () => {
  return(
    <>

        <div className="row mb-1">
          <div className="col-10 mt-1 wd-search-container ">
              <input className="col-12 wd-search-mid " type="search" placeholder="Search"/>
              <i className="fa-solid fa-magnifying-glass wd-center-magnify-glass"/>
            </div>
            <div className="col-1 d-lg-inline d-none d-sm-inline d-md-inline d-lg-inline d-xl-inline d-xxl-inline">
            <a href="explore-settings.html"><i className="fa-solid fa-gear fa-2x bg-color-black fg-color-deepskyblue"/></a>
            </div>
        </div>
        

        <div className="row mt-2">
            <ul className="nav nav-tabs">
                <li className="nav-item ">
                    <a className="nav-link fg-color-white" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fg-color-lightgrey" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fg-color-lightgrey" href="news.html">News</a>
                </li>
                <li className="nav-item d-none d-sm-inline d-md-inline d-lg-inline d-xl-inline d-xxl-inline">
                    <a className="nav-link fg-color-lightgrey" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xl-inline d-xxl-inline">
                    <a className="nav-link fg-color-lightgrey" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
        </div>
        

        <div className="row mt-2 wd-text-container">
            <img src="../tuiter/images/spacex.jpg" alt="space x starship" className="m-0 p-0"/>
            <div className="wd-text-bottom-left ">SpaceX's Starship</div>
        </div> 
               

        <div className="mt-2">
          <PostSummaryList/>
        </div>
    </>

    );
}
export default ExploreComponent;