import React, { useEffect, useState } from "react";
import {  Switch, Link, NavLink } from "react-router-dom";
import AddUser from './AddUser';
import UserList from './UserList';
import EditUser from "./EditUser";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";



function User(props){

    return (
        <BrowserRouter>
            <div >
                <nav>
                    <div >
                        <ul >
                            <li>
                                {/* <NavLink>dsads</NavLink> */}
                                <Link to={'./AddUser'} className="nav-link">Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'./UserList'} className="nav-link">List</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br></br>
                <Switch>
                    <Route path="/AddUser" render={() => <AddUser />} />
                    <Route path="/UserList" render={() => <UserList />} />
                    <Route path="/EditUser" render={() => <EditUser />} />
                    {/* //<Route path="./OrganizationList" component={Org}/>  */}

                </Switch>
            </div>
        </BrowserRouter>

    )


}

export default User;