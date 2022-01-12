import React from "react";

import {Edit,SimpleForm,TextInput,SearchInput, Create} from 'react-admin';



const OrganizationCreate = (props) =>(
    <Create {... props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source="name"/>
            <TextInput source="email"/>
            <TextInput source="phone"/>
            <TextInput source="code"/>
            <TextInput source="taxes"/>
            <TextInput source="address"/>
            <TextInput source="founder"/>
            <TextInput source="account"/>
        </SimpleForm>
    </Create>


);

export default OrganizationCreate;