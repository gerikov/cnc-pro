import React from "react";
import "./Uv-nyomtatas.scss";
import RolandLEF from "../assets/roland-LEF-12-4.jpg";
import LedLights from "../assets/led-lights.jpg";
import RolandLEF2 from "../assets/roland-lef2.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Diagon from "../assets/works/diagon.jpg";
import EasyWay from "../assets/works/easy-way.png";
import Ft from "../assets/works/ft.jpg";
import FtTeritek from "../assets/works/ft-teritek.jpg";
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
              Egy rendkívül sokoldalú technológiáról van szó, az eljárás
              lehetőséget nyújt sík felületek és tárgyak nyomtatására is. Az
              egyik legnagyobb előnye, hogy sokkal környezetbarátabb, mint az
              oldószeres nyomtatók, így a tekercses nyomtatásban is folyamatos a
              térnyerése a módszernek. De az igazán kiemelkedő eredményeket a
              tárgy nyomtatásban lehet elérni vele. A legtöbb nyomási eljárás
              csak magas költségekkel üzemeltethető, mert sablonok létrehozása
              szükséges, ilyen pl. a tamponnyomás is. Ennél a metódusoknál az
              első lépés a színenkénti klisé létrehozása, így kis darabszám,
              vagy színes logó esetében nagyon drága a használata.
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
              Az eljárás nagyon hasonlít a klasszikus tintasugaras
              nyomtatáséhoz, a fej ugyan úgy a tárgyra lövi a festéket, majd egy
              UV lámpa megvilágításának hatására megszilárdul(polimerizálódik).
              Az elv megegyezik azzal ahogy, a műkörmöket, vagy a fogpótálosokat
              készítik. Ennek a módszernek egy hatalmas előnye, hogy a festék
              nem tartalmaz oldószert, ami köztudottan nem a legegészségesebb az
              emberi szervezet számára. Arról nem is beszélve, hogy szinte
              szagtalan az egész folyamat, ami a solvent technológiáktól elég
              távol áll. Ráadásul a gépünk el van látva egy speciális BOFA
              szűrővel, ami a káros anyagok és szagok megszűréséért felelős. Az
              egyre szigorúbb környezetvédelmi szabályozások folyamatosan az UV
              irányába terelik a nyomtatási technológiákat.
            </p>
          </div>
        </section>

        <section className="white">
          <div className="label">
            <h3>A fehér festékben rejlő lehetőségek</h3>
            <p>
              Jelentős különbség továbbá az is, hogy rétegekben történik a
              nyomtatás. (Tehát el tudunk érni térbeli mintázatokat az által,
              hogy különböző helyekre különböző vastagságú festékréteget viszünk
              fel) Ezt fontos megértenünk, mert az átlagos eltérően, az UV
              nyomtatók 5 festékkazettával vannak ellátva, a normál CMYK mellett
              található egy fehér szín is, aminek a segítségével egy teljesen új
              dimenzió nyílik meg. A fehér felhasználásának szempontjából két
              lehetőségünk van, vagy a színes nyomat alá nyomtatjuk vagy pedig a
              tetejére. Az előbbi segítségével víztiszta anyagokra tudunk
              nyomtatni, vagy sötét anyagok esetében tudunk alányomást készíteni
              az élénkebb színek érdekében. Dönthetünk úgy, hogy egy vagy két
              réteget használunk, a dupla réteg esetében a fehér sokkal
              „keményebb” lesz, kevesebb fényt fog átereszteni áttetsző
              felületeken, sötét háttér esetében pedig nagyobb kontrasztot
              biztosít. Hátsó megvilágítás esetén érdemes csak egy réteget
              használni, így lágyabb hatást tudunk elérni. A másik esetben
              használhatjuk záró rétegként, mondjuk egy csempe, vagy üveglap
              hátuljára nyomtatjuk először a mintát, majd a fehéret, ez esetben
              nem fog átszűrődni a mögötte lévő tartalom. Extrém esetekben erre
              még egy szín réteggel mindkét oldalról tökéltesen látható nyomatot
              tudunk elérni.{" "}
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
              különféle anyaggal dolgoztunk már. Partnereink között vannak
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
                <img src={Ft} alt="" />
              </div>
              <div className="slide">
                <img src={FtTeritek} alt="" />
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
