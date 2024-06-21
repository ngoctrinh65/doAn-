import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, TextInput, Create, SelectInput, ReferenceInput }


    from "react-admin";
export const listUser = (props) =>
(
    <List {...props} style={{ overflowX: "auto" }}>
        <Datagrid>
            <TextField source="id" />

            <TextField source="fullname" />
            <TextField source="password" />
            <TextField source="email" />
            <TextField source="role.name" />


            <EditButton />
        </Datagrid>
    </List>
);
export const editUser = (props) =>
(
    <Edit {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>
            <TextInput source="fullname" />
            <TextInput source="password" />
            <TextInput source="username" />


            <ReferenceInput label="Role"
                source="role.id"
                reference="roles">
                <SelectInput optionText="name" />
            </ReferenceInput>
            
        </SimpleForm>
    </Edit>
);
export const createUser = (props) =>
(
    <Create {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>
            <TextInput source="fullname" />
            <TextInput source="password" />
            <TextInput source="username" />

            <ReferenceInput label="Role"
                source="role.id"
                reference="roles">

                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);