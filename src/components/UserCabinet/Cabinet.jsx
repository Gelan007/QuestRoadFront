import React, {useEffect, useState} from "react";
import s from "./Cabinet.module.css";
import {NavLink, useHistory} from "react-router-dom";
import Header from "../Header_Footer/Header";
import usericon from "../UserCabinet/user_icon.png";
import starpic from "../UserCabinet/heart.png";
import axios from "axios";
import {useTranslation} from "react-i18next";
import "../../utils/i18next";


const Cabinet = ({setIsLoggedIn, isLoggedIn}) => {

    const {t} = useTranslation();
    const [user, setUser]=useState([]);
    const [bookings,setBookings]=useState([]);
    const history = useHistory();
    let space = " ";
    function logout(){
        setIsLoggedIn(false);
        // if(isLoggedIn == false){
        //     history.push("/login")
        // }
    }

    const handleLogOut = () => {
        setIsLoggedIn(false);
        localStorage.clear();
    };

    useEffect(() => {

      axios
          .get("https://localhost:44332/api/Profile/UserInfo",{
              headers:{
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "Authorization": "Bearer "+ localStorage.getItem("tok"),
              }
          })
          .then(
              (respon) => {
                  console.log(respon.status);

                  setUser(respon.data)})
  },[]);

  useEffect(() => {
    axios
        .get("https://localhost:44332/api/Profile/UserBookings",{
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("tok"),
            }
        })
        .then(
            (respon) => {
                console.log(respon.status);

                setBookings(respon.data)})
},[]);
//
//
//
//
//   console.log(user);
//   console.log(bookings);

  <Header />;
  return (
    <div className={s.cabinet_wrapper}>
      <div className={s.wrapper}>
        <h2 className={s.h2text}>{t("cabinet.userCabinet")}</h2>
        <div className={s.infouser_block}>
          <div className={s.row}>
            <h3 className={s.username}>{t("cabinet.helloUser")} {user.name}</h3>
            <div className={s.btn_change}>
              <NavLink onClick={handleLogOut}
                       className={`me-3 ${s.change}`}
                      to="/login"
                      activeClassName={s.active}>
                  {t("cabinet.logOff")}
              </NavLink>
            </div>
          </div>

        
          <div className = {s.row}>
        <div className = {s.receptions_block}>
            <div className = {s.row}>
                <h5 className = {s.h5_resept}>{t("cabinet.userRecordings")}</h5>
            </div>
            <div className = {s.near}><span>{t("cabinet.dates")} </span></div>
            <div className = "coming"><span></span></div>
            <div className={s.row} style={{overflow:"scroll", width:"550px", padding:"6px"}}>
              {
                bookings.map((item,idx)=>{
                  return <tr key={idx}>
                    <td style={{paddingLeft:"15px"}}>{item.time},</td>
                      <td style={{color:"white"}}>П</td>
                  </tr>
              })
              }
            </div>
            <div style={{overflow:"scroll", height:"120px", padding:"2px", marginTop:"20px"}}>
            <div className = {s.near} ><span>{t("cabinet.price")}</span></div>
            {
               bookings.map((item,idx)=>{
                return <tr key={idx} >
                    <td style={{paddingLeft:"15px"}}>{item.price} грн</td>
                </tr>
            })
            }
            <div className={`${s.row} ${s.row1}`}>
            </div>
            </div>

        </div>

        </div>
            <NavLink
                className={` ${s.btn_online}`}
                to="/online"
                activeClassName={s.active}
                style={{marginLeft:"820px"}}
            >
                {t("cabinet.makeBooking")}
            </NavLink>
           </div>
        </div>
      </div>
  
  );
};

export default Cabinet;
