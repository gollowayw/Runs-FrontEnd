import React from "react";

function SiteTitle(props) {
  return (
    <div className="bg-myMetal pt-5 pl-8 justify-start text-myWhite text-5xl">
      {props.children}
    </div>
  );
}

export default SiteTitle;
