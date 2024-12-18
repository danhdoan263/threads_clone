import React, { useEffect } from "react";
import ico_user from "@/assets/icons/human.png";
import { Button } from "@/components/ui/button";
import "./SystemComponent.css";
const DefaultComponent = ({ DATA_ITEMS }) => {
  console.log("DATA_ITEMS", DATA_ITEMS);

  const SystemComponent = (data) => {
    return (
      <div className="Notify">
        <div className="contentHeader">
          <img src={ico_user} alt="" />
        </div>
        <div className="contentMiddle">
          <div className="middleUsername">
            {data.user} <span>time</span>
          </div>
          <div className="middleContent">{data.content}</div>
        </div>
      </div>
    );
  };
  const ReplyComponent = (data) => {
    return (
      <div className="Notify">
        <div className="contentHeader">
          <img src={ico_user} alt="" />
        </div>
        <div className="contentMiddle">
          <div className="middleUsername">
            {data.user} <span>time</span>
          </div>
          <div className="middleContent">{data.content}</div>
          <div className="middleContentReply">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
            praesentium!
          </div>
        </div>
        <div className="contentFooter"></div>
      </div>
    );
  };
  const LikeComponent = (data) => {
    return (
      <div className="Notify">
        <div className="contentHeader">
          <img src={ico_user} alt="" />
        </div>
        <div className="contentMiddle">
          <div className="middleUsername">
            {data.user} <span>time</span>
          </div>
          <div className="middleContent">{data.content}</div>
        </div>
        <div className="contentFooter"></div>
      </div>
    );
  };
  const FollowComponent = (data) => {
    return (
      <div className="Notify">
        <div className="contentHeader">
          <img src={ico_user} alt="" />
        </div>
        <div className="contentMiddle">
          <div className="middleUsername">
            {data.user} <span>time</span>
          </div>
          <div className="middleContent">{data.content}</div>
        </div>
        <div className="contentFooter">
          <Button>FollowBack</Button>
        </div>
      </div>
    );
  };

  return (
    <>
      {DATA_ITEMS.map((state) => {
        switch (state.type) {
          case "system":
            return SystemComponent(state);
          case "like":
            return LikeComponent(state);
          case "reply":
            return ReplyComponent(state);
          case "follow":
            return FollowComponent(state);
          default:
            return <></>;
        }
      })}
    </>
  );
};

export default DefaultComponent;
