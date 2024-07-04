import React from "react";
import "../styles/Nav.css";
import NavButton from "./NavButton";

function Nav() {
  return (
    <div className="NavView">
      <NavButton
        textH={"프로필"}
        textE={"PROFILE"}
        routeName={"Profile"}
      ></NavButton>
      <NavButton
        textH={"소개"}
        textE={"ABOUT ME"}
        routeName={"About"}
      ></NavButton>
      <NavButton
        textH={"기술"}
        textE={"SKILLS"}
        routeName={"Skills"}
      ></NavButton>
      <NavButton
        textH={"프로젝트"}
        textE={"PROJECTS"}
        routeName={"Projects"}
      ></NavButton>
      <NavButton
        textH={"연락처"}
        textE={"CONTACT"}
        routeName={"Contact"}
      ></NavButton>
    </div>
  );
}

export default Nav;
