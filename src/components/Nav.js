import React from "react";
import "../styles/Nav.css";
import NavButton from "./NavButton";
import { useLocation, useParams } from "react-router-dom";

function Nav() {
  
  const { num } = useParams();
  const numId = Number(num);
  const location = useLocation();
  const currentPath = location.pathname;
  const currentPathBuf = currentPath.substring(0, currentPath.lastIndexOf('/'));

  // console.log(numId);
  // console.log(currentPathBuf);
  
  return (
    <div className="NavView">
      <NavButton textH={"프로필"} textE={"PROFILE"} routeName={"Profile"}></NavButton>
      <NavButton textH={"소개"} textE={"ABOUT ME"} routeName={"About/1"}></NavButton>
      <NavButton textH={"기술"} textE={"SKILLS"} routeName={"Skills/1"}></NavButton>
      <NavButton textH={"프로젝트"} textE={"PROJECTS"} routeName={"Projects/1"}></NavButton>
      <NavButton textH={"연락처"} textE={"CONTACT"} routeName={"Contact"}></NavButton>
    </div>
  );
}

export default Nav;
