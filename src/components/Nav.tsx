import React from "react";
import NavButton from "./NavButton";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const NavView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  height: 827px;
  background-color: #303030;
`;

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
    <NavView>
      <NavButton active={currentPathBuf==="Profile" ? true : false} textH={"프로필"} textE={"PROFILE"} routeName={"Profile"}></NavButton>
      <NavButton active={currentPathBuf==="About" ? true : false} textH={"소개"} textE={"ABOUT ME"} routeName={"About/1"}></NavButton>
      <NavButton active={currentPathBuf==="Skills" ? true : false} textH={"기술"} textE={"SKILLS"} routeName={"Skills/1"}></NavButton>
      <NavButton active={currentPathBuf==="Projects" ? true : false} textH={"프로젝트"} textE={"PROJECTS"} routeName={"Projects/1"}></NavButton>
      <NavButton active={currentPathBuf==="Contact" ? true : false} textH={"연락처"} textE={"CONTACT"} routeName={"Contact"}></NavButton>
    </NavView>
  );
}

export default Nav;
