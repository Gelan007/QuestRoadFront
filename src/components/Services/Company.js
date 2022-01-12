import React, { useEffect, useState } from "react";
import {  Switch, Link, NavLink } from "react-router-dom";
import AddCompany from './AddCompany';
import CompanyList from './CompanyList';
import EditCompany from "./EditCompany";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";



function Company(props){

    return (
        <BrowserRouter>
            <div >
                <nav>
                    <div >
                        <ul >
                            <li>
                                {/* <NavLink>dsads</NavLink> */}
                                <Link to={'./AddCompany'} className="nav-link">Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'./CompanyList'} className="nav-link">List</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br></br>
                <Switch>
                    <Route path="/AddCompany" render={() => <AddCompany />} />
                    <Route path="/CompanyList" render={() => <CompanyList />} />
                    <Route path="/EditCompany" render={() => <EditCompany />} />


                    {/* //<Route path="./OrganizationList" component={Org}/>  */}

                </Switch>
            </div>
        </BrowserRouter>

    )


}

export default Company;