import ContentCard from "@/components/ContentCard/ContentCard";
import React from "react";
import DefaultComponent from "@/container/HomePage/chunk/RouteContent/ActivityContent/chunk/SystemComponent";
const ActivityContent = () => {
  const DATA_ITEMS = [
    { type: "system", user: "threads", content: "data for system" },
    { type: "reply", user: "danhthang", content: "data for reply" },
    { type: "like", user: "danhthang", content: "data for like" },
    { type: "follow", user: "danhthang", content: "has followed you" },
  ];
  return (
    <ContentCard>
      <div className="notifyContent">
        <DefaultComponent DATA_ITEMS={DATA_ITEMS} />
      </div>
    </ContentCard>
  );
};

export default ActivityContent;
