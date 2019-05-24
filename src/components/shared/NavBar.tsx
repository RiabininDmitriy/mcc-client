import React from "react";
import Link from "./Link";

export default () => {
  return (
    <nav>
      <li>{Link("/", "Home")}</li>
      <li>{Link("/users", "Users")}</li>
      <li>{Link("/projects", "Projects")}</li>
    </nav>
  );
};
