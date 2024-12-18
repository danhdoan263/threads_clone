import defaultAvatar from "@/assets/icons/human.png";
import ContentCard from "@/components/ContentCard/ContentCard";
import { showModal } from "@/components/modal/modalSlice";
import NewPostModal from "@/components/modal/NewPostModal";
import { Button } from "@/components/ui/button";
import CardPoster from "@/container/HomePage/chunk/RouteContent/MainContent/chunk/Content/chunk/CardPoster";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import "./Content.css";
const Content = () => {
  const modal = useSelector((state) => state.showModal);
  const dispatch = useDispatch();
  const targetRef = useRef(null);
  //action page
  const handleNewPostModal = (event) => {
    if (targetRef.current == null) {
      dispatch(showModal());
    } else if (targetRef.current == event.target) {
      dispatch(showModal());
    }
  };

  return (
    <ContentCard>
      <div className="cardHeader">
        <div className="headerImage">
          <img src={defaultAvatar} alt="" className="cardHeaderAvatar" />
        </div>
        <div className="headerContent">
          <TextareaAutosize
            type="text"
            placeholder="Whatup Babe?"
            onClick={handleNewPostModal}
          />
        </div>
        <div>
          <Button onClick={handleNewPostModal}>post</Button>
        </div>
      </div>
      <CardPoster />
      <CardPoster />
    </ContentCard>
  );
};

export default Content;
