import React from "react";
// import tuits from "../data/tuits.json";
import {useSelector} from "react-redux";
import TuitListItem from "./TuitListItem";
import './tuit.css';

const TuitList = () => {
  const tuits = useSelector(state => state.tuits);
  return (
      <ul className="list-group">
        {
          tuits?.map((tuit) =>
              <TuitListItem key={tuit._id} tuit={tuit}/>)
        }
      </ul>
  );
}

export default TuitList;