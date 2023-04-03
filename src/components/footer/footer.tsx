import "./footer-styles.css";

export default function Footer() {
  return (
    <div className="containerFooter">
      <div className="textElements">
        <span className="text">Siga a Marvel</span>
        <div className="icons">
          <img src="assets/facebook.svg" />
          <img src="assets/instagram.svg" />
          <img src="assets/youtube.svg" />
          <img src="assets/spotify.svg" />
        </div>
      </div>
      <div className="cardMarketing">
        <span>Marvel Mastercard</span>
        <img src="assets/cards-fan-desktop.png" className="cardsFan" />

        <span>Entenda como funciona</span>
      </div>
    </div>
  );
}
