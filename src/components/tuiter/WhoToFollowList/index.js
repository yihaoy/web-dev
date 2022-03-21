import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";

const WhoToFollowList = () => {
  return(
      <>
        <ul className="list-group">
          <li className="list-group-item bolded">Who to follow</li>
          {
            who.map(who => {
              return(
                  <WhoToFollowListItem who={who} key={who.UID}/>
              );
            })
          }
        </ul>
      </>
  )};
export default WhoToFollowList;