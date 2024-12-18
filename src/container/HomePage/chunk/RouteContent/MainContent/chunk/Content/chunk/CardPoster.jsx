import React from "react";
import defaultAvatar from "@/assets/icons/human.png";
import "./CardPoster.css";
import ico_heart from "@/assets/icons/heart.png";
import ico_comment from "@/assets/icons/comment.png";
import ico_repost from "@/assets/icons/repost.png";
import ico_send from "@/assets/icons/send.png";
const CardPoster = () => {
  return (
    <div className="cardPoster">
      <div className="posterHead">
        <img src={defaultAvatar} alt="" />
      </div>
      <div className="posterMid">
        <div className="poserUserName">
          username <span>time</span>
        </div>
        <div className="posterContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illo
          soluta, veritatis expedita possimus reprehenderit optio quaerat
          corporis libero, quos fuga corrupti iure voluptatum porro labore. Nam
          explicabo eligendi mollitia?
        </div>
        <div className="posterAction">
          <span>
            <img src={ico_heart} alt="" />1
          </span>
          <span>
            <img src={ico_comment} alt="" />2
          </span>
          <span>
            <img src={ico_repost} alt="" />3
          </span>
          <span>
            <img src={ico_send} alt="" />
          </span>
        </div>
      </div>
      <div className="posterEnd">...</div>
    </div>
  );
};

export default CardPoster;
