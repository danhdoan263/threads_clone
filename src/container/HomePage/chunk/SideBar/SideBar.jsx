import React, { useRef, useState } from "react";
import "./SideBar.css";
import logo from "@/assets/threads_logo.png";
import ico_home from "@/assets/icons/home.png";
import ico_heart from "@/assets/icons/heart.png";
import ico_human from "@/assets/icons/human.png";
import ico_plus from "@/assets/icons/plus.png";
import ico_search from "@/assets/icons/search.png";
import ico_more from "@/assets/icons/more.svg";
import ico_pin from "@/assets/icons/pin.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "@/components/modal/modalSlice";
import NewPostModal from "@/components/modal/NewPostModal";
const SideBar = () => {
  const [close, setClose] = useState(true);
  const [activeButton, setActiveButton] = useState("1");
  const user = localStorage.getItem("username");
  const modal = useSelector((state) => state.showModal);
  const dispatch = useDispatch();
  const targetRef = useRef(null);

  const handleShowModal = () => {
    dispatch(showModal());
  };
  const handleNewPostModal = (event) => {
    if (targetRef.current == null) {
      dispatch(showModal());
    } else if (targetRef.current == event.target) {
      setClose(false);
      setTimeout(() => {
        dispatch(showModal());
        setClose(true);
      }, 300);
    }
  };
  const handleActiveButton = (e) => {
    const value = e.target.value;
    if (value) {
      setActiveButton(value);
    }
  };

  return (
    <div className="sideBar">
      <div className="sideBar-top">
        <img src={logo} alt="logo" />
      </div>
      <div className="sideBar-mid">
        <Link to="/">
          <Button
            variant="outline"
            className={`btn-sideBar ${activeButton == 1 ? "active" : ""}`}
            value="1"
            onClickCapture={handleActiveButton}
          >
            <img src={ico_home} alt="ico_home" />
          </Button>
        </Link>

        <Link to="/search">
          <Button
            variant="outline"
            className={`btn-sideBar ${activeButton == 2 ? "active" : ""}`}
            value="2"
            onClickCapture={handleActiveButton}
          >
            <img src={ico_search} alt="ico_search" />
          </Button>
        </Link>

        <Button
          variant="outline"
          className={`btn-sideBar ${modal ? "active" : ""}`}
          onClick={handleShowModal}
        >
          <img src={ico_plus} alt="ico_plus" />
        </Button>
        {modal ? (
          <div
            className="showModal"
            onClick={handleNewPostModal}
            ref={targetRef}
          >
            <NewPostModal close={close}></NewPostModal>
          </div>
        ) : (
          <></>
        )}

        <Link to="/activity">
          <Button
            variant="outline"
            className={`btn-sideBar ${activeButton == 3 ? "active" : ""}`}
            value="3"
            onClickCapture={handleActiveButton}
          >
            <img src={ico_heart} alt="ico_heart" />
          </Button>
        </Link>

        <Link to={`/${user}`}>
          <Button
            variant="outline"
            className={`btn-sideBar ${activeButton == 4 ? "active" : ""}`}
            value="4"
            onClickCapture={handleActiveButton}
          >
            <img src={ico_human} alt="ico_human" style={{ width: 20 }} />
          </Button>
        </Link>
      </div>
      <div className="sideBar-bottom">
        <img src={ico_more} alt="ico_more" />
        <img src={ico_pin} alt="ico_pin" />
      </div>
    </div>
  );
};

export default SideBar;
