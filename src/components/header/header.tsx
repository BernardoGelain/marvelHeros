import { useEffect, useRef, useState } from "react";
import "./header-styles.css";
export default function Header() {
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var { pageYOffset } = window;
        if (pageYOffset > lastScrollTop.current) {
          // downward scroll
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          // upward scroll
          setIsNavbarVisible(true);
        } // else was horizontal scroll
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);
  return (
    <>
      <nav className={`${isNavbarVisible ? "visible" : ""}`} id="header">
        <img src="assets/logo.png" />
        <div className="nav-items">
          <a href="#">Comics</a>
          <a href="https://www.marvel.com/culture-lifestyle" target={"_blank"}>
            LifeStyle
          </a>
          <a href="https://github.com/BernardoGelain" target={"_blank"}>
            About Dev
          </a>
        </div>
      </nav>
      <span className="caption">Conheça nossos personagens </span>
      <div>
        <img src="assets/banner.jpg" className="banner" />
      </div>
    </>
  );
}
