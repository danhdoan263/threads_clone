import React from "react";
import "./SuggesstionItem.css";
import ico_avatar from "@/assets/icons/human.png";
import { Button } from "@/components/ui/button";
const SuggesstionItem = () => {
  return (
    <div className="SuggesstionItem">
      <div className="itemHeader">
        <img src={ico_avatar} alt="" />
      </div>
      <div className="itemContent">
        <div className="contentUsername">fakecosy</div>
        <div className="contentFullname">Dương Danh Đoàn</div>
        <div className="contentFollower">16.6K Follow</div>
      </div>
      <div className="itemButton">
        <Button>Follow</Button>
      </div>
    </div>
  );
};

export default SuggesstionItem;
