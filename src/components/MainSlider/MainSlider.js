import React, { useState } from "react";
import slide1 from "./images/slide-1.png";
import slide2 from "./images/slide-2.jpeg";
import slide3 from "./images/slide-3.jpeg";
import slide4 from "./images/slide-4.jpg";
import slide5 from "./images/slide-5.jpeg";
import Quest from "./images/Quest.jpg";
import "./slider.css";
import {useTranslation} from "react-i18next";
import "../../utils/i18next";

import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import ItemsCarousel from "react-items-carousel";
import { auto } from "@popperjs/core";
import Button from "react-bootstrap/Button";
import { Carousel } from "react-bootstrap";

function MainSlider() {
  const {t} = useTranslation();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

 

  function clickHandler(){
    fetch("http://localhost:64169", {
      method : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
     
       action:1
     
      })
    }).then((response) => response.json())
    .then((responseJson) => {

// Showing response message coming from the server after inserting records.
      alert.alert(responseJson);

    }).catch((error) => {
      console.error(error);
    });


}

  return (
    <div>
      <div style={{marginTop:"2%", marginBottom:"2%"}}>
          <h2 className="text-center" > QuestRoad</h2>
      </div>
        <div>
            <h3 className="text-center"> {t("mainSlider.header")}</h3>
        </div>
      <div style={{display:"flex" , justifyContent:"center", alignItems:"center", marginTop:"10%"}}>

        <img src={Quest}  />
      </div>
    </div>
  );
}

export default MainSlider;

