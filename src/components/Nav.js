import React from "react";
import "../styles/Nav.css";
import NavButton from "./NavButton";

function Nav() {
  return (
    <div className="NavView">
      <NavButton textH={"프로필"} textE={"PROFILE"}></NavButton>
      <NavButton textH={"소개"} textE={"ABOUT ME"}></NavButton>
      <NavButton textH={"기술"} textE={"SKILLS"}></NavButton>
      <NavButton textH={"프로젝트"} textE={"PROJECTS"}></NavButton>
      <NavButton textH={"연락처"} textE={"CONTACT"}></NavButton>
    </div>
  );
}

export default Nav;
