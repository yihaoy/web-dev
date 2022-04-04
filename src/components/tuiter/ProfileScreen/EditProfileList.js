import React from "react";
import EditProfile from "./EditProfile";
import profile from "../data/profile.json"
import {useSelector} from "react-redux";

const EditProfileList = () => {
  const editprofile = useSelector((state) => state.profile);

  return(
      <>
        {
          editprofile.map(profile => {
            return(
                <EditProfile editprofile={profile} key={profile._id}/>
            );
          })
        }
      </>
  )
}

export default EditProfileList;
