import "./loader-styles.css";

export default function Loader() {
  return (
    <>
      <div className="loader-container">
        <img src="assets/logo.png" width={200} className="logoMarvelLoader" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </>
  );
}
