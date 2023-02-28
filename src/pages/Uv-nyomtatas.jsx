import React from "react";
import "./Uv-nyomtatas.scss";
import RolandLEF from "../assets/roland-LEF-12-4.jpg";
import LedLights from "../assets/led-lights.jpg";
import RolandLEF2 from "../assets/roland-lef2.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import EasyWay from "../assets/works/easy-way.png";
import Gs from "../assets/works/GS.jpg";
import Hlf from "../assets/works/hlf.jpg";
import Mp from "../assets/works/mp.jpg";

const UvNyomtatas = () => {
  const responsiveSettings = [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ];
  return (
    <div className="uv-nyomtatas">
      <div className="hero">
        <div className="content">
          <h2>UV nyomtatás</h2>
          <h3>Közvetlenül a termékre, vagy alapanyagra</h3>
        </div>
      </div>
      <div className="container">
        <section className="uv-print">
          <div className="left">
            <h2>Mire jó az UV nyomtatás?</h2>
            <p>
              Logózási technikák között eddig a színes nyomatok esetében a
              tamponnyomás vagy a szitanyomás volt a legelterjedtebb eljárás. A
              technológia fejlődésével viszont, a piacon a jelenleg legmodernebb
              logózási technológia az UV LED nyomtatás, melynek számos előnye
              közül az egyik, hogy hihetetlenül gyors ill környezetbarát. „Full
              color” eljárásnak köszönhetően, prémium minőségi fényképek,
              grafikák és szövegek nyomtatását szinte bármilyen anyagra.
            </p>
            <p>
              Az UV egyik hatalmas előnye, hogy lehetőséget biztosít prototípus
              jellegű gyártásra is, hiszen a nyomtatás elindításához a
              pozicionáláson kívül nincs szükségünk semmire, csak a grafikára.
              Nem elhanyagolható szempont az sem, hogy full colour eljárásról
              beszélünk, tehát fotó minőségben tudunk mintákat elhelyezni,
              szinte bármilyen tárgyon. Ha kis darabszámot szeretnél készíteni
              valamiből, vagy színes a logód, amit meg akarsz jeleníteni
              valamin, akkor a legjobb helyen jársz! Vedd fel velünk a
              kapcsolatot az oldal alján és mi elkészítjük az egyedi
              árajánlatodat.
            </p>
          </div>
          <div className="right">
            <img src={RolandLEF} alt="" />
          </div>
        </section>
        <section className="led">
          <div className="left">
            <img src={LedLights} alt="" />
          </div>
          <div className="right">
            <h2>De hogyan is működik pontosan?</h2>
            <p>
              Az eljárás hasonlít a klasszikus tintasugaras nyomtatáséhoz, a fej
              a tárgyra lövi a festéket, majd egy UV lámpa megvilágításának
              hatására megszilárdul (polimerizálódik). Ennek a módszernek egy
              hatalmas előnye, hogy a festék nem tartalmaz oldószert. A gépünk
              el van látva egy speciális BOFA szűrővel, ami a káros anyagok és
              szagok megszűréséért felelős. Az egyre szigorúbb környezetvédelmi
              szabályozások folyamatosan az UV irányába terelik a nyomtatási
              technológiákat.
            </p>
          </div>
        </section>

        <section className="white">
          <div className="label">
            <h3>A fehér festékben rejlő lehetőségek</h3>
            <p>
              A sötét színű termékeknél, fehér alányomást tudunk készíteni, az
              élénkebb színek érdekében. A teljes színnyomtatás mellett kiváló
              minőségű fényes és matt lakk kivitelezés, valamint hihetetlenül
              életszerű textúrák is készíthetőek, akár dombornyomás több réteg
              átlátszó festékkel.
            </p>
          </div>
        </section>
        <section className="roland">
          <div className="left">
            <h2>Tapasztaltaink</h2>
            <p>
              Kifejezetten nagy figyelmet fordítunk a nyomataink minőségére, nem
              véletlenül használunk felsőkategóriás nyomtatót. A Roland márka
              megkérdőjelezhetetlen a nyomtatási iparágban.
            </p>
            <p>
              5 éves tapasztalattal rendelkezünk a gyártás terén, így rengeteg
              különféle anyaggal dolgoztunk már.Partnereink között vannak
              dekorációs cégek, akiknek főként reklámajándékokat készítünk,
              illetve multinacionális cégek, akinek pedig alkatrészeket
              feliratozunk.
            </p>
          </div>
          <div className="right">
            <img src={RolandLEF2} alt="" />
          </div>
        </section>

        <section className="works">
          <div className="title">
            <h2>Korábbi munkáink</h2>
          </div>
          <div className="slider">
            <Slide
              slidesToScroll={2}
              slidesToShow={4}
              indicators={true}
              responsive={responsiveSettings}
            >
              <div className="slide">
                <img src={EasyWay} alt="" />
              </div>
              <div className="slide">
                <img src={Gs} alt="" />
              </div>
              <div className="slide">
                <img src={Hlf} alt="" />
              </div>
              <div className="slide">
                <img src={Mp} alt="" />
              </div>
            </Slide>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UvNyomtatas;
