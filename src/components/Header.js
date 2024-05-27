import "./Header.css";
import Logo from "../assets/Logo.png";

import React from "react";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" />
      <a href="/"> Home</a>
    </header>
  );
};

export default Header;
