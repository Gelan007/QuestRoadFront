import React, { useEffect, useState } from "react";
import s from "./About.module.css";
import pic1 from "./6yvceB8zbYg.jpg";
import pic2 from "./10-prichin-hodit-v-barbershop.jpg";
import pic3 from "./KSV0956.jpg";
import pic4 from "./21.jpg";
import pic5 from "./blog-vybor-barbera-i-barbershopa-2.jpg";
import pic6 from "./lavochkina.jpg";



const About = (props) => {
    return (
        <div className={s.main}>
            <div className={s.mainblock}>
                <h1 className={s.crafth1}>CRAFT CUTS -<p className={s.ph1}>
                    это больше, чем мужская парикмахерская и уж точно не салон красоты. Здесь работают мастера своего дела, знающие, как из мельчайших деталей собирается образ настоящей мужественности. Пользуясь лучшей мужской косметикой, которую мы закупаем в самых разных уголках света, мы чтем трехсотлетние традиции классической стрижки и ухода за бородой, ну и конечно же, королевского бритья.</p></h1>
            </div>
            <div className={s.row}>
                <div className={s.col3}>
                    <img src={pic1} className={s.pic1} alt='pic1'></img>
                </div>
                <div className={s.col3}><img src={pic2} className={s.pic1} alt='pic1'></img></div>
                <div className={s.col3}><img src={pic3} className={s.pic1} alt='pic1'></img></div>
            </div>
            <div className={s.row}>
                <div className={s.col3}>
                    <img src={pic4} className={s.pic1} alt='pic1'></img>
                </div>
                <div className={s.col3}><img src={pic5} className={s.pic1} alt='pic1'></img></div>
                <div className={s.col3}><img src={pic6} className={s.pic1} alt='pic1'></img></div>
            </div>

        </div>
    );
}

export default About;