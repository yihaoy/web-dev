//import tuits from "../data/tuits.json";
import {FIND_ALL_TUITS, DELETE_TUIT, CREATE_TUIT, UPDATE_TUIT} from "../../../actions/tuits-actions";


const tuitsReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALL_TUITS:
      return action.tuits;
    case DELETE_TUIT:
      return state.filter(
          tuit => tuit._id !== action.tuit._id);
    case CREATE_TUIT:
      return [
        ...state,
        action.newTuit
      ];
    case UPDATE_TUIT:
      return state.map(
          tuit => tuit._id === action.tuit._id ?
              action.tuit : tuit);
    default:
      return state;
  }
}

/*const tuitsReducer = (state = tuits, action) => {
  switch (action.type) {
    case 'like-tuit':
      return state.map(tuits =>{
        if (tuits._id === action.tuits._id) {
          if (tuits.liked === true) {
            tuits.liked = false;
            tuits.likes--;
          }  else {
            tuits.liked = true;
            tuits.likes++;
          }
          return tuits;
        } else {
          return tuits;
        }
      });
    case 'delete-tuit':
      return state.filter(
          tuit => tuit._id !== action.tuits._id);

    case 'create-tuit':
      const newTuit = {
        tuit: action.tuit,
        _id: (new Date()).getTime() + '',
        username: "DataCat",
        handle: "@DACA",
        attachments: {
          image: "../tuiter/images/eevee.png"
        },
        logoImage: "../tuiter/images/eevee.png",
        avatarIcon: "../tuiter/images/eevee.png",
        comments: 44,
        retuits: 111,
        likes: 222,
        replies: 333,
      }
      return [ newTuit,
        ...state,];
    default:
      return tuits;
  }
};
*/
export default tuitsReducer;