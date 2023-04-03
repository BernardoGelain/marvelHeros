import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./headerDefault-styles.css";

export default function HeaderDefault() {
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const navigate = useNavigate();

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
    <nav className={`${isNavbarVisible ? "visible" : ""}`} id="header">
      <img
        src="/assets/logo.png"
        onClick={() => {
          navigate("/");
        }}
        className="logoMarvelHeader"
      />
      <div className="nav-items">
        <a
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </a>
        <a href="https://www.marvel.com/culture-lifestyle" target={"_blank"}>
          LifeStyle
        </a>
        <a href="https://github.com/BernardoGelain" target={"_blank"}>
          About Dev
        </a>
      </div>
    </nav>
  );
}
