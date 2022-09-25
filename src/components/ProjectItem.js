import React from "react";
import "./ProjectItem.css";
export default function ProjectItem(props) {
  return (
    <div className="p__item">
      <div className="img_com">
        <img
          src={props.item.photo}
          alt="PROJECT PREVIEW IMAGE"
          className="p__img"
        />
      </div>
      <div className="des_com">
        <h2 className="p__title">{props.item.title}</h2>

        <p className="p__info">{props.item.des}</p>
        <div className="p_btn">
          <a href={props.item.liveLink} target="_blank">
            View Live
          </a>
          <a href={props.item.githubLink} target="_blank">
            Gitub
          </a>
        </div>
      </div>
    </div>
  );
}
