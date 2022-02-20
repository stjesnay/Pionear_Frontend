import React from "react";
import MapImg from "../../assets/images/Map.png";
import ImgStation from "../../assets/images/Stations/1_Olympia/image_1.png";
import styles from "./Blurb.module.css";
import { GetStation, SetAnswer } from "../../ConnectionToDatabase.js";
import ImgWalk from "../../assets/images/Icons/walking.png";
import locationImg from "../../assets/images/Icons/location-active.png";
import timePlaceholder from "../../assets/images/Icons/time.png";
// import exitIcon from "../../assets/images/Icons/exit.png";

function Blurb() {
  let stationID = 4;
  let categoryID = 1;
  let station = GetStation(stationID);
  let answer = {
    userID: 20,
    text: ["Eins", "Zwei", "Drei"],
    stationID: 5,
    categoryID,
  };

  return (
    <div className={styles.Blurb}>
      <img className={styles.Map} src={MapImg} alt="" />

      <div className={styles.card}>
        <button className={styles.exitButton}>X</button>
        <h1>{!station ? "Loading..." : station.topic}</h1>
        {/* //? ist noch nicht dynamisch */}

        <img
          src={timePlaceholder}
          className={styles.timePlaceholder}
          alt="..."
        />

        <p className={styles.spot}>{!station ? "Loading..." : station.spot}</p>

        <img src={ImgStation} className={styles.stationImage} alt="..." />
        <div className="WalkingTime-Container">
          <img src={ImgWalk} className={styles.WalkingImg} alt="" />
          <p className={styles.WalkingText}>0 min</p>
        </div>

        <div>
          <p className={styles.historicalText}>
            {!station ? "Loading..." : station.description}
          </p>
        </div>

        <button
          onClick={() => {
            SetAnswer(answer);
          }}
          className={styles.button}
        >
          Station beginnen
        </button>

        <div className={styles.alignIconAndAdress}>
          <img src={locationImg} className={styles.locationImg} alt="..." />
          <p className={styles.adress}>
            {/* {!station ? "Loading..." : station.adress} */}
            in deiner näheren Umgebung
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blurb;
