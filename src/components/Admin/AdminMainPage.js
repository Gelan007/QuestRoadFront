import React from 'react';
import {Admin, Resource} from 'react-admin';
import lb4Provider from 'react-admin-lb4';
import jsonServerProvider from 'ra-data-json-server';
import OrganizationList from './OrganizationList';
import OrganizationEdit from "./OrganizationEdit";
import OrganizationCreate from './OrganizationCreate';



function AdminMainPage(){
    const dataProvider = jsonServerProvider('https://localhost:44312/api');
    return (
        <Admin dataProvider={dataProvider}> 
          <Resource name='Organization' list={OrganizationList} edit={OrganizationEdit} create={OrganizationCreate}/>
        </Admin>
    );
}
export default AdminMainPage;