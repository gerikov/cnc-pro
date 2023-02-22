import React from "react";
import "./Szerviz.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SafanSpringPack from "../assets/safan-spring-pack.jpg";
import SafanBack from "../assets/safan-back.jpg";
import Slider from "@mui/material/Slider";

const Szerviz = () => {
  return (
    <div className="szerviz">
      <section className="szerviz__hero">
        <h3>Telefonos segítség</h3>
        <button>
          <a href="tel:+3630-644-1871">
            <div className="szerviz__hero-phone">
              <LocalPhoneIcon
                sx={{ fontSize: "30px", margin: "0 10px 0 0 " }}
              />
              +36 30 123 45 67
            </div>
          </a>
        </button>
      </section>
      <section className="szerviz__cnc">
        <div className="szerviz__cnc-text">
          <h4>CNC SZERSZÁMGÉPEK</h4>
          <h3>Mivel foglalkozunk?</h3>
          <p>
            Munkatársaink vezető multinacionális cégeknél szereztek 10-15 éves
            szerszámgépjavítási tapasztalatot.
          </p>
          <h5>Fő tevékenységeink:</h5>
          <ul>
            <li>
              Hagyományos-, NC- ill. CNC szerszámgépek telepítése, javítása
            </li>
            <li>Megelőző karbantartások tervezése, kivitelezése</li>
            <li>
              Teljes mechanikai- ill. elektromos gépfelújítás, főorsó
              csapágyazás, vezérlő csere.
            </li>
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
            <li>Marógépekre</li>
            <li>Horizontális- és vertikális esztergákra</li>
            <li>Stancológépekre</li>
            <li>Lemezdaraboló- ill. él/csőhajlító gépekre</li>
            <li>Mérgépekre</li>
            <li>Lézergépekre</li>
          </ul>
          <div className="divider"></div>
          <p>
            Az évek során kialakított nemzetközi kapcsolatrendszerünknek
            köszönhetően gyorsan hozzájutunk szinte bármilyen CNC
            gépalkatrészhez.
          </p>
        </div>
      </section>
      <section className="szerviz__brands">
        <div className="szerviz__brands-container">
          <h5>
            A tudásunk bővítése érdekében neves európai gyártókhoz járunk
            trénigekre, Lengyelországba és Hollandiába, ez biztosítja hogy
            folyamatosan naprakészek tudjuk maradni.
          </h5>
          <h5>
            Fiatalos csapatunk nyitott a folyamatos kihívásokra, amelyet a
            biztos szaktudással ötvözve szeretnénk minél több elégedett
            Partnerünknek bizonyítani.
          </h5>
        </div>
      </section>
      <section className="">
      
      </section>
    </div>
  );
};

export default Szerviz;
