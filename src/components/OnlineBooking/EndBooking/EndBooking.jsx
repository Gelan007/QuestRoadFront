import React, {useState} from "react";
import s from "./EndBooking.module.css";
import {NavLink, useHistory} from "react-router-dom";
import { render } from "@testing-library/react";
import { propTypes } from "react-bootstrap/esm/Image";


export default function EndBooking () {

    let serviceName = localStorage.getItem('bookingServiceName-info');
    let servicePrice = localStorage.getItem('bookingServicePrice-info');
    let barber = localStorage.getItem('bookingBarber-info');
    let date = localStorage.getItem('bookingDate-info');
    let obj = JSON.parse(localStorage.getItem('user-info'));
    let email = obj['email'];


    const [barberName, setBarberName] = useState('');
    const [price, setPrice] = useState('');
    const [customerEmail, setCustomerEmail] = useState("");
    const [hookServiceName, setHookServiceName] = useState("");
    const [hookDate, setHookDate] = useState("");
    // const [promocode, setPromocode] = useState("");
    const history = useHistory();

    // setBarberName(barber);
    // setCustomerEmail(email);
    // setHookServiceName(serviceName);
    // setHookDate(date);

    async function BookingApi(e) {
        e.preventDefault();
        let result = await fetch("https://craftcutstestapiproject20211120225609.azurewebsites.net/api/Booking", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({barber, email, serviceName, date}),
        });
        console.log(result);
        console.log(result.status);

        // console.log({barberName, customerEmail, hookServiceName, hookDate});
        console.log({barber, email, serviceName, date});
        result = await result.json();
        localStorage.setItem("booking-info", JSON.stringify(result));
        // localStorage.setItem('isLoggedIn', true);
        // setIsLoggedIn(true);
        history.push("/endbooking")
        console.log(result);
        console.log(result.status);
    }





    return (
        <div className = {s.doneBlock}>
            <h1 className = {s.we}>Вы успешно записались!</h1><div>
            <div className = {s.table}>
                <div className = {s.headtable}>
                    <h4 className = {s.ht_text}>Процедура</h4>
                    <h4 className = {s.ht_text}>Мастер</h4>
                    <h4 className = {s.ht_text}>Время</h4>
                    <h4 className = {s.ht_text}>Цена</h4>
                </div>
                <div className = {s.data}>
                    <h5 className = {s.type}>{serviceName}</h5>
                    <h5 className = {s.name}>{barber}</h5>
                    <h5 className = {s.time}>{date}</h5>
                    <h5 className = {s.price}><span>грн</span></h5>
                </div>
            </div>

            <div className = {s.goback_block}>
                <NavLink className = {s.goback} to = "/cabinet">Вернуться в личный кабинет</NavLink>
            </div>
        </div>
        </div>
    );}