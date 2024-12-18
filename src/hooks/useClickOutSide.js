import React, { useEffect } from "react";
const useClickOutSide = (ref, callback) => {
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("click", handleClickOutSide, true);
    return () => {
      document.removeEventListener("click", handleClickOutSide, false);
    };
  }, [ref, callback]);
};

export default useClickOutSide;
