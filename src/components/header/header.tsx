import { useEffect, useRef, useState } from "react";
import HeaderDefault from "../headerDefault/headerDefault";
import "./header-styles.css";
export default function Header() {
  return (
    <>
      <HeaderDefault />
      <span className="caption">Conheça nossos personagens </span>
      <div>
        <img src="assets/banner.jpg" className="banner" />
      </div>
    </>
  );
}
