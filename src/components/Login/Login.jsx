import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import s from "./Login.module.css";
import imagecol from "./login_image.png";
import { NavLink } from "react-router-dom";
import Cabinet from "../UserCabinet/Cabinet";
import { useHistory } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import "../../utils/i18next";
import axios from "axios";



export default function Login({setIsLoggedIn, isLoggedIn, Email, setEmail}) {
  
    const [Password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const history = useHistory();
    const {t} = useTranslation();

    useEffect(() => {
        axios
            .get("https://localhost:44332/api/Quest/Popular",{
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Bearer "+ localStorage.getItem("tok"),
                }
            })
            .then(
                (respon) => {
                    console.log(respon);
                    console.log(respon.data);
                    localStorage.setItem("quests", JSON.stringify(respon.data));})
    },[]);

    useEffect(() => {
        if(localStorage.getItem('user-info') && isLoggedIn == true){
            history.push("/cabinet")
        }
    }, [])

    async function login(e) {
        e.preventDefault();
        let result = await fetch("https://localhost:44379/api/User/Login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({Email: Email, Password: Password}),
        });
        if(result.status === 200){
            result = await result.json();
            localStorage.setItem("user-info", JSON.stringify(result));
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem("tok",result.access_token);
            setToken(result);
            console.log(localStorage.getItem("tok"));
            setIsLoggedIn(true);
        }
        else if(result.status === 404){
            alert("Вы ввели неправильные данные");
        }
        else if(result.status === 400){
            alert("Пожалуйста, заполните поля");
        }
    }
    async function isAdminLogin(){
        let res = await fetch("https://localhost:44332/api/Role/Role", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("tok"),
            },
        });
        console.log(res.status);
        res = await res.json();
        localStorage.setItem("isAdminIn", JSON.stringify(res));
        console.log(localStorage.getItem("isAdminIn"));
    }

    isAdminLogin();


    
    return (
        <form onSubmit={login} className={s.formControl}>
        <div className={s.row}>
            <div className={s.col_6}>
                <h5 className={s.h5welcome}>{t("login.hello")} <span className={s.craftcuts_red}>QuestRoad</span> </h5>
                <h6 className = "mb-5 ml-5">{t("login.registration")} <NavLink to="/registration">{t("login.here")}</NavLink></h6>

                <h1 className={s.login}>{t("login.enter")}</h1>
                <div className={s.Login}>
                <div className = "form-group">

                    <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} className={'form-control' + ' w-50 ' + ' mb-3 ' +  s.email_input}/>
                    <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className={'form-control' + ' w-50 ' + s.password_input}/>
                    </div>
                    <button type="submit" onClick={isAdminLogin} className={s.btn_login}>Login </button>


                </div>
            </div>

            <div className={s.col_6}>
                <div className={s.img_block}>
                    <img className = {s.imagecol} src="mainQuest.jpg" alt="image_left"></img></div>
            </div>
        </div>
        </form>
    );
}