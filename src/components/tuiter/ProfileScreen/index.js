import React from "react";
import ProfileScreen from "./ProfileScreen";
import {useSelector} from "react-redux";

const ProfileList = () => {
  const profiles = useSelector((state) => state.profiles);


  return(
      <>
        {JSON.stringify(profiles)}
      </>
  )
}

export default ProfileList;