import React from "react";
import "../styles/NavButton.css";
import { useNavigate } from "react-router-dom";

function NavButton({ textH, textE, routeName }) {
  const Addr = "/" + routeName;
  const navigate = useNavigate();

  const goToAddr = () => {
    navigate(Addr);
  };

  return (
    <button onClick={goToAddr}>
      <p className="left">{textH}</p>
      <p className="right">{textE}</p>
    </button>
  );
}

export default NavButton;
