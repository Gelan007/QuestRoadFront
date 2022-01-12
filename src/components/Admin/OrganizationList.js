import React from "react";
import OrganizationEdit from "./OrganizationEdit";
import {List, Datagrid,TextField, SearchInput,Filter,EmailField} from 'react-admin';


const OrganizationFilter = (props) => (
    <Filter {...props}>
      <SearchInput placeholder='Email' source="email" resettable alwaysOn />
    </Filter>
);



const OrganizationList = (props) => (

    <List {...props } filters ={<OrganizationFilter/>} >
    <Datagrid rowClick='edit'> 
    
            <TextField source="id" label="id"  />
    
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="code" />
            <TextField source="taxes" />
            <TextField source="address" />
            <TextField source="founder" />
            <TextField source="account" />
    </Datagrid>
</List>

);
    

        

    


export default OrganizationList;