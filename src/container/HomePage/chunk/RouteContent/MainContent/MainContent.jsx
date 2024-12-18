import React from "react";
import "./MainContent.css";
import HeaderBar from "@/container/HomePage/chunk/RouteContent/MainContent/chunk/HeaderBar/HeaderBar";
import Content from "./chunk/Content/Content";
import { Route, Routes } from "react-router-dom";
import SearchContent from "@/container/HomePage/chunk/RouteContent/SearchContent/SearchContent";
import ActivityContent from "@/container/HomePage/chunk/RouteContent/ActivityContent/ActivityContent";
import UserContent from "@/container/HomePage/chunk/RouteContent/UserContent/UserContent";
const MainContent = () => {
  return (
    <div className="MainContent">
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/search" element={<SearchContent />} />
        //show modal
        <Route path="/activity" element={<ActivityContent />} />
        <Route path="/:id" element={<UserContent />} />
      </Routes>
    </div>
  );
};

export default MainContent;
