import React from "react";
import "../styles/Nav.css";
import NavButton from "./NavButton";
import { useLocation } from "react-router-dom";

function Nav() {
  
  const location:any = useLocation();
  const currentPath:string = location.pathname;
  let currentPathBuf:string;

  if(currentPath.lastIndexOf('/') !== 0) {
    currentPathBuf = currentPath.substring(1, currentPath.indexOf('/',1));
  }
  else {
    currentPathBuf = currentPath.substring(1, currentPath.length);
  }
  
  return (
    <div className="NavView">
      <NavButton active={currentPathBuf==="Profile" ? true : false} textH={"프로필"} textE={"PROFILE"} routeName={"Profile"}></NavButton>
      <NavButton active={currentPathBuf==="About" ? true : false} textH={"소개"} textE={"ABOUT ME"} routeName={"About/1"}></NavButton>
      <NavButton active={currentPathBuf==="Skills" ? true : false} textH={"기술"} textE={"SKILLS"} routeName={"Skills/1"}></NavButton>
      <NavButton active={currentPathBuf==="Projects" ? true : false} textH={"프로젝트"} textE={"PROJECTS"} routeName={"Projects/1"}></NavButton>
      <NavButton active={currentPathBuf==="Contact" ? true : false} textH={"연락처"} textE={"CONTACT"} routeName={"Contact"}></NavButton>
    </div>
  );
}

export default Nav;
