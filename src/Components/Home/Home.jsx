import React, { useEffect } from "react";

import * as THREE from "three";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu">
        <h1>Welcome to My Game</h1>
        <ul>
          <li className="menu-item">Start Game</li>
          <li className="menu-item">Options</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Exit</li>
        </ul>
      </div>
      <div id="three-container" className="three-container" />
    </div>
  );
};

export default Menu;
