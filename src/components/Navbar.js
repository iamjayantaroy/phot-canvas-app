import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <a href="#">Text Canvas</a>
      </div>
      <ul>
        <li>undo</li>
        <li>redo</li>
      </ul>
      <button>
        Download{" "}
        <span>
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </button>
    </div>
  );
};

export default Navbar;
