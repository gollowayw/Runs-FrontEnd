import React from "react";
import GenRowItem from "./GenRowItem";
function GenRowItemImg(props) {
  return (
    <GenRowItem>
      <div class="flex align-items-center">
        <img
          class="rounded-full h-12 w-12 object-cover"
          src={props.src}
          alt="unsplash"
        />
      </div>
    </GenRowItem>
  );
}

export default GenRowItemImg;
