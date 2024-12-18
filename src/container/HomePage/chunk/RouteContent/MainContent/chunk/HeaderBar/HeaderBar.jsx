import React, { useState } from "react";
import "./HeaderBar.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ico_down from "@/assets/icons/down.png";

const HeaderBar = () => {
  const [suggesion, setSuggestion] = useState("For You");
  //page action
  const handleChangeSuggestion = (type) => {
    setSuggestion(type);
  };

  return (
    <div className="HeaderBar">
      <p>{suggesion}</p>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img src={ico_down} alt="" className="ico_down" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="DropdownMenuContent">
          <DropdownMenuItem
            className="DropdownMenuItem"
            onClick={() => {
              handleChangeSuggestion("For You");
            }}
          >
            For You
          </DropdownMenuItem>
          <DropdownMenuItem
            className="DropdownMenuItem"
            onClick={() => {
              handleChangeSuggestion("Following");
            }}
          >
            Following
          </DropdownMenuItem>
          <DropdownMenuItem
            className="DropdownMenuItem"
            onClick={() => {
              handleChangeSuggestion("Liked");
            }}
          >
            Liked
          </DropdownMenuItem>
          <DropdownMenuItem
            className="DropdownMenuItem"
            onClick={() => {
              handleChangeSuggestion("Saved");
            }}
          >
            Saved
          </DropdownMenuItem>
          <DropdownMenuItem
            className="DropdownMenuItem "
            onClick={() => {
              handleChangeSuggestion("Make new feed");
            }}
          >
            Make new feed
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HeaderBar;
