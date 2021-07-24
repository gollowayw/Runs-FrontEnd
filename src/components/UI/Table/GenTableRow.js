import React from "react";

function GenTableRow(props) {
  const tableSizeClass = "grid-cols-" + props.children.length + " ";
  return (
    <div
      className={
        "grid bg-myTableRow rounded-lg col-span-full " + tableSizeClass
      }
    >
      {props.children}
    </div>
  );
}

export default GenTableRow;
