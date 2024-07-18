import React from "react";
import "../styles/NavButton.css";
import { useNavigate } from "react-router-dom";

interface INavButtonProps {
  active: any;
  textH: string;
  textE: string;
  routeName: string;
}

function NavButton({ active, textH, textE, routeName }:INavButtonProps) {

  const Addr:string = "/" + routeName;
  const navigate:any = useNavigate();

  const goToAddr = () => {
    navigate(Addr);
  };

  return (
    <button id={active ? "active" : ""} onClick={goToAddr}>
      <p className="left">{textH}</p>
      <p className="right">{textE}</p>
    </button>
  );
}

export default NavButton;
