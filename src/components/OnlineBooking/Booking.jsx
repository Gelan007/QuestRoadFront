import React, {useEffect, useState} from "react";
import s from "./Booking.module.css";
import {NavLink, useHistory} from "react-router-dom";
import Header from "../Header_Footer/Header";
import pic1 from "./master.png";
import pic2 from "./services.png";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import axios from "axios";
import  "../../utils/i18next";
import {useTranslation} from "react-i18next";

export default function Booking() {
    const {t} = useTranslation();


    const[questName, setQuestName] = useState(0);
    const[questId, setQuestId] = useState(0);
    const[quests, setQuests] = useState([]);
    const [teamName, setTeamName] = useState("");
    const [countOfUsers, setCountOfUsers] = useState(0);
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");



    useEffect(() => {
        axios
            .get("https://localhost:44332/api/Quest",{
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
                    setQuests(respon.data)})
    },[]);


    async function createBooking(e){
         e.preventDefault();

        let res = await fetch("https://localhost:44332/api/Booking/Form", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("tok"),
            },
            body: JSON.stringify({Quest_id: questId, TeamName:teamName,CountOfUsers:countOfUsers,Description:description, Date:date}),
        });
        if(res.status==200){
            alert("Успешно");
        }
        else{
            alert("Введите корректные данные");
        }
       console.log(res);
       console.log(res.status);
    }

    // console.log(quests);

    let id = 0;


    return (
        <div className={s.booking}>
            <div className={s.container}>
                 <h1 className={s.h1Online}>{t("booking.onlineBooking")}</h1>
                <h3 className={s.h3Choose}>{t("booking.choose")}:</h3>
                <div className={s.container_choose}>


                    <form onSubmit={createBooking} className={s.formControl}>
                        <h4 className={s.h4choose}>{t("booking.date")}</h4>
                        <div className="mb-4">
                            <input onChange = {(e) => {const selectedDate= e.target.value;
                                setDate(selectedDate);
                                console.log(date)}}type="datetime-local" placeholder="date" />
                        </div>
                        <h4 className={s.h4choose}>{t("booking.teamName")}</h4>
                        <div>
                            <form>
                                <input type = "text" placeholder = "Название команды" onChange={(e)=>setTeamName(e.target.value)}  className = {s.input_promo1}></input>
                            </form>
                        </div>
                        <h4 className={s.h4choose}>{t("booking.count")}</h4>
                        <div>
                            <form>
                                <input type = "text" placeholder = "Количество пользователей" onChange={(e)=>setCountOfUsers(e.target.value)}  className = {s.input_promo1}></input>
                            </form>
                        </div>
                        <h4 className={s.h4choose}>{t("booking.review")}</h4>
                        <div>
                            <form>
                                <input type = "text" placeholder = "комментарий" onChange={(e)=>setDescription(e.target.value)}  className = {s.input_promo1}></input>
                            </form>
                        </div>

                        <h4 className={s.h4choose}>{t("booking.questName")}</h4>
                        <select onChange = {(e) => {const selectedQuest = e.target.value;
                            setQuestId(selectedQuest)}} key ={quests.quest_id}>
                            {quests.map(quests =>
                                <option key = {quests.name} name={quests.quest_id} value={quests.quest_id}>{quests.name}</option>
                            )}
                        </select>
                        <div>
                            <button type="submit" className={s.btn_login}>{t("booking.makeBook")} </button>


                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}