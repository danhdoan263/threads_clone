import React from "react";
import "./HomePage.css";
import SideBar from "@/container/HomePage/chunk/SideBar/SideBar";
import MainContent from "@/container/HomePage/chunk/RouteContent/MainContent/MainContent";
const HomePage = () => {
  localStorage.setItem("username", "fakeCosy");
  return (
    <div className="HomePage">
      <SideBar />
      <MainContent />
    </div>
  );
};

export default HomePage;
