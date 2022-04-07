import React, {useEffect} from "react";
/*import tuits from "../data/tuits.json";*/
import TuitListItem from "./TuitListItem";
import {useSelector, useDispatch} from "react-redux";
import {findAllTuits} from "../../../actions/tuits-actions";

const TuitList = () => {
  const tuits = useSelector((state) => state.tuits);

  const dispatch = useDispatch();
  useEffect(() => findAllTuits(dispatch), [dispatch]);

  return(
      <>
        {
          tuits.map && tuits.map(tuit => {
            return(
                <TuitListItem tuits={tuit} key={tuit._id}/>
            );
          })
        }
      </>
  )
}

export default TuitList;