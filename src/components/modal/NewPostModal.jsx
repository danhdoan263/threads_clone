import userImgDefault from "@/assets/icons/human.png";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./NewPostModal.css";
//ico
import ico_chart from "@/assets/icons/iconsModal/chart.png";
import ico_gif from "@/assets/icons/iconsModal/gif.png";
import ico_hastag from "@/assets/icons/iconsModal/hastag.png";
import ico_image from "@/assets/icons/iconsModal/image.png";
import ico_ins from "@/assets/icons/iconsModal/ins.png";
import ico_pin from "@/assets/icons/iconsModal/pin.png";
import { showModal } from "@/components/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const NewPostModal = ({ close }) => {
  const [cornelHeight, setCornelHeight] = useState("53");
  const [preventSubmit, setPreventSubmit] = useState(false);
  const dispatch = useDispatch();
  /// action page
  const getHeightTextarea = (e) => {
    let height = e.target.style.height.split("px")[0];
    setCornelHeight((parseInt(height) + 29).toString());
  };
  const coutChar = (e) => {
    let count = e.target.value;
    setTimeout(() => {
      if (count.length > 0) {
        setPreventSubmit(true);
      } else {
        setPreventSubmit(false);
      }
    }, 500);
  };
  const handleCloseModal = () => {
    dispatch(showModal());
  };
  //processing page

  return (
    <div
      className={`NewPostModal ${close ? "open" : ""}${
        !close ? "closeModal" : ""
      }`}
    >
      <div className="postModalHeader">
        <Button onClick={handleCloseModal}>Back</Button>
        <h1>New Threads</h1>
      </div>
      <div className="postModalContent">
        <div className="postModalContentHeader">
          <div className="modalContentHeader">
            <div className="modalHeaderAvatar">
              <img src={userImgDefault} alt="" />
            </div>
          </div>
          <div className="cornel" style={{ height: cornelHeight + "px" }}></div>
          <div className="modalContentFooter">
            <div className="modalFooterAvatar">
              <img src={userImgDefault} alt="" />
            </div>
          </div>
        </div>
        <div className="postModalContentMiddle">
          <div className="modalMiddleUsername">fakeCosy</div>
          <TextareaAutosize
            type="text"
            placeholder="Whatup Babe?"
            onChange={getHeightTextarea}
            onKeyUp={coutChar}
          />
          <div className="ico_modalMiddle">
            <span>
              <img src={ico_image} alt="" />
            </span>
            <span>
              <img src={ico_ins} alt="" />
            </span>
            <span>
              <img src={ico_gif} alt="" />
            </span>
            <span>
              <img src={ico_hastag} alt="" />
            </span>
            <span>
              <img src={ico_chart} alt="" />
            </span>
            <span>
              <img src={ico_pin} alt="" />
            </span>
          </div>
          <p>Add to thread</p>
        </div>
      </div>
      <div className=" postModalFooter ">
        <div className="option">Anyone can reply and quote</div>
        <div className="postModalSubmit ">
          <Button className={preventSubmit ? "" : "preventUser"}>Post</Button>
        </div>
      </div>
    </div>
  );
};

export default NewPostModal;
