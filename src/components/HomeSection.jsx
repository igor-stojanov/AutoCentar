import React from "react";

function HomeSection() {
  return (
    <section id="Pocetna" className="home">
      <div className="main-home">
        <div className="home-inner-content">
          <div className="home-image">
            <img src="/images/polis.png" alt="Auto Centar Polis" />
          </div>
        </div>
        <div className="home-inner-content">
          <div className="home-text-content">
            <h1>Auto centar polis Plandište</h1>
            <p>
              Brz i pouzdan tehnički pregled vozila do 3.5 tone uz mogućnost
              registracije na rate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
