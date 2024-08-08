import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainContainer from "../MainContainer/MainContainer";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
