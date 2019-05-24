import React from "react";
import { NavLink } from "react-router-dom";

export default (query: string, name: string) => (
  <NavLink
    exact
    to={query}
    activeStyle={{
      cursor: "default",
      color: "grey"
    }}
  >
    {name}
  </NavLink>
);
