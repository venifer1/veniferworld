import React from "react";
import "../styles/NavButton.css";

function NavButton({ textH, textE }) {
  return (
    <button>
      <p className="left">{textH}</p>
      <p className="right">{textE}</p>
    </button>
  );
}

export default NavButton;
