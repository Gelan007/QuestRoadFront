import React, { useEffect, useState } from "react";
import {  Switch, Link, NavLink } from "react-router-dom";
import AddQuest from './AddQuest';
import QuestList from './QuestList';
import EditQuest from "./EditQuest";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";



function Quest(props){

    return (
        <BrowserRouter>
            <div >
                <nav>
                    <div >
                        <ul >
                            <li>
                                {/* <NavLink>dsads</NavLink> */}
                                <Link to={'./AddQuest'} className="nav-link">Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'./QuestList'} className="nav-link">List</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br></br>
                <Switch>
                    <Route path="/AddQuest" render={() => <AddQuest />} />
                    <Route path="/QuestList" render={() => <QuestList />} />
                    <Route path="/EditQuest" render={() => <EditQuest />} />
                    {/* //<Route path="./OrganizationList" component={Org}/>  */}

                </Switch>
            </div>
        </BrowserRouter>

    )


}

export default Quest;