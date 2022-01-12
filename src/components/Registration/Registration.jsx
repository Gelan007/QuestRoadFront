import React, {useState} from "react";
import s from "./Registration.module.css";
import imagecol from "./login_image.png";
import {NavLink, useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";
import "../../utils/i18next";

export default function Registration({setIsLoggedIn, isLoggedIn}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [full_name, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const history = useHistory();
    const {t} = useTranslation();

    

    async function registration(e) {
        e.preventDefault();
        let res = await fetch("https://localhost:44379/api/User/Registration", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({Email: email, Phone: phone, Password: password, Name: full_name }),
        });
        console.log(res);
        console.log(res.status);
        if (res.status === 200) {
            history.push("/login")
        }
    }

    return (
        <div>
            <div className={s.row}>
                <div className={s.col_6}>
                    <li className={s.item}>
                    </li>
                    <h5 className={s.h5welcome}>{t("registration.hello")}<span className={s.craftcuts_red}>QuestRoad</span>
                        <h6 className = "mb-5">{t("registration.registration")} <NavLink to="/login">{t("registration.here")}</NavLink></h6>
                    </h5>
                    <form onSubmit={registration} className={s.formControl}>
                        <h1 className={s.login}>{t("registration.registr")}</h1>
                        <div className={s.Login}>
                            <div className="mb-3">
                                <h4>{t("registration.enterName")}</h4>
                                <input type="text" placeholder="name" onChange={(e)=>setFullName(e.target.value)} className="w-75" />
                            </div>
                            <div className="mb-4">
                                <h4>{t("registration.enterEmail")}</h4>
                                <input type="email" placeholder="mail" onChange={(e)=>setEmail(e.target.value)} className="w-75" />
                            </div>
                            <div className="mb-4">
                                <h4>{t("registration.enterPhone")}</h4>
                                <input type="text" placeholder="phone" onChange={(e)=>setPhone(e.target.value)} className="w-75" />
                            </div>
                            <div className="mb-4">
                                <h4>{t("registration.enterPassword")}</h4>
                                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="w-75" />
                            </div>
                            <button type="submit" className={s.btn_login}>{t("registration.registr")} </button>
                        </div>
                    </form>
                </div>
                <div className={s.col_6}>
                    <div className={s.img_block}>
                        <img className={s.imagecol} src="mainQuest.jpg" alt="image_left"></img></div>
                </div>
            </div>
        </div>
    );
}