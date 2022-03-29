import React from "react";
import {useDispatch} from "react-redux";
import TuitStat from "./TuitStat"

const TuitListItem = ({tuits}) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuits) => {
    dispatch({type: 'delete-tuit', tuits})
  }
  return(
      <>
        <li className="list-group-item">
          <div className="row">

            <div className="col-2">
              <img className={"img-fluid wd-avatar-tuit "} src={tuits['avatar-image']}  />
            </div>

            <div className="col-10">
              <div>
                <p className="m-0 fs-6">{tuits.username} <i className="fa-solid fa-circle-check"></i> <span className="fg-color-darkgray">{tuits.handle}<i onClick={() => deleteTuit(tuits)} className="fa-solid fa-xmark wd-ellipsis-right ms-6"></i></span></p>
                <p className="m-0 fs-6">{tuits.tuit}</p>
              </div>

              <div className="row mt-2 m-0 wd-post-img">
                {
                  tuits.attachments && tuits.attachments.video &&
                  <iframe width="100%" height="350px"
                          className="mt-2 wd-border-radius-20px"
                          style={{width: "100%"}}
                          src={`https://www.youtube.com/embed/${tuits.attachments.video}`}
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen></iframe>
                }
                {
                  tuits.attachments && tuits.attachments.image &&
                  <img src={tuits.attachments.image} alt="attachment" className="wd-post-img m-0 p-0"/>
                }
              </div>

              <TuitStat tuits={tuits}/>

            </div>
          </div>
        </li>

      </>
  )
}

export default TuitListItem;