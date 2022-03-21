import React from "react";
import {Link} from "react-router-dom";
const NavigationSidebar = (
    {
      active = 'explore'
    }) => {
  return(
      <>
        <div className="list-group">
          <Link to="/"
            className="list-group-item list-group-item-action disabled"><i className="fa-brands fg-color-white fa-twitter"/>
        </Link>
          <Link to="/tuiter/home"
            className="list-group-item list-group-item-action">
              <i className="fa-solid fa-house-chimney fg-color-lightgrey"/> Home
          </Link>
          <Link to="/tuiter/explore"
             className="list-group-item list-group-item-action active">
              <i className="fa-solid fa-hashtag fg-color-lightgrey"/> Explore
          </Link>
          <Link to="/"
             className="list-group-item list-group-item-action">
              <i className="fa-solid fa-bell fg-color-lightgrey"/> Notification
          </Link>
          <Link to="/"
            className="list-group-item list-group-item-action">
              <i className="fa-solid fa-envelope fg-color-lightgrey"/> Messages
          </Link>
          <Link to="/"
            className="list-group-item list-group-item-action">
              <i className="fa-solid fa-bookmark fg-color-lightgrey"/> Bookmark
          </Link>
          <Link to="/"
            className="list-group-item list-group-item-action">
              <i className="fa-solid fa-list fg-color-lightgrey"/> Lists
          </Link>
          <Link to="/"
            className="list-group-item list-group-item-action">
              <i className="fa-solid fa-user fg-color-lightgrey"/> Profile
          </Link>
          <Link to="/"
            className="list-group-item list-group-item-action">
              <i className="fas fa-circle"/> More
          </Link>
          </div>


        <div className="d-grid mt-2">
          <Link to="/"
              className="btn btn-primary btn-block rounded-pill">Tweet
          </Link>
        </div>
      </>
    );
}

export default NavigationSidebar;