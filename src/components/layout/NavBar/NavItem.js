import React from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
  return (
    <div className="pr-6">
      <Link to={props.to}>{props.children}</Link>
    </div>
  );
}

export default NavItem;
