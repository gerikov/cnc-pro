import React from "react";
import "./Szerviz.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SafanSpringPack from "../assets/safan-spring-pack.jpg";
import SafanBack from "../assets/safan-back.jpg";

const Szerviz = () => {
  return (
    <div className="szerviz">
      <section className="szerviz__hero">
        <h2>Telefonos segítség</h2>
        <button>
          <a href="tel:+36 30 911 1261">
            <div className="szerviz__hero-phone">
              <LocalPhoneIcon
                sx={{ fontSize: "30px", margin: "0 10px 0 0 " }}
              />
              +36 30 911 1261
            </div>
          </a>
        </button>
      </section>
      <section className="szerviz__cnc">
        <div className="szerviz__cnc-text">
          <h4>CNC SZERSZÁMGÉPEK</h4>
          <h3>Mivel foglalkozunk?</h3>
          <p>
            Fő profilunk lemezipari gépek telepítése, javítása, karbantartása.
            Munkatársaink vezető multinacionális cégeknél szereztek 10-15 éves
            szerszámgépjavítási tapasztalatot.
          </p>
          <h5>Fő tevékenységeink:</h5>
          <ul>
            <li>CNC szerszámgépek telepítése, javítása</li>
            <li>Megelőző karbantartások tervezése, kivitelezése</li>
            <li>Teljes mechanikai- ill. elektromos gépfelújítás.</li>
          </ul>
        </div>
        <div className="szerviz__cnc-img">
          <img src={SafanSpringPack} alt="" />
        </div>
      </section>
      <section className="szerviz__machines">
        <div className="szerviz__machines-img">
          <img src={SafanBack} alt="" />
        </div>
        <div className="szerviz__machines-text">
          <h4>GÉPISMERET</h4>
          <h3>Tapasztalattal rendelkezünk</h3>
          <ul>
            <li>Élhajlító</li>
            <li>Csőhajlító</li>
            <li>Stancológépekre</li>
            <li>Lemezdaraboló</li>
            <li>Minőségellenőrző és</li>
            <li>Lézergépekre</li>
          </ul>
          <div className="divider"></div>
          <p>
            Az évek során kialakított nemzetközi kapcsolatrendszerünknek
            köszönhetően gyorsan hozzájutunk az általunk szervizelt gépek
            alkatrészeihez.
          </p>
        </div>
      </section>
      <section className="szerviz__brands">
        <div className="szerviz__brands-container">
          <h5>
            A tudásunk bővítése érdekében neves európai gyártókhoz járunk
            trénigekre.
          </h5>
          <h5>
            Fiatalos csapatunk nyitott a folyamatos kihívásokra, amelyet a
            biztos szaktudással ötvözve szeretnénk minél több elégedett
            Partnerünknek bizonyítani.
          </h5>
        </div>
      </section>
      <section className=""></section>
    </div>
  );
};

export default Szerviz;
