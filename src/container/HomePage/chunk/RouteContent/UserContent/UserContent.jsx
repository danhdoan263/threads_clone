import React from "react";
import { useParams } from "react-router-dom";
import "./UserContent.css";
import "./chunk/ThreadHeaderSub.css";
import "./chunk/ThreadHeader.css";
import ContentCard from "@/components/ContentCard/ContentCard";
import ico_user from "@/assets/icons/human.png";
import ico_ins from "@/assets/icons/iconsModal/ins.png";
import ico_chart from "@/assets/icons/iconsModal/chart.png";
import { Button } from "@/components/ui/button";
function ThreadHeader({ username }) {
  return (
    <div className="userHeader">
      <div className="user">
        <div className="userInfo">
          <div className="userFullname">Dương Danh Đoàn</div>
          <div className="username">{username}</div>
        </div>
        <div className="userBio">
          Nothing is impossible <br /> SGese
        </div>
      </div>
      <div className="userImage">
        <img src={ico_user} alt="" />
      </div>
    </div>
  );
}

function ThreadHeaderSub(data) {
  return (
    <div className="userHeaderSub">
      <div className="userFollower">
        <div className="followerIco">
          <img src={ico_user} alt="" />
        </div>
        <div className="followerIco">
          <img src={ico_user} alt="" />
        </div>
        <div className="followerIco">
          <img src={ico_user} alt="" />
        </div>
        <span>3 follower</span>
      </div>
      <div className="userLink">
        <span>
          <img src={ico_chart} alt="" />
        </span>
        <span>
          <img src={ico_ins} alt="" />
        </span>
      </div>
    </div>
  );
}
function ThreadConfigProfile(data) {
  return <Button className="configProfileBtn">Edit Profile</Button>;
}

const UserContent = () => {
  const { id } = useParams();
  return (
    <ContentCard>
      <ThreadHeader username={id} />
      <ThreadHeaderSub />
      <ThreadConfigProfile />
    </ContentCard>
  );
};

export default UserContent;
