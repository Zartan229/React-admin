import { List, SimpleList, Datagrid, TextField, EmailField } from "react-admin";
import MyUrlField from './MyUrlField';

export default function userList() { 
 return(
 <List>
    
    <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
          {/*  <TextField source="username" />*/} 
            <EmailField source="email" />
         {/*   <TextField source="address.street" />*/} 
            <TextField source="phone" />
            <MyUrlField   source="website" />
            <TextField source="company.name" />
        </Datagrid>
    {/*
            <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
    */}    
    </List>
);
}