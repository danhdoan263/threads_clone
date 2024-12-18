import React from "react";
import "@/container/HomePage/chunk/RouteContent/MainContent/chunk/HeaderBar/HeaderBar.css";
import "./SearchContent.css";
import ContentCard from "@/components/ContentCard/ContentCard";
import ico_search from "@/assets/icons/search.png";
import ico_down from "@/assets/icons/down.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ContentSuggestion from "@/container/HomePage/chunk/RouteContent/SearchContent/chunk/ContentSuggestion/ContentSuggestion";
const SearchContent = () => {
  return (
    <ContentCard>
      <div className="SearchContent">
        <div className="ContentHeader">
          <div className="ico_search">
            <img src={ico_search} alt="" />
          </div>
          <div className="inputHeader">
            <input type="text" />
          </div>
          <div className="dropdownOption">
            <DropdownMenu>
              <DropdownMenuTrigger className="DropdownMenuTrigger">
                <img src={ico_down} alt="" className="ico_down" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="DropdownMenuContent">
                <DropdownMenuItem className="DropdownMenuItem">
                  Any time
                </DropdownMenuItem>
                <DropdownMenuItem className="DropdownMenuItem">
                  Today
                </DropdownMenuItem>
                <DropdownMenuItem className="DropdownMenuItem">
                  Last week
                </DropdownMenuItem>
                <DropdownMenuItem className="DropdownMenuItem">
                  Last month
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <ContentSuggestion />
      </div>
    </ContentCard>
  );
};

export default SearchContent;
