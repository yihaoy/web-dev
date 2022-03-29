import profiles from "../data/profile.json"

const profileReducer = (state = profiles, action) => {
  switch (action.type) {
    case 'save-profile':
      // console.log(1)
      // console.log(state)
      // console.log(action)
      state.profileData.firstName = action.prof.profileInfo.fname
      state.profileData.lastName = action.prof.profileInfo.lname
      state.profileData.bio = action.prof.profileInfo.bio
      state.profileData.location = action.prof.profileInfo.location
      state.profileData.website = action.prof.profileInfo.website
      state.profileData.dateOfBirth = action.prof.profileInfo.date
      // console.log(2)
      // console.log(state)
      return state;
    default:
      // console.log(state)
      return state;
  }

};

export default profileReducer;