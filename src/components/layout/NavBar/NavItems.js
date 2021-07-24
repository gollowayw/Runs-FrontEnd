import React from "react";
import NavItem from "./NavItem";
function NavItems() {
  return (
    <div className="text-myWhite text-3xl flex justify-end">
      <NavItem to="/">Home</NavItem>
      <NavItem to="/AllUsers">All Users</NavItem>
      <NavItem to="/CreateLogin">Create Login</NavItem>
    </div>
  );
}

export default NavItems;
