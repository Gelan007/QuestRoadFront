import React from "react";

import {Edit,SimpleForm,TextInput,SearchInput} from 'react-admin';



const OrganizationEdit = (props) =>(
    <Edit {... props}>
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
    </Edit>


);

export default OrganizationEdit;