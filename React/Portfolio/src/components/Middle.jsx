import React from "react";
import SidePanel from "./SidePanel";
import Content from "./Content";

const Middle = (props) => {
  return (
    <>
      <div
        className="middle d-flex flex-column flex-xl-row pt-1 px-5 gap-4"
        style={{ maxWidth: "100em", margin: "auto" }}
      >
        <SidePanel />
        <Content images={props.imageler} />
      </div>
    </>
  );
};

export default Middle;
