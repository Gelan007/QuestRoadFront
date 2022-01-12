import React, { useEffect, useState } from "react";
import {  Switch, Link, NavLink } from "react-router-dom";
import AddBooking from './AddBooking';
import BookingList from './BookingList';
import EditBooking from "./EditBooking";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";



function Booking(props){

    return (
        <BrowserRouter>
            <div >
                <nav>
                    <div >
                        <ul >
                            <li>
                                {/* <NavLink>dsads</NavLink> */}
                                <Link to={'./AddBooking'} className="nav-link">Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'./BookingList'} className="nav-link">List</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br></br>
                <Switch>
                    <Route path="/AddBooking" render={() => <AddBooking />} />
                    <Route path="/BookingList" render={() => <BookingList />} />
                    <Route path="/EditBooking" render={() => <EditBooking />} />
                    {/* //<Route path="./OrganizationList" component={Org}/>  */}

                </Switch>
            </div>
        </BrowserRouter>

    )


}

export default Booking;