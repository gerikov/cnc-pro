import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="main">
      <section className="container cnc">
        <div className="container__content">
          <h2>2006 óta a cégek szolgálatában</h2>
          <h3>CNC gépek javítása és telepítése</h3>
          <button>Szerviz</button>
        </div>
      </section>
      <section className="container uv">
        <div className="container__content">
          <h2>UV nyomtatás</h2>
          <h3>Prémium géppel a tökéletes minőségért</h3>
          <button>Nyomtatás</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
