import React from "react";

function GenTableHeader(props) {
  const tableSizeClass = "grid-cols-" + props.children.length + " ";

  return (
    <div
      className={
        "grid  border-myTableHeader rounded-lg bg-myMetal col-span-full text-2xl " +
        tableSizeClass +
        " " +
        (props.className == null ? "" : props.className)
      }
    >
      {props.children}
    </div>
  );
}

export default GenTableHeader;
