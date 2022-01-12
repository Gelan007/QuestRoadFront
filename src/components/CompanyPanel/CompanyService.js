import React, { useEffect, useState } from "react";
import {  Switch, Link, NavLink } from "react-router-dom";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Quest from "./Quest";
import axios from "axios";


function CompanyServices(props){


    useEffect(() => {
        axios
            .get("https://localhost:44332/api/Quest/Comp",{
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
                    localStorage.setItem("CompQues", JSON.stringify(respon.data));})
    },[]);
    return (
        <BrowserRouter>
            <div >
                <nav>
                    <div >
                        <ul >

                            <li className="nav-item">
                                <Link to={'./Quest'} className="nav-link">Quest</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br></br>
                <Switch>
                    <Route path="/Quest" render={() => <Quest/>}/>
                </Switch>
            </div>
        </BrowserRouter>

    )


}

export default  CompanyServices;